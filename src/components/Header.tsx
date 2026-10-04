import { Link, useRouterState } from '@tanstack/react-router'
import { 
  Building2, 
  Phone, 
  Clock, 
  FileText, 
  Search, 
  Calendar, 
  MessageSquare, 
  PlusCircle, 
  Home, 
  Info, 
  Newspaper, 
  ShieldCheck,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname

  const navLinks = [
    { to: '/', label: 'Trang chủ', icon: Home },
    { to: '/gioi-thieu', label: 'Giới thiệu', icon: Info },
    { to: '/hoat-dong', label: 'Hoạt động & Tin tức', icon: Newspaper },
    { to: '/thu-tuc-hanh-chinh', label: 'Thủ tục hành chính', icon: FileText },
    { to: '/tra-cuu-ho-so', label: 'Tra cứu hồ sơ', icon: Search },
    { to: '/dat-lich-hen', label: 'Đặt lịch hẹn', icon: Calendar },
    { to: '/khao-sat-phan-anh', label: 'Khảo sát & Phản ánh', icon: MessageSquare },
    { to: '/quan-ly-hoat-dong', label: 'Đăng tin hoạt động', icon: PlusCircle, isHighlight: true },
  ]

  return (
    <header className="w-full bg-white shadow-sm border-b border-red-100">
      {/* Top Banner - Quốc hiệu & Tiêu ngữ */}
      <div className="bg-linear-to-r from-red-800 via-red-700 to-red-800 text-amber-100 text-xs py-2 px-4 border-b border-red-900/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <div className="flex items-center gap-3">
            <span className="font-bold tracking-wider uppercase text-amber-200">
              CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
            </span>
            <span className="hidden sm:inline text-red-300">|</span>
            <span className="italic font-medium hidden sm:inline">
              Độc lập - Tự do - Hạnh phúc
            </span>
          </div>

          <div className="flex items-center flex-wrap justify-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-amber-100">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>T2 - T6: 07:30 - 11:30 | 13:30 - 17:00</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-100 font-semibold">
              <Phone className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>Đường dây nóng: <strong className="text-white">0238.3846.888</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Administrative Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 sm:py-5">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-4 group">
            {/* National Crest Emblem Styling */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-linear-to-br from-red-600 to-red-800 border-2 border-amber-400 p-1 flex items-center justify-center shadow-md shrink-0 transition-transform group-hover:scale-105">
              <div className="w-full h-full rounded-full border border-amber-300/80 flex flex-col items-center justify-center text-center p-1 bg-red-700">
                <span className="text-amber-300 text-xl font-black">★</span>
                <span className="text-[7px] font-bold uppercase tracking-tight text-amber-200 leading-none">UBND</span>
              </div>
            </div>

            <div>
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-red-700">
                ỦY BAN NHÂN DÂN XÃ HOA QUÂN • TỈNH NGHỆ AN
              </div>
              <h1 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight leading-tight uppercase group-hover:text-red-700 transition-colors">
                TRUNG TÂM PHỤC VỤ HÀNH CHÍNH CÔNG
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 font-medium hidden sm:block">
                Bộ phận Tiếp nhận và Trả kết quả điện tử hiện đại • Công khai - Minh bạch - Tận tình - Đúng hẹn
              </p>
            </div>
          </Link>

          {/* Quick Support Badge */}
          <div className="hidden lg:flex items-center gap-3 border-l border-slate-200 pl-4 py-1">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-left text-xs">
              <div className="text-slate-500 font-medium">Chỉ số hài lòng</div>
              <div className="text-base font-black text-emerald-700">99.2% Hài lòng</div>
              <div className="text-[10px] text-slate-400">Theo đánh giá SIPAS</div>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-slate-900 text-white shadow-inner">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center space-x-1 overflow-x-auto py-1">
              {navLinks.map((link) => {
                const Icon = link.icon
                const isActive = currentPath === link.to || (link.to !== '/' && currentPath.startsWith(link.to))
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center gap-1.5 px-3.5 py-2.5 rounded-md text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                      link.isHighlight
                        ? 'bg-red-700 hover:bg-red-600 text-white shadow-sm ring-1 ring-red-400 ml-2'
                        : isActive
                        ? 'bg-red-800 text-amber-200 shadow-xs'
                        : 'text-slate-200 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                    <span>{link.label}</span>
                  </Link>
                )
              })}
            </div>
            <div className="text-[11px] text-slate-400 hidden xl:flex items-center gap-1.5 font-medium pl-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block"></span>
              <span>Hệ thống trực tuyến thông suốt</span>
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 px-4 py-3 space-y-1 bg-slate-900">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = currentPath === link.to
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium ${
                    link.isHighlight
                      ? 'bg-red-700 text-white font-bold'
                      : isActive
                      ? 'bg-red-800 text-amber-300'
                      : 'text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4 text-amber-400" />
                  <span>{link.label}</span>
                </Link>
              )
            })}
          </div>
        )}
      </nav>
    </header>
  )
}
