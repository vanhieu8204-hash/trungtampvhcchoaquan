import { Link } from '@tanstack/react-router'
import { type Post } from 'content-collections'
import { Calendar, Newspaper, ArrowRight, ArrowLeft } from 'lucide-react'

export default function BlogPosts({
  title,
  posts,
}: {
  title: string
  posts: Post[]
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Category Header */}
      <div className="bg-linear-to-r from-red-800 to-red-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="space-y-2">
          <div className="text-xs uppercase font-bold text-amber-300">
            Chuyên mục hoạt động
          </div>
          <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-red-100">
            Tổng hợp các hoạt động, sự kiện và tin tức thuộc chuyên mục "{title}".
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Link
          to="/hoat-dong"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 hover:text-red-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tất cả hoạt động</span>
        </Link>
        <span className="text-xs text-slate-500 font-medium">{posts.length} bài viết</span>
      </div>

      {posts.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
          <Newspaper className="w-10 h-10 text-slate-300 mx-auto mb-2" />
          <p className="text-sm font-semibold text-slate-700">Chưa có bài viết nào trong chuyên mục này.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post._meta.path}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span className="px-2.5 py-1 rounded-md bg-red-50 text-red-800 font-bold">
                    {post.categories?.[0] || 'Hoạt động'}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.date}</span>
                  </span>
                </div>

                <Link to={`/posts/${post.slug}`}>
                  <h2 className="text-base font-bold text-slate-900 group-hover:text-red-700 transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">Một cửa xã Hoa Quân</span>
                <Link
                  to={`/posts/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-red-700 hover:text-red-800"
                >
                  <span>Chi tiết</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
