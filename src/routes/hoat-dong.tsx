import { createFileRoute, Link } from '@tanstack/react-router'
import { allPosts } from 'content-collections'
import { 
  Newspaper, 
  Search, 
  Calendar, 
  Tag, 
  ArrowRight, 
  PlusCircle, 
  Sparkles,
  Filter,
  CheckCircle2
} from 'lucide-react'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/hoat-dong')({
  component: HoatDongPage,
})

interface DynamicActivity {
  id: number
  title: string
  slug: string
  summary: string
  content: string
  category: string
  author: string
  date: string
  isPinned?: number
}

function HoatDongPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const [dynamicActivities, setDynamicActivities] = useState<DynamicActivity[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Fetch dynamically posted activities from API
  useEffect(() => {
    async function fetchActivities() {
      try {
        setIsLoading(true)
        const res = await fetch('/api/activities')
        if (res.ok) {
          const data = await res.json()
          if (Array.isArray(data)) {
            setDynamicActivities(data)
          }
        }
      } catch (err) {
        console.warn('Could not fetch dynamic activities, using static collection:', err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchActivities()
  }, [])

  // Combine static markdown posts and dynamic DB activities
  const normalizedStatic = allPosts.map((post) => ({
    id: post._meta.path,
    title: post.title,
    slug: post.slug,
    summary: post.summary,
    content: post.content,
    category: post.categories?.[0] || 'Hoạt động chung',
    author: 'Bộ phận Một cửa xã Hoa Quân',
    date: post.date,
    isStatic: true,
  }))

  const normalizedDynamic = dynamicActivities.map((act) => ({
    id: `dyn-${act.id}`,
    title: act.title,
    slug: act.slug,
    summary: act.summary,
    content: act.content,
    category: act.category,
    author: act.author || 'Cán bộ Một cửa xã Hoa Quân',
    date: act.date,
    isStatic: false,
  }))

  const allItems = [...normalizedDynamic, ...normalizedStatic].sort(
    (a, b) => (a.date < b.date ? 1 : -1)
  )

  const categories = [
    { id: 'all', label: 'Tất cả hoạt động' },
    { id: 'Cải cách hành chính', label: 'Cải cách hành chính' },
    { id: 'Chuyển đổi số', label: 'Chuyển đổi số & Đề án 06' },
    { id: 'Hoạt động công vụ', label: 'Hoạt động công vụ' },
    { id: 'Mô hình mới', label: 'Mô hình sáng kiến' },
    { id: 'Hướng dẫn nghiệp vụ', label: 'Hướng dẫn nghiệp vụ' },
  ]

  const filteredItems = allItems.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category.toLowerCase().includes(selectedCategory.toLowerCase())
    const matchesSearch =
      !searchKeyword.trim() ||
      item.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchKeyword.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="bg-linear-to-r from-red-800 via-red-900 to-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-lg border-b-4 border-amber-400">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-amber-400/40 text-amber-200 text-xs font-semibold">
              <Newspaper className="w-3.5 h-3.5 text-amber-300" />
              <span>Bản tin điện tử & Cập nhật thường xuyên</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
              Hoạt Động & Tin Tức Cải Cách Hành Chính
            </h1>
            <p className="text-red-100 text-sm sm:text-base leading-relaxed">
              Thông tin mới nhất về công tác tiếp nhận, giải quyết thủ tục hành chính, chuyển đổi số và các phong trào thi đua tại Trung tâm Phục vụ Hành chính công xã Hoa Quân.
            </p>
          </div>

          <Link
            to="/quan-ly-hoat-dong"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-sm font-bold shadow-md transition-all shrink-0 hover:scale-105"
          >
            <PlusCircle className="w-4 h-4 text-slate-950" />
            <span>+ Đăng tin hoạt động mới</span>
          </Link>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search box */}
          <div className="relative grow max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Tìm kiếm bài viết, tin hoạt động..."
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Hiển thị <strong>{filteredItems.length}</strong> bài viết hoạt động
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-red-700 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      {filteredItems.length === 0 ? (
        <div className="bg-white rounded-xl p-12 text-center border border-slate-200 space-y-3">
          <Newspaper className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">Không tìm thấy bài viết phù hợp</h3>
          <p className="text-xs text-slate-500">Vui lòng thử tìm với từ khóa khác hoặc chuyển sang danh mục khác.</p>
          <button
            onClick={() => {
              setSearchKeyword('')
              setSelectedCategory('all')
            }}
            className="px-4 py-2 rounded-lg bg-red-700 text-white text-xs font-semibold"
          >
            Xem tất cả hoạt động
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span className="px-2.5 py-1 rounded-md bg-red-50 text-red-800 font-bold">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.date}</span>
                  </span>
                </div>

                <Link to={`/posts/${item.slug}`}>
                  <h2 className="text-base font-bold text-slate-900 group-hover:text-red-700 transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h2>
                </Link>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div className="text-[11px] text-slate-500">
                  <span>{item.author}</span>
                </div>
                <Link
                  to={`/posts/${item.slug}`}
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
