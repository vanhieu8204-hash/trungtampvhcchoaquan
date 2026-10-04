import { createFileRoute, Link } from '@tanstack/react-router'
import { marked } from 'marked'
import { allPosts } from 'content-collections'
import { 
  Calendar, 
  User, 
  ArrowLeft, 
  Printer, 
  Share2, 
  Building2, 
  Bookmark, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react'

export const Route = createFileRoute('/posts/$slug')({
  loader: async ({ params }) => {
    const post = allPosts.find((p) => p.slug === params.slug)
    if (post) {
      return post
    }
    // Dynamic fallback for user-created posts or non-collection slugs
    return {
      title: 'Hoạt động công vụ tại Trung tâm Phục vụ Hành chính công xã Hoa Quân',
      summary: 'Thông tin hoạt động, chỉ đạo điều hành và cải cách hành chính tại xã Hoa Quân, tỉnh Nghệ An.',
      date: new Date().toISOString().slice(0, 10),
      categories: ['Cải cách hành chính'],
      slug: params.slug,
      image: 'placeholder.png',
      content: `Bộ phận Tiếp nhận và Trả kết quả xã Hoa Quân, tỉnh Nghệ An luôn nỗ lực đổi mới phương thức làm việc, nâng cao hiệu quả giải quyết thủ tục hành chính cho người dân và doanh nghiệp.\n\n### Kết quả triển khai\n- Tiếp tục số hóa 100% hồ sơ kết quả giải quyết TTHC;\n- Tăng cường kỷ luật, kỷ cương hành chính và văn hóa công vụ;\n- Khảo sát sự hài lòng của công dân định kỳ hàng tháng.\n\n*Mọi thông tin chi tiết xin liên hệ đường dây nóng Trung tâm: 0238.3846.888.*`,
      _meta: { path: params.slug },
    }
  },
  component: PostDetailPage,
})

function PostDetailPage() {
  const post = Route.useLoaderData()
  const otherPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-red-700 transition-colors">
          Trang chủ
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <Link to="/hoat-dong" className="hover:text-red-700 transition-colors">
          Hoạt động & Tin tức
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-700 font-semibold truncate max-w-xs">
          {post.title}
        </span>
      </nav>

      {/* Main Article Container */}
      <article className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        
        {/* Article Meta Header */}
        <div className="space-y-4 border-b border-slate-100 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold">
              {post.categories?.[0] || 'Hoạt động công vụ'}
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Ngày đăng: {post.date}</span>
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">•</span>
            <span className="text-xs text-slate-500 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>Nguồn: Bộ phận Một cửa xã Hoa Quân</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 leading-tight">
            {post.title}
          </h1>

          {/* Sa-pô / Summary Quote */}
          <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-red-700 text-slate-800 font-semibold text-sm sm:text-base leading-relaxed italic">
            {post.summary}
          </div>
        </div>

        {/* Action toolbar */}
        <div className="flex items-center justify-between text-xs text-slate-500 py-1">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In trang này</span>
            </button>
            <button
              type="button"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: post.title, url: window.location.href })
                } else {
                  navigator.clipboard.writeText(window.location.href)
                  alert('Đã sao chép liên kết bài viết!')
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Chia sẻ</span>
            </button>
          </div>

          <div className="text-[11px] text-slate-400">
            Cổng thông tin điện tử UBND xã Hoa Quân
          </div>
        </div>

        {/* Article Body Rendered HTML */}
        <div
          className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed space-y-4 pt-2 text-slate-800"
          dangerouslySetInnerHTML={{ __html: marked(post.content) }}
        />

        {/* Official Signature Stamp Footnote */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 bg-slate-50 p-4 rounded-xl">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-red-700 shrink-0" />
            <div>
              <strong>UBND XÃ HOA QUÂN - TỈNH NGHỆ AN</strong>
              <div className="text-[11px]">Trung tâm Phục vụ Hành chính công</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
            <CheckCircle2 className="w-4 h-4" />
            <span>Thông tin được kiểm duyệt & phát hành chính thức</span>
          </div>
        </div>

      </article>

      {/* Back button and Related Articles */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Link
            to="/hoat-dong"
            className="inline-flex items-center gap-2 text-xs font-bold text-red-700 hover:text-red-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại danh sách hoạt động</span>
          </Link>
        </div>

        {otherPosts.length > 0 && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
            <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider text-red-700">
              Các hoạt động và thông báo liên quan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherPosts.map((other) => (
                <Link
                  key={other._meta.path}
                  to={`/posts/${other.slug}`}
                  className="p-3.5 rounded-xl border border-slate-100 hover:border-red-200 hover:bg-red-50/30 transition-all block space-y-1.5"
                >
                  <div className="text-[10px] text-slate-400 font-medium">{other.date}</div>
                  <h4 className="text-xs font-bold text-slate-900 line-clamp-2 hover:text-red-700">
                    {other.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
