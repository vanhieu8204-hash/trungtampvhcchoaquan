import { Link } from '@tanstack/react-router'
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  ShieldCheck, 
  FileCheck2,
  Users
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t-4 border-red-700 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Column 1: Organization */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-700 border border-amber-400 flex items-center justify-center text-amber-300 font-bold text-lg shrink-0">
                ★
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  UBND XÃ HOA QUÂN
                </div>
                <div className="text-sm font-bold text-white uppercase leading-snug">
                  TRUNG TÂM PHỤC VỤ HÀNH CHÍNH CÔNG
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Cơ quan đầu mối tiếp nhận, hướng dẫn, số hóa, giải quyết và trả kết quả thủ tục hành chính thuộc thẩm quyền của UBND xã theo cơ chế một cửa, một cửa liên thông hiện đại.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-950/70 border border-red-800 text-amber-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Chính quyền điện tử - Đề án 06</span>
            </div>
          </div>

          {/* Column 2: Contact Details */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              Thông tin liên hệ
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Trụ sở HĐND & UBND xã Hoa Quân, tỉnh Nghệ An</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Tổng đài Một cửa: <strong className="text-white">0238.3846.888</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <span>Đường dây nóng phản ánh: <strong className="text-white">0912.345.678</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Email công vụ: <span className="text-slate-200">motcua.hoaquan@nghean.gov.vn</span></span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div>Sáng: 07:30 - 11:30 | Chiều: 13:30 - 17:00</div>
                  <div className="text-[11px] text-slate-400">Từ thứ Hai đến thứ Sáu (trừ ngày nghỉ Lễ)</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              Tiện ích tra cứu
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/thu-tuc-hanh-chinh" className="text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Tra cứu 120+ Bộ TTHC cấp xã</span>
                </Link>
              </li>
              <li>
                <Link to="/tra-cuu-ho-so" className="text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Kiểm tra tiến độ hồ sơ theo mã</span>
                </Link>
              </li>
              <li>
                <Link to="/dat-lich-hen" className="text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Đăng ký lịch làm việc trực tuyến</span>
                </Link>
              </li>
              <li>
                <Link to="/khao-sat-phan-anh" className="text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>Khảo sát mức độ hài lòng (SIPAS)</span>
                </Link>
              </li>
              <li>
                <Link to="/gioi-thieu" className="text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-500" />
                  <span>Danh bạ các quầy tiếp nhận và cán bộ</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: External Portals */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-amber-400 pl-2">
              Liên kết cổng chính phủ
            </h3>
            <div className="space-y-2 text-xs">
              <a 
                href="https://dichvucong.gov.vn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-md bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <span>Cổng Dịch vụ công Quốc gia</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <a 
                href="https://dichvucong.nghean.gov.vn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-md bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <span>Cổng Dịch vụ công Tỉnh Nghệ An</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <a 
                href="https://nghean.gov.vn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-md bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              >
                <span>Cổng Thông tin Điện tử Tỉnh Nghệ An</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <p>© 2026 Bản quyền thuộc về Trung tâm Phục vụ Hành chính công xã Hoa Quân, tỉnh Nghệ An.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Chính sách bảo mật</span>
            <span>•</span>
            <span>Quy chế Một cửa</span>
            <span>•</span>
            <span>Hỗ trợ kỹ thuật</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
