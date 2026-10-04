import { createFileRoute, Link } from '@tanstack/react-router'
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle, 
  Clock, 
  Users, 
  Scale, 
  FileText, 
  Phone, 
  Mail, 
  ArrowRight,
  Sparkles,
  MapPin
} from 'lucide-react'
import { COUNTERS, LEADERSHIP_CONTACTS } from '../data/counters-info'

export const Route = createFileRoute('/gioi-thieu')({
  component: GioiThieuPage,
})

function GioiThieuPage() {
  const fiveSteps = [
    {
      step: '01',
      title: 'Tiếp nhận & Kiểm tra hồ sơ',
      desc: 'Công chức Một cửa đón tiếp, kiểm tra thành phần hồ sơ, hướng dẫn số hóa và cấp Giấy tiếp nhận hẹn trả kết quả kèm mã QR tra cứu.',
    },
    {
      step: '02',
      title: 'Chuyển giao & Thẩm định chuyên môn',
      desc: 'Hồ sơ điện tử được chuyển ngay tới công chức phụ trách lĩnh vực (Tư pháp, Địa chính, LĐTBXH). Tiến hành thẩm tra thực địa nếu có.',
    },
    {
      step: '03',
      title: 'Phê duyệt & Ký số văn bản',
      desc: 'Lãnh đạo UBND xã (Chủ tịch / Phó Chủ tịch) kiểm tra hồ sơ trên Hệ thống quản lý văn bản điều hành và ký số theo thẩm quyền.',
    },
    {
      step: '04',
      title: 'Vào sổ số & Đóng dấu điện tử',
      desc: 'Bộ phận Văn thư - Một cửa cấp số chứng thực/hộ tịch, đóng dấu cơ quan và đính kèm kết quả giải quyết có giá trị pháp lý vào kho dữ liệu.',
    },
    {
      step: '05',
      title: 'Trả kết quả & Thu phí theo quy định',
      desc: 'Trả kết quả trước hạn hoặc đúng hẹn cho công dân trực tiếp tại Quầy 1 hoặc qua dịch vụ Bưu chính công ích, đồng thời khảo sát hài lòng.',
    },
  ]

  const servicePrinciples = [
    {
      title: 'Công khai, Minh bạch',
      desc: 'Niêm yết công khai 100% thủ tục hành chính, mức phí, quy trình và thời hạn giải quyết tại bảng điện tử và cổng thông tin.',
    },
    {
      title: 'Tận tình, Chu đáo',
      desc: 'Cán bộ phục vụ nhân dân với thái độ lịch thiệp, khiêm tốn, lắng nghe; không hách dịch, nhũng nhiễu hay yêu cầu bổ sung quá 01 lần.',
    },
    {
      title: 'Chính xác, Đúng hẹn',
      desc: 'Giải quyết hồ sơ đúng quy định pháp luật. Trường hợp bất khả kháng phải chậm trễ, bắt buộc phải có văn bản xin lỗi và hẹn lại ngày trả.',
    },
    {
      title: 'Chuyển đổi số toàn diện',
      desc: 'Áp dụng chữ ký số công vụ, liên thông dữ liệu VNeID và khuyến khích công dân thanh toán phí, lệ phí không dùng tiền mặt.',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
      
      {/* Page Header */}
      <div className="bg-linear-to-r from-red-800 to-red-950 text-white rounded-2xl p-6 sm:p-10 shadow-lg border-b-4 border-amber-400">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/80 border border-amber-400/40 text-amber-200 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5 text-amber-300" />
            <span>Chức năng, Nhiệm vụ & Cơ cấu tổ chức</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
            Giới Thiệu Trung Tâm Phục Vụ Hành Chính Công
          </h1>
          <p className="text-red-100 text-sm sm:text-base leading-relaxed">
            Bộ phận Tiếp nhận và Trả kết quả theo cơ chế một cửa, một cửa liên thông của Ủy ban nhân dân xã Hoa Quân, tỉnh Nghệ An.
          </p>
        </div>
      </div>

      {/* 1. Tổng quan & Mục tiêu thành lập */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 text-red-700">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span>Vị Trí & Chức Năng Hoạt Động</span>
        </h2>
        <div className="text-sm text-slate-700 leading-relaxed space-y-3">
          <p>
            <strong>Trung tâm Phục vụ Hành chính công xã Hoa Quân</strong> (Bộ phận Tiếp nhận và Trả kết quả hiện đại) là đơn vị đầu mối chịu sự chỉ đạo, điều hành trực tiếp của Ủy ban nhân dân xã và Chủ tịch UBND xã Hoa Quân, tỉnh Nghệ An.
          </p>
          <p>
            Trung tâm được trang bị hệ thống máy móc, thiết bị hiện đại: máy lấy số xếp hàng tự động, máy tra cứu thông tin thủ tục cảm ứng kiosoft, hệ thống màn hình hiển thị số thứ tự tại các quầy, camera giám sát công vụ trực tuyến kết nối về UBND tỉnh Nghệ An và máy tính bảng đánh giá độ hài lòng tại từng quầy giao dịch.
          </p>
          <p>
            Với phương châm <em>"Lấy sự hài lòng của Nhân dân làm thước đo chất lượng phục vụ của Chính quyền"</em>, toàn thể cán bộ công chức Trung tâm quyết tâm xây dựng nền hành chính phục vụ chuyên nghiệp, hiện đại và thân thiện.
          </p>
        </div>
      </section>

      {/* 2. 4 Nguyên tắc phục vụ */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900">
          4 Nguyên Tắc Cốt Lõi Khi Phục Vụ Nhân Dân
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicePrinciples.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center">
                  {idx + 1}
                </span>
                <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-9">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Quy trình 5 bước giải quyết TTHC */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div>
          <div className="text-amber-400 text-xs font-bold uppercase tracking-wider">
            Chuẩn hóa quy trình ISO 9001:2015
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Quy Trình 5 Bước Giải Quyết Thủ Tục Hành Chính
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {fiveSteps.map((s, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2 relative">
              <div className="text-2xl font-black text-amber-400 opacity-80">
                {s.step}
              </div>
              <h3 className="font-bold text-white text-sm leading-snug">
                {s.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Danh bạ 4 Quầy tiếp nhận và cán bộ */}
      <section className="space-y-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-red-700">
            Đội ngũ phụ trách trực tiếp
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
            Danh Bạ Các Quầy Giao Dịch & Cán Bộ Thường Trực
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COUNTERS.map((counter) => (
            <div
              key={counter.number}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-700 text-white flex items-center justify-center font-black text-base shadow-xs">
                    Q.{counter.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{counter.title}</h3>
                    <div className="text-xs font-bold text-red-700">{counter.officer}</div>
                    <div className="text-[11px] text-slate-500">{counter.role}</div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {counter.description}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <div className="text-[11px] font-bold text-slate-700 uppercase">
                  Nhiệm vụ chính:
                </div>
                {counter.fields.map((field, idx) => (
                  <div key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{field}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-medium">
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>{counter.phone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>{counter.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Lãnh đạo UBND xã phụ trách */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 border border-red-200 shadow-xs space-y-6">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-red-700">
            Lãnh đạo UBND xã Hoa Quân
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
            Chỉ Đạo Hoạt Động & Tiếp Nhận Ý Kiến Phản Ánh
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEADERSHIP_CONTACTS.map((leader, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-red-700">{leader.title}</span>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 font-semibold">
                  Lãnh đạo xã
                </span>
              </div>
              <div className="text-lg font-bold text-slate-900">{leader.name}</div>
              <p className="text-xs text-slate-600">{leader.role}</p>
              <div className="pt-2 border-t border-slate-200 text-xs space-y-1.5 text-slate-700">
                <div><strong>Lịch trực tiếp:</strong> {leader.schedule}</div>
                <div><strong>Đường dây nóng:</strong> <span className="text-red-700 font-bold">{leader.hotline}</span></div>
                <div><strong>Email:</strong> {leader.email}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-slate-100 rounded-xl border border-slate-200">
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-slate-900">Bạn cần hỗ trợ thực hiện thủ tục hành chính?</h3>
          <p className="text-xs text-slate-600 mt-0.5">Đặt lịch hẹn trực tuyến trước để được tiếp đón chu đáo và không mất thời gian chờ.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/dat-lich-hen"
            className="px-4 py-2.5 rounded-lg bg-red-700 hover:bg-red-800 text-white text-xs font-bold transition-colors"
          >
            Đặt lịch hẹn ngay
          </Link>
          <Link
            to="/thu-tuc-hanh-chinh"
            className="px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-semibold transition-colors"
          >
            Tra cứu thủ tục
          </Link>
        </div>
      </div>

    </div>
  )
}
