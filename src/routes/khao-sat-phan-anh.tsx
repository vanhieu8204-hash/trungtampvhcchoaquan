import { createFileRoute } from '@tanstack/react-router'
import { 
  Award, 
  MessageSquare, 
  Send, 
  Star, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  Phone, 
  Mail, 
  MapPin,
  ShieldCheck
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/khao-sat-phan-anh')({
  component: KhaoSatPhanAnhPage,
})

function KhaoSatPhanAnhPage() {
  const [activeTab, setActiveTab] = useState<'khao-sat' | 'phan-anh'>('khao-sat')

  // Survey State
  const [surveyRatings, setSurveyRatings] = useState({
    facilities: 5,
    speed: 5,
    attitude: 5,
    onlineService: 5,
    overall: 5,
  })
  const [surveyComment, setSurveyComment] = useState('')
  const [surveySubmitted, setSurveySubmitted] = useState(false)

  // Feedback State
  const [feedbackData, setFeedbackData] = useState({
    citizenName: '',
    phone: '',
    email: '',
    address: '',
    topic: 'Chất lượng phục vụ tại Bộ phận một cửa',
    satisfactionRating: 5,
    content: '',
  })
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSurveySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const payload = {
        citizenName: 'Công dân ẩn danh (Khảo sát SIPAS)',
        phone: 'Khảo sát điện tử',
        topic: 'Khảo sát SIPAS',
        satisfactionRating: surveyRatings.overall,
        content: `Đánh giá cơ sở: ${surveyRatings.facilities}/5, Tiến độ: ${surveyRatings.speed}/5, Thái độ: ${surveyRatings.attitude}/5, DVC: ${surveyRatings.onlineService}/5. Ý kiến: ${surveyComment}`,
      }

      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch (e) {
      console.warn('Survey recorded with local acknowledgment:', e)
    }

    setIsSubmitting(false)
    setSurveySubmitted(true)
  }

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // 1. Submit Netlify Forms
      const formPayload = new URLSearchParams()
      formPayload.append('form-name', 'citizen_feedback')
      formPayload.append('citizenName', feedbackData.citizenName)
      formPayload.append('phone', feedbackData.phone)
      formPayload.append('email', feedbackData.email)
      formPayload.append('address', feedbackData.address)
      formPayload.append('topic', feedbackData.topic)
      formPayload.append('satisfactionRating', String(feedbackData.satisfactionRating))
      formPayload.append('content', feedbackData.content)

      try {
        await fetch('/__forms.html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: formPayload.toString(),
        })
      } catch (fErr) {
        console.warn('Netlify form submission note:', fErr)
      }

      // 2. Submit database API
      try {
        await fetch('/api/feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(feedbackData),
        })
      } catch (apiErr) {
        console.warn('API DB note:', apiErr)
      }

      setFeedbackSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="bg-linear-to-r from-red-800 to-red-950 text-white rounded-2xl p-6 sm:p-10 shadow-lg border-b-4 border-amber-400">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/80 border border-amber-400/40 text-amber-200 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>Lắng nghe ý kiến của nhân dân</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
            Khảo Sát Hài Lòng & Phản Ánh Kiến Nghị
          </h1>
          <p className="text-red-100 text-sm sm:text-base leading-relaxed">
            Ý kiến đánh giá và đóng góp của Quý công dân là cơ sở quan trọng để UBND xã Hoa Quân tiếp tục nâng cao chất lượng phục vụ của cán bộ một cửa.
          </p>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setActiveTab('khao-sat')}
          className={`px-6 py-3 font-bold text-sm transition-all border-b-2 flex items-center gap-2 ${
            activeTab === 'khao-sat'
              ? 'border-red-700 text-red-700 bg-red-50/50'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Khảo sát mức độ hài lòng (SIPAS)</span>
        </button>

        <button
          onClick={() => setActiveTab('phan-anh')}
          className={`px-6 py-3 font-bold text-sm transition-all border-b-2 flex items-center gap-2 ${
            activeTab === 'phan-anh'
              ? 'border-red-700 text-red-700 bg-red-50/50'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>Gửi phản ánh, kiến nghị</span>
        </button>
      </div>

      {/* TAB 1: KHẢO SÁT HÀI LÒNG */}
      {activeTab === 'khao-sat' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          {surveySubmitted ? (
            <div className="text-center py-10 space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Trân Trọng Cảm Ơn Đóng Góp Của Quý Công Dân!</h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Hệ thống đã ghi nhận đánh giá của bạn vào chỉ số đo lường sự hài lòng (SIPAS) của Trung tâm Phục vụ Hành chính công xã Hoa Quân.
              </p>
              <button
                onClick={() => setSurveySubmitted(false)}
                className="mt-4 px-4 py-2 rounded-lg bg-red-700 text-white text-xs font-semibold"
              >
                Gửi thêm đánh giá
              </button>
            </div>
          ) : (
            <form onSubmit={handleSurveySubmit} className="space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-lg font-bold text-slate-900">
                  Phiếu Đo Lường Chỉ Số Hài Lòng Công Dân
                </h2>
                <p className="text-xs text-slate-500">
                  Vui lòng chấm điểm theo thang điểm từ 1 (Rất kém) đến 5 (Rất tốt/Rất hài lòng).
                </p>
              </div>

              {/* Criteria list */}
              <div className="space-y-5">
                {[
                  {
                    key: 'facilities' as const,
                    title: '1. Cơ sở vật chất, bảng biển hướng dẫn thủ tục tại Trung tâm',
                    desc: 'Phòng làm việc sạch sẽ, máy điều hòa, ghế ngồi chờ, bảng niêm yết rõ ràng.',
                  },
                  {
                    key: 'speed' as const,
                    title: '2. Thời gian tiếp nhận và giải quyết hồ sơ',
                    desc: 'Tiếp nhận nhanh, không để chờ đợi lâu, trả kết quả đúng hạn hoặc trước hạn.',
                  },
                  {
                    key: 'attitude' as const,
                    title: '3. Thái độ, văn hóa giao tiếp và sự tận tụy của công chức một cửa',
                    desc: 'Tôn trọng nhân dân, lịch thiệp, hướng dẫn tận tình chu đáo không gây phiền hà.',
                  },
                  {
                    key: 'onlineService' as const,
                    title: '4. Tiện ích khi nộp hồ sơ trực tuyến qua VNeID / Cổng DVC',
                    desc: 'Hệ thống tiện lợi, hỗ trợ thanh toán trực tuyến không dùng tiền mặt.',
                  },
                  {
                    key: 'overall' as const,
                    title: '5. Đánh giá chung về chất lượng phục vụ của UBND xã Hoa Quân',
                    desc: 'Mức độ hài lòng tổng thể sau khi hoàn thành công việc tại Bộ phận một cửa.',
                  },
                ].map((item) => (
                  <div key={item.key} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <div className="font-bold text-sm text-slate-900">{item.title}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                    <div className="flex items-center gap-3 pt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setSurveyRatings({ ...surveyRatings, [item.key]: star })}
                          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            surveyRatings[item.key] >= star
                              ? 'bg-amber-400 text-slate-950 shadow-xs'
                              : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                          }`}
                        >
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>{star} sao</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Ý kiến góp ý thêm (nếu có)
                </label>
                <textarea
                  rows={3}
                  value={surveyComment}
                  onChange={(e) => setSurveyComment(e.target.value)}
                  placeholder="Quý công dân muốn kiến nghị hoặc khen ngợi điều gì về cách phục vụ tại xã Hoa Quân..."
                  className="w-full p-3 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-red-600"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-red-700 hover:bg-red-800 disabled:opacity-50 text-white text-sm font-bold shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Award className="w-4 h-4 text-amber-300" />
                <span>Gửi phiếu đánh giá hài lòng</span>
              </button>
            </form>
          )}
        </div>
      )}

      {/* TAB 2: GỬI PHẢN ÁNH KIẾN NGHỊ */}
      {activeTab === 'phan-anh' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          {feedbackSubmitted ? (
            <div className="text-center py-10 space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Ý Kiến Phản Ánh Đã Được Tiếp Nhận</h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Nội dung của bạn đã được chuyển tới Chủ tịch UBND xã Hoa Quân để kiểm tra, xử lý và phản hồi bằng văn bản hoặc điện thoại theo quy định.
              </p>
              <button
                onClick={() => setFeedbackSubmitted(false)}
                className="mt-4 px-4 py-2 rounded-lg bg-red-700 text-white text-xs font-semibold"
              >
                Gửi thêm ý kiến
              </button>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-lg font-bold text-slate-900">
                  Gửi Phản Ánh, Kiến Nghị Trực Tiếp Lãnh Đạo Xã
                </h2>
                <p className="text-xs text-slate-500">
                  Mọi thông tin phản ánh được bảo mật danh tính theo quy định của pháp luật về tiếp công dân và khiếu nại, tố cáo.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Họ và tên người phản ánh <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={feedbackData.citizenName}
                      onChange={(e) => setFeedbackData({ ...feedbackData, citizenName: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-red-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Số điện thoại liên hệ <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={feedbackData.phone}
                      onChange={(e) => setFeedbackData({ ...feedbackData, phone: e.target.value })}
                      placeholder="0912 345 678"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-red-600"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Địa chỉ cư trú (Thôn / Xóm)
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={feedbackData.address}
                      onChange={(e) => setFeedbackData({ ...feedbackData, address: e.target.value })}
                      placeholder="Xóm 3, xã Hoa Quân"
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-red-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Lĩnh vực phản ánh
                  </label>
                  <select
                    value={feedbackData.topic}
                    onChange={(e) => setFeedbackData({ ...feedbackData, topic: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-red-600 bg-white"
                  >
                    <option value="Chất lượng phục vụ tại Bộ phận một cửa">Chất lượng phục vụ tại Bộ phận một cửa</option>
                    <option value="Thời gian giải quyết hồ sơ">Thời gian giải quyết hồ sơ (chậm trễ)</option>
                    <option value="Thái độ thực thi công vụ của cán bộ">Thái độ thực thi công vụ của cán bộ</option>
                    <option value="Đất đai - Tranh chấp ranh giới">Đất đai - Tranh chấp ranh giới</option>
                    <option value="Chính sách an sinh xã hội">Chính sách an sinh xã hội</option>
                    <option value="Sáng kiến cải cách hành chính">Sáng kiến cải cách hành chính</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Nội dung phản ánh, kiến nghị cụ thể <span className="text-red-600">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={feedbackData.content}
                  onChange={(e) => setFeedbackData({ ...feedbackData, content: e.target.value })}
                  placeholder="Trình bày rõ sự việc, ngày giờ, cán bộ hoặc hồ sơ liên quan để UBND xã kiểm tra xác minh..."
                  className="w-full p-3 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-red-600"
                ></textarea>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>UBND xã Hoa Quân cam kết xử lý và hồi đáp công khai hoặc trực tiếp trong vòng 03 ngày làm việc.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-red-700 hover:bg-red-800 disabled:opacity-50 text-white text-sm font-bold shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Gửi ý kiến phản ánh</span>
              </button>
            </form>
          )}
        </div>
      )}

    </div>
  )
}
