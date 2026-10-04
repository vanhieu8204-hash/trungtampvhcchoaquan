export interface DossierStep {
  title: string
  time: string
  description: string
  isDone: boolean
  isCurrent?: boolean
}

export interface DossierRecord {
  code: string
  applicantName: string
  citizenId: string
  procedureName: string
  submissionDate: string
  expectedDate: string
  status: 'completed' | 'signing' | 'processing' | 'received'
  statusLabel: string
  desk: string
  officer: string
  notes: string
  steps: DossierStep[]
}

export const SAMPLE_DOSSIERS: Record<string, DossierRecord> = {
  'HQ-2026-00142': {
    code: 'HQ-2026-00142',
    applicantName: 'Nguyễn Văn Thành',
    citizenId: '040092******',
    procedureName: 'Cấp bản sao trích lục khai sinh (Ngày thứ Năm không hẹn)',
    submissionDate: '02/10/2026 08:15',
    expectedDate: '02/10/2026 10:00 (Trong ngày)',
    status: 'completed',
    statusLabel: 'Đã hoàn thành - Đã trả kết quả',
    desk: 'Quầy 2 - Tư pháp - Hộ tịch',
    officer: 'Trần Thị Mai Lan',
    notes: 'Hồ sơ đầy đủ, trích xuất dữ liệu từ Hệ thống đăng ký hộ tịch điện tử quốc gia.',
    steps: [
      {
        title: 'Tiếp nhận hồ sơ',
        time: '02/10/2026 08:15',
        description: 'Công chức Quầy 2 tiếp nhận trực tiếp và kiểm tra giấy tờ tùy thân qua VNeID.',
        isDone: true,
      },
      {
        title: 'Thẩm tra & Tra cứu cơ sở dữ liệu',
        time: '02/10/2026 08:25',
        description: 'Tra cứu thông tin trong sổ bộ hộ tịch đã số hóa, khởi tạo trích lục điện tử.',
        isDone: true,
      },
      {
        title: 'Lãnh đạo UBND xã ký duyệt',
        time: '02/10/2026 08:45',
        description: 'Đồng chí Phó Chủ tịch UBND xã ký duyệt số và phát hành văn bản.',
        isDone: true,
      },
      {
        title: 'Trả kết quả cho công dân',
        time: '02/10/2026 09:00',
        description: 'Đã trả trích lục giấy có dấu đỏ và đồng bộ bản điện tử vào kho tài khoản công dân.',
        isDone: true,
        isCurrent: true,
      },
    ],
  },
  'HQ-2026-00188': {
    code: 'HQ-2026-00188',
    applicantName: 'Lê Thị Thu Thủy',
    citizenId: '040185******',
    procedureName: 'Đăng ký kết hôn',
    submissionDate: '03/10/2026 09:30',
    expectedDate: '04/10/2026 16:30',
    status: 'signing',
    statusLabel: 'Đang trình Lãnh đạo UBND xã ký duyệt',
    desk: 'Quầy 2 - Tư pháp - Hộ tịch',
    officer: 'Trần Thị Mai Lan',
    notes: 'Hồ sơ hợp lệ, đã hoàn thành thẩm tra điều kiện kết hôn của hai bên nam nữ.',
    steps: [
      {
        title: 'Tiếp nhận hồ sơ',
        time: '03/10/2026 09:30',
        description: 'Hai bên nộp tờ khai và xuất trình CCCD tại Bộ phận một cửa.',
        isDone: true,
      },
      {
        title: 'Thẩm tra hồ sơ',
        time: '03/10/2026 14:00',
        description: 'Công chức tư pháp kiểm tra xác nhận tình trạng hôn nhân không có tranh chấp hay ngăn trở.',
        isDone: true,
      },
      {
        title: 'Chờ ký duyệt',
        time: '04/10/2026 08:00',
        description: 'Đã lập Giấy chứng nhận kết hôn, đang trình Chủ tịch UBND xã ký.',
        isDone: true,
        isCurrent: true,
      },
      {
        title: 'Trao Giấy chứng nhận kết hôn',
        time: 'Dự kiến 04/10/2026 15:00',
        description: 'Trao giấy chứng nhận trang trọng tại Phòng đón tiếp của Trung tâm.',
        isDone: false,
      },
    ],
  },
  'HQ-2026-00215': {
    code: 'HQ-2026-00215',
    applicantName: 'Phan Văn Dũng',
    citizenId: '040078******',
    procedureName: 'Xác nhận hiện trạng đất đai phục vụ cấp GCN QSDĐ lần đầu',
    submissionDate: '26/09/2026 10:00',
    expectedDate: '10/10/2026 17:00',
    status: 'processing',
    statusLabel: 'Đang niêm yết công khai & lấy ý kiến khu dân cư',
    desk: 'Quầy 3 - Địa chính & Xây dựng',
    officer: 'Phan Trọng Đạt',
    notes: 'Thửa đất số 45, tờ bản đồ số 12 tại xóm 4 xã Hoa Quân. Đang trong thời hạn niêm yết 15 ngày.',
    steps: [
      {
        title: 'Tiếp nhận hồ sơ và trích đo',
        time: '26/09/2026 10:00',
        description: 'Tiếp nhận đơn kê khai và biên bản đo đạc hiện trạng thửa đất.',
        isDone: true,
      },
      {
        title: 'Kiểm tra thực địa',
        time: '28/09/2026 14:30',
        description: 'Cán bộ địa chính phối hợp Trưởng xóm 4 kiểm tra ranh giới, mốc giới không tranh chấp.',
        isDone: true,
      },
      {
        title: 'Niêm yết công khai tại trụ sở và Nhà văn hóa xóm',
        time: '29/09/2026 08:00',
        description: 'Niêm yết danh sách lấy ý kiến nhân dân trong thời gian 15 ngày theo quy định.',
        isDone: true,
        isCurrent: true,
      },
      {
        title: 'Xét duyệt của Hội đồng Đăng ký đất đai xã',
        time: 'Dự kiến 08/10/2026',
        description: 'Hội đồng họp kết luận nguồn gốc sử dụng đất ổn định lâu dài.',
        isDone: false,
      },
      {
        title: 'Chủ tịch UBND xã ký duyệt & Chuyển Văn phòng ĐKĐĐ',
        time: 'Dự kiến 10/10/2026',
        description: 'Ký tờ trình và hồ sơ chuyển lên Chi nhánh Văn phòng Đăng ký đất đai.',
        isDone: false,
      },
    ],
  },
}
