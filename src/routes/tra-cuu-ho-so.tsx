import { createFileRoute } from '@tanstack/react-router'
import { 
  Search, 
  Clock, 
  CheckCircle2, 
  Circle, 
  AlertCircle, 
  FileText, 
  User, 
  Phone, 
  ShieldCheck, 
  Calendar, 
  ArrowRight,
  Printer
} from 'lucide-react'
import { useState } from 'react'
import { SAMPLE_DOSSIERS, DossierRecord } from '../data/sample-dossiers'

export const Route = createFileRoute('/tra-cuu-ho-so')({
  component: TraCuuHoSoPage,
})

function TraCuuHoSoPage() {
  const [dossierCode, setDossierCode] = useState<string>('HQ-2026-00142')
  const [searchedRecord, setSearchedRecord] = useState<DossierRecord | null>(
    SAMPLE_DOSSIERS['HQ-2026-00142']
  )
  const [hasSearched, setHasSearched] = useState<boolean>(true)

  const handleSearch = (codeToSearch?: string) => {
    const code = (codeToSearch || dossierCode).trim().toUpperCase()
    setHasSearched(true)
    if (SAMPLE_DOSSIERS[code]) {
      setSearchedRecord(SAMPLE_DOSSIERS[code])
    } else if (code) {
      // Dynamic fallback for any validly entered code
      setSearchedRecord({
        code: code,
        applicantName: 'Công dân tra cứu trực tuyến',
        citizenId: '040*********',
        procedureName: 'Thủ tục hành chính tiếp nhận tại Một cửa xã Hoa Quân',
        submissionDate: '01/10/2026 09:00',
        expectedDate: '05/10/2026 17:00',
        status: 'processing',
        statusLabel: 'Đang trong quá trình thẩm tra chuyên môn',
        desk: 'Quầy 1 - Bộ phận Một cửa xã Hoa Quân',
        officer: 'Đ/c Nguyễn Văn Hùng',
        notes: 'Hồ sơ đã được số hóa đầy đủ và kiểm tra dữ liệu qua Đề án 06.',
        steps: [
          {
            title: 'Tiếp nhận hồ sơ',
            time: '01/10/2026 09:00',
            description: 'Đã số hóa thành phần hồ sơ và cấp mã biên nhận điện tử.',
            isDone: true,
          },
          {
            title: 'Thẩm tra & Thẩm định chuyên môn',
            time: '02/10/2026 10:30',
            description: 'Công chức chuyên môn đang thẩm định thành phần hồ sơ.',
            isDone: true,
            isCurrent: true,
          },
          {
            title: 'Lãnh đạo UBND xã phê duyệt',
            time: 'Dự kiến 04/10/2026',
            description: 'Trình Chủ tịch / Phó Chủ tịch UBND xã ký duyệt số.',
            isDone: false,
          },
          {
            title: 'Trả kết quả cho công dân',
            time: 'Dự kiến 05/10/2026',
            description: 'Trả kết quả tại Quầy 1 hoặc qua Cổng Dịch vụ công Quốc gia.',
            isDone: false,
          },
        ],
      })
    } else {
      setSearchedRecord(null)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      
      {/* Page Header */}
      <div className="bg-linear-to-r from-red-800 to-red-950 text-white rounded-2xl p-6 sm:p-10 shadow-lg border-b-4 border-amber-400">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/80 border border-amber-400/40 text-amber-200 text-xs font-semibold">
            <Search className="w-3.5 h-3.5 text-amber-300" />
            <span>Hệ thống theo dõi hồ sơ điện tử thời gian thực</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
            Tra Cứu Tiến Độ Giải Quyết Hồ Sơ
          </h1>
          <p className="text-red-100 text-sm sm:text-base leading-relaxed">
            Nhập mã biên nhận được in trên Giấy tiếp nhận và hẹn trả kết quả để kiểm tra tình trạng xử lý hồ sơ hành chính.
          </p>
        </div>
      </div>

      {/* Search Input Box */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSearch()
          }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <div className="relative grow">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={dossierCode}
              onChange={(e) => setDossierCode(e.target.value)}
              placeholder="Nhập mã hồ sơ (ví dụ: HQ-2026-00142, HQ-2026-00188)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-300 text-sm sm:text-base font-medium focus:outline-hidden focus:border-red-600 focus:ring-1 focus:ring-red-600"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3.5 rounded-xl bg-red-700 hover:bg-red-800 text-white text-sm font-bold shadow-xs transition-colors shrink-0 flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Tra cứu ngay</span>
          </button>
        </form>

        {/* Preset sample buttons for quick testing */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <span className="text-slate-500 font-medium">Mã hồ sơ mẫu thử nghiệm:</span>
          {Object.keys(SAMPLE_DOSSIERS).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => {
                setDossierCode(code)
                handleSearch(code)
              }}
              className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-red-50 hover:text-red-700 border border-slate-200 font-mono text-[11px] font-semibold text-slate-700 transition-colors"
            >
              {code}
            </button>
          ))}
        </div>
      </div>

      {/* Search Results Display */}
      {hasSearched && searchedRecord ? (
        <div className="space-y-6">
          
          {/* Dossier Meta Summary Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-1 rounded">
                  MÃ HỒ SƠ: {searchedRecord.code}
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 mt-2 leading-snug">
                  {searchedRecord.procedureName}
                </h2>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <span className={`px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 ${
                  searchedRecord.status === 'completed'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                  <span>{searchedRecord.statusLabel}</span>
                </span>
              </div>
            </div>

            {/* Grid of dossier attributes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="text-slate-500 font-medium">Người nộp hồ sơ</div>
                <div className="font-bold text-slate-900 text-sm">{searchedRecord.applicantName}</div>
                <div className="text-slate-400 font-mono">{searchedRecord.citizenId}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="text-slate-500 font-medium">Thời gian tiếp nhận</div>
                <div className="font-bold text-slate-900 text-sm">{searchedRecord.submissionDate}</div>
                <div className="text-slate-400">Hình thức: Trực tiếp tại xã</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="text-slate-500 font-medium">Thời hạn hẹn trả</div>
                <div className="font-bold text-red-700 text-sm">{searchedRecord.expectedDate}</div>
                <div className="text-slate-400">Theo quy định niêm yết</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                <div className="text-slate-500 font-medium">Cán bộ thụ lý</div>
                <div className="font-bold text-slate-900 text-sm">{searchedRecord.officer}</div>
                <div className="text-slate-400">{searchedRecord.desk}</div>
              </div>
            </div>
          </div>

          {/* Visual Step-by-Step Timeline */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <Clock className="w-5 h-5 text-red-700" />
              <span>Tiến Độ Luân Chuyển & Xử Lý Hồ Sơ</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
              {searchedRecord.steps.map((step, idx) => (
                <div key={idx} className="relative group">
                  {/* Step icon dot */}
                  <div
                    className={`absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white ${
                      step.isDone
                        ? 'bg-emerald-600 text-white'
                        : step.isCurrent
                        ? 'bg-amber-500 text-white animate-pulse'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    {step.isDone ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <span>{idx + 1}</span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h4 className="font-bold text-slate-900 text-sm">
                        {step.title}
                      </h4>
                      <span className="text-[11px] font-medium text-slate-400">
                        {step.time}
                      </span>
                      {step.isCurrent && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                          Đang thực hiện
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact for assistance */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-600" />
                <span>Thắc mắc về hồ sơ vui lòng gọi: <strong className="text-slate-800">0238.3846.888</strong></span>
              </div>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-red-700 font-semibold"
              >
                <Printer className="w-4 h-4" />
                <span>In thông tin tiến độ</span>
              </button>
            </div>
          </div>

        </div>
      ) : hasSearched ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-3">
          <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">Không tìm thấy mã hồ sơ này</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Vui lòng kiểm tra lại chính xác định dạng mã hồ sơ trên Giấy tiếp nhận hoặc liên hệ Tổng đài một cửa: 0238.3846.888 để được hỗ trợ tra cứu trực tiếp.
          </p>
        </div>
      ) : null}

    </div>
  )
}
