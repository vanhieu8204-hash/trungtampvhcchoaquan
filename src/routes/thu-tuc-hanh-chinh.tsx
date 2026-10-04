import { createFileRoute } from '@tanstack/react-router'
import { 
  FileText, 
  Search, 
  Clock, 
  CheckCircle2, 
  ExternalLink, 
  Filter, 
  Building, 
  ShieldCheck,
  ChevronRight,
  Download,
  AlertCircle,
  X
} from 'lucide-react'
import { useState } from 'react'
import { ADMINISTRATIVE_PROCEDURES, Procedure } from '../data/administrative-procedures'

export const Route = createFileRoute('/thu-tuc-hanh-chinh')({
  component: ThuTucHanhChinhPage,
})

function ThuTucHanhChinhPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null)

  const categories = [
    { id: 'all', label: 'Tất cả lĩnh vực (120+)' },
    { id: 'tu-phap', label: 'Tư pháp - Hộ tịch' },
    { id: 'dia-chinh', label: 'Đất đai - Địa chính' },
    { id: 'chung-thuc', label: 'Chứng thực' },
    { id: 'ldtbxh', label: 'Lao động - TB&XH' },
    { id: 'ho-kinh-doanh', label: 'Hộ kinh doanh' },
  ]

  const filteredProcedures = ADMINISTRATIVE_PROCEDURES.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory
    const matchesKeyword =
      !searchKeyword.trim() ||
      item.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.code.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      item.categoryName.toLowerCase().includes(searchKeyword.toLowerCase())
    return matchesCategory && matchesKeyword
  })

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="bg-linear-to-r from-red-800 to-red-950 text-white rounded-2xl p-6 sm:p-10 shadow-lg border-b-4 border-amber-400">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/80 border border-amber-400/40 text-amber-200 text-xs font-semibold">
            <FileText className="w-3.5 h-3.5 text-amber-300" />
            <span>Niêm yết công khai theo Quyết định của UBND tỉnh Nghệ An</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
            Danh Mục Thủ Tục Hành Chính Cấp Xã
          </h1>
          <p className="text-red-100 text-sm sm:text-base leading-relaxed">
            Tra cứu quy trình chuẩn, hồ sơ cần chuẩn bị, mức thu phí/lệ phí và thời hạn giải quyết tại Trung tâm Phục vụ Hành chính công xã Hoa Quân.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="Tìm theo tên thủ tục (khai sinh, đăng ký kết hôn, đất đai, bảo trợ xã hội...) hoặc mã TTHC..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
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

      {/* Procedures Table / Grid */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-700">
          <span>Tìm thấy {filteredProcedures.length} thủ tục hành chính</span>
          <span className="text-slate-500 hidden sm:inline">Nhấn vào thủ tục để xem thành phần hồ sơ và nộp trực tuyến</span>
        </div>

        <div className="divide-y divide-slate-100">
          {filteredProcedures.map((proc) => (
            <div
              key={proc.id}
              onClick={() => setSelectedProcedure(proc)}
              className="p-5 sm:p-6 hover:bg-red-50/40 transition-colors cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 grow">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-bold">
                    {proc.code}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold">
                    {proc.categoryName}
                  </span>
                  <span className={`text-[11px] px-2 py-0.5 rounded font-bold ${
                    proc.executionType === 'Trực tuyến toàn trình'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {proc.executionType}
                  </span>
                </div>

                <h2 className="text-base font-bold text-slate-900 group-hover:text-red-700">
                  {proc.name}
                </h2>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>Thời hạn: <strong className="text-slate-700">{proc.timeLimit}</strong></span>
                  </div>
                  <span>•</span>
                  <div>
                    Lệ phí: <strong className="text-slate-700">{proc.fee}</strong>
                  </div>
                  <span>•</span>
                  <div>
                    Cơ quan: <strong className="text-slate-700">UBND xã Hoa Quân</strong>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  className="px-3.5 py-2 rounded-lg bg-red-700 hover:bg-red-800 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <span>Xem chi tiết hồ sơ</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Procedure Detail Modal */}
      {selectedProcedure && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="p-6 bg-linear-to-r from-red-800 to-red-900 text-white flex items-start justify-between gap-4 sticky top-0 z-10">
              <div>
                <div className="text-xs text-amber-300 font-mono font-bold">
                  {selectedProcedure.code}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mt-1 leading-snug">
                  {selectedProcedure.name}
                </h3>
                <div className="text-xs text-red-100 mt-1">
                  Lĩnh vực: {selectedProcedure.categoryName} • Thẩm quyền: {selectedProcedure.authority}
                </div>
              </div>
              <button
                onClick={() => setSelectedProcedure(null)}
                className="p-1.5 rounded-lg bg-red-950/60 hover:bg-red-950 text-white transition-colors"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 text-sm text-slate-700">
              
              {/* Summary Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">Thời hạn giải quyết</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">{selectedProcedure.timeLimit}</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">Phí / Lệ phí</div>
                  <div className="text-sm font-bold text-emerald-700 mt-0.5">{selectedProcedure.fee}</div>
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">Hình thức thực hiện</div>
                  <div className="text-sm font-bold text-blue-700 mt-0.5">{selectedProcedure.executionType}</div>
                </div>
              </div>

              {/* Documents Required */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <FileText className="w-5 h-5 text-red-700" />
                  <span>Thành phần hồ sơ phải nộp (chuẩn bị trước)</span>
                </h4>
                <ul className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {selectedProcedure.documents.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Steps */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-700" />
                  <span>Quy trình giải quyết tại Bộ phận Một cửa xã Hoa Quân</span>
                </h4>
                <div className="space-y-2">
                  {selectedProcedure.steps.map((st, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg border border-slate-100 bg-white">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">{st}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notice */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Chính sách ưu tiên:</strong> Đối với các thủ tục nộp trực tuyến toàn trình, công dân được miễn 100% lệ phí theo Nghị quyết của HĐND tỉnh Nghệ An. Bản điện tử có ký số có giá trị pháp lý tương đương bản giấy và được lưu vĩnh viễn trong kho dữ liệu cá nhân VNeID.
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => setSelectedProcedure(null)}
                className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors"
              >
                Đóng
              </button>

              <div className="flex items-center gap-3">
                <a
                  href={selectedProcedure.dvcUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-red-700 hover:bg-red-800 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span>Nộp trực tuyến qua Cổng DVC</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
