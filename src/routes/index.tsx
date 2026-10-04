import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { 
  Search, 
  FileText, 
  Clock, 
  CheckCircle2, 
  TrendingUp, 
  Calendar, 
  PhoneCall, 
  ShieldAlert, 
  ArrowRight, 
  Newspaper, 
  Building2, 
  Users, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  Award,
  AlertCircle
} from 'lucide-react'
import { useState } from 'react'
import { ADMINISTRATIVE_PROCEDURES } from '../data/administrative-procedures'
import { COUNTERS, LEADERSHIP_CONTACTS } from '../data/counters-info'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [dossierCodeInput, setDossierCodeInput] = useState('')
  const navigate = useNavigate()

  // Filter procedures for quick search preview
  const filteredProcedures = searchQuery.trim()
    ? ADMINISTRATIVE_PROCEDURES.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : []

  const handleDossierSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (dossierCodeInput.trim()) {
      navigate({
        to: '/tra-cuu-ho-so',
        search: { code: dossierCodeInput.trim() },
      } as any)
    }
  }

  // Sort posts by date descending
  const recentPosts = [...allPosts].sort((a, b) => (a.date < b.date ? 1 : -1))
  const featuredPost = recentPosts[0]
  const subPosts = recentPosts.slice(1, 4)

  return (
    <div className="space-y-12 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative gov-pattern text-white pt-8 pb-16 px-4 overflow-hidden border-b-4 border-amber-400">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-900/80 border border-amber-400/50 text-amber-200 text-xs font-semibold backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>Cổng Dịch Vụ Công & Cập Nhật Hoạt Động Xã Hoa Quân</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-sm">
              TRUNG TÂM PHỤC VỤ HÀNH CHÍNH CÔNG
              <span className="block text-amber-300 mt-1 sm:mt-2 text-xl sm:text-3xl lg:text-4xl">
                XÃ HOA QUÂN • TỈNH NGHỆ AN
              </span>
            </h1>

            <p className="text-sm sm:text-base text-red-100 max-w-2xl mx-auto font-medium leading-relaxed">
              Mô hình Tiếp nhận và Trả kết quả điện tử hiện đại — 
              <strong className="text-amber-300 font-semibold"> "Công khai, Minh bạch, Tận tình, Chính xác, Đúng hẹn"</strong>.
            </p>

            {/* Quick search input */}
            <div className="pt-4 max-w-2xl mx-auto relative">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 absolute left-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Nhập tên thủ tục (khai sinh, đất đai, kết hôn, chứng thực, hộ tịch...)"
                  className="w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-xl bg-white text-slate-800 text-sm sm:text-base placeholder-slate-400 shadow-xl focus:outline-hidden focus:ring-3 focus:ring-amber-400 transition-all font-medium"
                />
              </div>

              {/* Instant Search Results Dropdown */}
              {filteredProcedures.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 text-slate-800 text-left z-50 overflow-hidden divide-y divide-slate-100">
                  <div className="p-2.5 bg-slate-50 text-[11px] font-bold uppercase text-slate-500 tracking-wider">
                    Thủ tục hành chính tìm thấy ({filteredProcedures.length})
                  </div>
                  {filteredProcedures.map((proc) => (
                    <Link
                      key={proc.id}
                      to="/thu-tuc-hanh-chinh"
                      className="p-3.5 hover:bg-red-50 flex items-start justify-between gap-3 transition-colors block"
                    >
                      <div>
                        <div className="text-xs font-bold text-red-700">{proc.categoryName}</div>
                        <div className="text-sm font-semibold text-slate-900 mt-0.5">{proc.name}</div>
                        <div className="text-xs text-slate-500 mt-1 flex items-center gap-3">
                          <span>Thời hạn: <strong className="text-slate-700">{proc.timeLimit}</strong></span>
                          <span>•</span>
                          <span>Lệ phí: <strong className="text-slate-700">{proc.fee}</strong></span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 shrink-0 mt-2" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Quick action buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
              <span className="text-red-200">Từ khóa phổ biến:</span>
              <button onClick={() => setSearchQuery('khai sinh')} className="px-3 py-1 rounded-full bg-red-900/60 hover:bg-red-800/80 border border-red-700 text-amber-200 transition-colors">
                Khai sinh
              </button>
              <button onClick={() => setSearchQuery('đất đai')} className="px-3 py-1 rounded-full bg-red-900/60 hover:bg-red-800/80 border border-red-700 text-amber-200 transition-colors">
                Đất đai - Địa chính
              </button>
              <button onClick={() => setSearchQuery('kết hôn')} className="px-3 py-1 rounded-full bg-red-900/60 hover:bg-red-800/80 border border-red-700 text-amber-200 transition-colors">
                Đăng ký kết hôn
              </button>
              <button onClick={() => setSearchQuery('chứng thực')} className="px-3 py-1 rounded-full bg-red-900/60 hover:bg-red-800/80 border border-red-700 text-amber-200 transition-colors">
                Chứng thực
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. 4 CORE PILLARS / ACTION TILES */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <Link
            to="/thu-tuc-hanh-chinh"
            className="group bg-white rounded-xl p-5 shadow-lg border border-slate-200/80 hover:shadow-xl hover:border-red-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-red-100 text-red-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base group-hover:text-red-700 transition-colors">
                Bộ Thủ Tục Hành Chính
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tra cứu hơn 120+ TTHC cấp xã, hướng dẫn thành phần hồ sơ, thời hạn giải quyết và biểu mẫu tải về.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-red-700">
              <span>Xem danh mục</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/tra-cuu-ho-so"
            className="group bg-white rounded-xl p-5 shadow-lg border border-slate-200/80 hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-700 transition-colors">
                Tra Cứu Hồ Sơ Điện Tử
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nhập mã biên nhận hồ sơ để theo dõi quy trình luân chuyển, cán bộ đang xử lý và ngày hẹn trả.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700">
              <span>Kiểm tra tiến độ</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/dat-lich-hen"
            className="group bg-white rounded-xl p-5 shadow-lg border border-slate-200/80 hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                Đặt Lịch Hẹn Làm Việc
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Đăng ký trước ngày giờ làm việc tại các quầy Một cửa giúp tiết kiệm thời gian, ưu tiên tiếp nhận.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
              <span>Đặt lịch ngay</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/khao-sat-phan-anh"
            className="group bg-white rounded-xl p-5 shadow-lg border border-slate-200/80 hover:shadow-xl hover:border-amber-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base group-hover:text-amber-700 transition-colors">
                Khảo Sát SIPAS & Phản Ánh
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Đánh giá mức độ hài lòng về tinh thần phục vụ của cán bộ và đóng góp kiến nghị trực tiếp tới Lãnh đạo.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-700">
              <span>Gửi ý kiến đóng góp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>
      </section>

      {/* 3. REALTIME ADMINISTRATIVE KPI STATS */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-linear-to-r from-slate-900 via-slate-850 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl border border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Số liệu công khai minh bạch quý III/2026</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mt-1 text-white">
                Hiệu Quả Phục Vụ Nhân Dân Tại Xã Hoa Quân
              </h2>
            </div>
            <Link
              to="/hoat-dong"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-700 hover:bg-red-600 text-xs font-semibold text-white transition-colors shrink-0"
            >
              <span>Xem báo cáo chi tiết</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
            <div className="space-y-1">
              <div className="text-2xl sm:text-4xl font-black text-amber-400">98.8%</div>
              <div className="text-xs font-semibold text-slate-200">Đúng và trước hạn</div>
              <div className="text-[11px] text-slate-400">1.456 / 1.482 hồ sơ đã giải quyết</div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-4xl font-black text-emerald-400">99.2%</div>
              <div className="text-xs font-semibold text-slate-200">Chỉ số hài lòng SIPAS</div>
              <div className="text-[11px] text-slate-400">1.320 lượt đánh giá tích cực</div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-4xl font-black text-blue-400">79.9%</div>
              <div className="text-xs font-semibold text-slate-200">Hồ sơ trực tuyến</div>
              <div className="text-[11px] text-slate-400">Nộp qua VNeID & Cổng DVC</div>
            </div>

            <div className="space-y-1">
              <div className="text-2xl sm:text-4xl font-black text-purple-400">100%</div>
              <div className="text-xs font-semibold text-slate-200">Số hóa kết quả TTHC</div>
              <div className="text-[11px] text-slate-400">Tích hợp chữ ký số cơ quan</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RECENT ACTIVITIES & NEWS UPDATES (Core User Request) */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-red-700 flex items-center gap-1.5">
              <Newspaper className="w-4 h-4" />
              <span>Bản tin công vụ & Sự kiện địa phương</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              Hoạt Động Trung Tâm Hành Chính Công Xã Hoa Quân
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/quan-ly-hoat-dong"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-red-700 hover:bg-red-800 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <span>+ Cập nhật hoạt động mới</span>
            </Link>
            <Link
              to="/hoat-dong"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
            >
              <span>Xem tất cả tin</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Featured Activity & Sub Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Featured Post */}
          {featuredPost && (
            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-red-100 text-red-800 text-xs font-bold">
                    {featuredPost.categories?.[0] || 'Hoạt động tiêu điểm'}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {featuredPost.date}
                  </span>
                </div>

                <Link to={`/posts/${featuredPost.slug}`}>
                  <h3 className="text-lg sm:text-2xl font-black text-slate-900 hover:text-red-700 transition-colors leading-snug">
                    {featuredPost.title}
                  </h3>
                </Link>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {featuredPost.summary}
                </p>
              </div>

              <div className="px-6 sm:px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500 font-medium">
                  Tác giả: <strong>Bộ phận Một cửa xã Hoa Quân</strong>
                </div>
                <Link
                  to={`/posts/${featuredPost.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-red-700 hover:text-red-800"
                >
                  <span>Đọc toàn văn</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Sub Posts Column */}
          <div className="lg:col-span-5 space-y-4">
            {subPosts.map((post) => (
              <article
                key={post._meta.path}
                className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs hover:border-red-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-1.5">
                  <span className="font-semibold text-red-700">
                    {post.categories?.[0] || 'Tin tức'}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <Link to={`/posts/${post.slug}`}>
                  <h4 className="text-sm font-bold text-slate-900 hover:text-red-700 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h4>
                </Link>
                <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                  {post.summary}
                </p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 5. 4 SERVICE COUNTERS OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-red-700">
                Tổ chức tiếp nhận và giải quyết
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
                Các Quầy Giao Dịch Tại Bộ Phận Một Cửa
              </h2>
            </div>
            <Link
              to="/gioi-thieu"
              className="text-xs font-bold text-red-700 hover:underline flex items-center gap-1"
            >
              <span>Xem quy chế hoạt động</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COUNTERS.map((counter) => (
              <div
                key={counter.number}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-red-700 text-white font-black text-xs flex items-center justify-center">
                      Q.{counter.number}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      Trực tiếp
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 text-sm leading-snug">
                      {counter.title}
                    </h3>
                    <div className="text-xs font-semibold text-red-700 mt-1">
                      {counter.officer}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {counter.role}
                    </div>
                  </div>

                  <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                    {counter.fields.slice(0, 3).map((field, idx) => (
                      <li key={idx} className="text-[11px] text-slate-600 flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{field}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                  ĐT: <strong className="text-slate-800">{counter.phone}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP CITIZEN RECEPTION SCHEDULE */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-red-200 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-700 text-amber-300 flex items-center justify-center font-bold text-lg">
              ★
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-red-700">
                Thực hiện Luật Tiếp công dân
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Lịch Tiếp Công Dân Của Lãnh Đạo UBND Xã Hoa Quân
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEADERSHIP_CONTACTS.map((leader, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wide text-red-700">
                    {leader.title}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                    Định kỳ
                  </span>
                </div>
                <div className="text-base font-bold text-slate-900">
                  {leader.name}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {leader.role}
                </p>
                <div className="pt-2 border-t border-slate-200 text-xs space-y-1 text-slate-700">
                  <div><strong>Lịch trực tiếp:</strong> {leader.schedule}</div>
                  <div><strong>Hotline cá nhân:</strong> <span className="text-red-700 font-bold">{leader.hotline}</span></div>
                  <div><strong>Hộp thư công vụ:</strong> {leader.email}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>Ghi chú tiếp công dân:</strong> Phòng Tiếp công dân đặt tại Trụ sở UBND xã Hoa Quân (cạnh Bộ phận Một cửa). Công dân khi đến liên hệ đề nghị xuất trình giấy tờ tùy thân (CCCD hoặc thông tin VNeID) và chuẩn bị sẵn các văn bản, giấy tờ liên quan đến nội dung kiến nghị, phản ánh.
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
