import { createFileRoute } from '@tanstack/react-router'
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle, 
  Printer, 
  User, 
  Phone, 
  CreditCard,
  FileText
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/dat-lich-hen')({
  component: DatLichHenPage,
})

function DatLichHenPage() {
  const [formData, setFormData] = useState({
    citizenName: '',
    phone: '',
    idCardNumber: '',
    serviceType: 'Tư pháp - Hộ tịch (Khai sinh, Kết hôn, Trích lục)',
    appointmentDate: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
    appointmentTimeSlot: '08:00 - 09:00',
    notes: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successTicket, setSuccessTicket] = useState<any | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg(null)

    const ticketCode = `LH-${Math.floor(100000 + Math.random() * 900000)}`

    try {
      // 1. Submit to Netlify Forms via AJAX
      const formPayload = new URLSearchParams()
      formPayload.append('form-name', 'appointment_booking')
      formPayload.append('citizenName', formData.citizenName)
      formPayload.append('phone', formData.phone)
      formPayload.append('idCardNumber', formData.idCardNumber)
      formPayload.append('serviceType', formData.serviceType)
      formPayload.append('appointmentDate', formData.appointmentDate)
      formPayload.append('appointmentTimeSlot', formData.appointmentTimeSlot)
      formPayload.append('notes', formData.notes)

      try {
        await fetch('/__forms.html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: formPayload.toString(),
        })
      } catch (fErr) {
        console.warn('Netlify form submission note:', fErr)
      }

      // 2. Submit to API database
      try {
        await fetch('/api/appointments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
      } catch (apiErr) {
        console.warn('API database note:', apiErr)
      }

      setSuccessTicket({
        ticketCode,
        ...formData,
        issuedAt: new Date().toLocaleString('vi-VN'),
      })
    } catch (err: any) {
      setErrorMsg('Đã có lỗi xảy ra khi đăng ký. Xin vui lòng thử lại hoặc gọi tổng đài 0238.3846.888.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header */}
      <div className="bg-linear-to-r from-red-800 to-red-950 text-white rounded-2xl p-6 sm:p-10 shadow-lg border-b-4 border-amber-400">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/80 border border-amber-400/40 text-amber-200 text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5 text-amber-300" />
            <span>Tiết kiệm thời gian • Không cần chờ đợi</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
            Đặt Lịch Hẹn Làm Việc Trực Tuyến
          </h1>
          <p className="text-red-100 text-sm sm:text-base leading-relaxed">
            Đăng ký trước ngày giờ làm việc tại Trung tâm Phục vụ Hành chính công xã Hoa Quân để được chuẩn bị trước hồ sơ và phục vụ ưu tiên đúng khung giờ.
          </p>
        </div>
      </div>

      {successTicket ? (
        /* Confirmation Ticket Card */
        <div className="bg-white rounded-2xl p-6 sm:p-10 border-2 border-emerald-500 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Đăng ký lịch hẹn thành công
            </span>
            <h2 className="text-2xl font-black text-slate-900">
              PHIẾU HẸN LÀM VIỆC ĐIỆN TỬ
            </h2>
            <div className="text-2xl font-mono font-black text-red-700 bg-red-50 inline-block px-4 py-1 rounded-lg border border-red-200 mt-2">
              MÃ SỐ: {successTicket.ticketCode}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div>
              <span className="text-slate-500">Họ và tên công dân:</span>
              <div className="font-bold text-slate-900 text-sm">{successTicket.citizenName}</div>
            </div>
            <div>
              <span className="text-slate-500">Số điện thoại liên hệ:</span>
              <div className="font-bold text-slate-900 text-sm">{successTicket.phone}</div>
            </div>
            <div>
              <span className="text-slate-500">Số Căn cước công dân:</span>
              <div className="font-bold text-slate-900 text-sm font-mono">{successTicket.idCardNumber}</div>
            </div>
            <div>
              <span className="text-slate-500">Lĩnh vực thủ tục đăng ký:</span>
              <div className="font-bold text-red-700 text-sm">{successTicket.serviceType}</div>
            </div>
            <div>
              <span className="text-slate-500">Ngày hẹn làm việc:</span>
              <div className="font-bold text-slate-900 text-sm">{successTicket.appointmentDate}</div>
            </div>
            <div>
              <span className="text-slate-500">Khung giờ tiếp nhận:</span>
              <div className="font-bold text-emerald-700 text-sm">{successTicket.appointmentTimeSlot}</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1">
            <div className="font-bold flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Hướng dẫn khi đến làm thủ tục:</span>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Vui lòng có mặt tại Bộ phận Một cửa xã Hoa Quân trước giờ hẹn từ 5 - 10 phút.</li>
              <li>Xuất trình mã số phiếu hẹn hoặc tin nhắn xác nhận tại Quầy số 1 để nhận số thứ tự ưu tiên.</li>
              <li>Mang theo bản chính CCCD hoặc điện thoại có ứng dụng VNeID mức 2 cùng các giấy tờ thành phần liên quan.</li>
            </ul>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <button
              onClick={() => setSuccessTicket(null)}
              className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50"
            >
              Đăng ký thêm lịch hẹn khác
            </button>
            <button
              onClick={() => window.print()}
              className="px-5 py-2.5 rounded-lg bg-red-700 hover:bg-red-800 text-white text-xs font-bold flex items-center gap-2 shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>In phiếu hẹn</span>
            </button>
          </div>
        </div>
      ) : (
        /* Appointment Booking Form */
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-lg font-bold text-slate-900">
              Thông Tin Đăng Ký Lịch Làm Việc
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Vui lòng điền đầy đủ và chính xác thông tin để cán bộ một cửa đối chiếu khi tiếp nhận.
            </p>
          </div>

          {errorMsg && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Họ và tên công dân <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.citizenName}
                    onChange={(e) => setFormData({ ...formData, citizenName: e.target.value })}
                    placeholder="Ví dụ: Nguyễn Văn Hùng"
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-red-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Số điện thoại liên lạc <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ví dụ: 0912 345 678"
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-red-600"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Số Căn cước công dân (12 số) <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <CreditCard className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.idCardNumber}
                    onChange={(e) => setFormData({ ...formData, idCardNumber: e.target.value })}
                    placeholder="Ví dụ: 040092001234"
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-red-600 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Lĩnh vực thủ tục cần làm <span className="text-red-600">*</span>
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-red-600 bg-white"
                >
                  <option value="Tư pháp - Hộ tịch (Khai sinh, Kết hôn, Trích lục)">
                    Tư pháp - Hộ tịch (Khai sinh, Kết hôn, Trích lục)
                  </option>
                  <option value="Chứng thực bản sao, Chứng thực chữ ký">
                    Chứng thực bản sao, Chứng thực chữ ký
                  </option>
                  <option value="Đất đai - Địa chính - Môi trường">
                    Đất đai - Địa chính - Môi trường
                  </option>
                  <option value="Lao động - Thương binh & Xã hội">
                    Lao động - Thương binh & Xã hội (Trợ cấp, người có công)
                  </option>
                  <option value="Cấp phép xây dựng, Hộ kinh doanh">
                    Cấp phép xây dựng, Hộ kinh doanh
                  </option>
                  <option value="Lãnh đạo UBND xã tiếp công dân (Thứ 5 hàng tuần)">
                    Lãnh đạo UBND xã tiếp công dân (Thứ 5 hàng tuần)
                  </option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Ngày hẹn mong muốn <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    required
                    value={formData.appointmentDate}
                    onChange={(e) => setFormData({ ...formData, appointmentDate: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-red-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Khung giờ hẹn <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.appointmentTimeSlot}
                    onChange={(e) => setFormData({ ...formData, appointmentTimeSlot: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-red-600 bg-white"
                  >
                    <option value="08:00 - 09:00">Buổi sáng: 08:00 - 09:00</option>
                    <option value="09:00 - 10:00">Buổi sáng: 09:00 - 10:00</option>
                    <option value="10:00 - 11:00">Buổi sáng: 10:00 - 11:00</option>
                    <option value="14:00 - 15:00">Buổi chiều: 14:00 - 15:00</option>
                    <option value="15:00 - 16:30">Buổi chiều: 15:00 - 16:30</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                Nội dung chi tiết hoặc yêu cầu kèm theo (nếu có)
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Ghi rõ tên hồ sơ cần làm hoặc yêu cầu hỗ trợ đặc biệt..."
                className="w-full p-3 rounded-lg border border-slate-300 text-sm focus:outline-hidden focus:border-red-600"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-red-700 hover:bg-red-800 disabled:opacity-50 text-white text-sm font-bold shadow-md transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Đang xử lý đăng ký...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Xác nhận đăng ký lịch hẹn</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  )
}
