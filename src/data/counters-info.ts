export interface Counter {
  number: number
  title: string
  officer: string
  role: string
  phone: string
  email: string
  fields: string[]
  description: string
  badgeColor: string
}

export const COUNTERS: Counter[] = [
  {
    number: 1,
    title: 'Quầy Tiếp nhận & Trả kết quả chung',
    officer: 'Đ/c Nguyễn Văn Hùng',
    role: 'Công chức Văn phòng - Thống kê',
    phone: '0238.3846.888 (Số máy lẻ 101)',
    email: 'vanphong.hoaquan@nghean.gov.vn',
    fields: [
      'Tiếp đón và phát số thứ tự tự động',
      'Hướng dẫn điền biểu mẫu, tờ khai',
      'Trả kết quả thủ tục hành chính các lĩnh vực',
      'Số hóa hồ sơ giấy đầu vào và quét mã định danh'
    ],
    description: 'Đầu mối điều phối luồng công dân, kiểm tra sơ bộ hồ sơ, hỗ trợ người cao tuổi và yếu thế khi đến làm thủ tục.',
    badgeColor: 'bg-blue-600'
  },
  {
    number: 2,
    title: 'Quầy Tư pháp - Hộ tịch & Chứng thực',
    officer: 'Đ/c Trần Thị Mai Lan',
    role: 'Công chức Tư pháp - Hộ tịch',
    phone: '0238.3846.888 (Số máy lẻ 102)',
    email: 'tuphap.hoaquan@nghean.gov.vn',
    fields: [
      'Đăng ký khai sinh, kết hôn, khai tử',
      'Cấp bản sao trích lục hộ tịch',
      'Xác nhận tình trạng hôn nhân',
      'Chứng thực bản sao từ bản chính, chứng thực chữ ký'
    ],
    description: 'Thực hiện quy trình giải quyết nhanh tại quầy và áp dụng mô hình Ngày thứ Năm không hẹn.',
    badgeColor: 'bg-red-700'
  },
  {
    number: 3,
    title: 'Quầy Địa chính - Xây dựng - Đô thị & Môi trường',
    officer: 'Đ/c Phan Trọng Đạt',
    role: 'Công chức Địa chính - Nông nghiệp - Xây dựng & Môi trường',
    phone: '0238.3846.888 (Số máy lẻ 103)',
    email: 'diachinh.hoaquan@nghean.gov.vn',
    fields: [
      'Xác nhận nguồn gốc, hiện trạng sử dụng đất',
      'Đăng ký biến động, chuyển nhượng, tặng cho, thừa kế QSDĐ',
      'Cấp phép xây dựng nhà ở riêng lẻ nông thôn',
      'Giải quyết kiến nghị về ranh giới, môi trường'
    ],
    description: 'Hướng dẫn cụ thể về hồ sơ địa chính, trích đo thửa đất và phối hợp xác minh thực địa với ban cán sự các xóm.',
    badgeColor: 'bg-emerald-700'
  },
  {
    number: 4,
    title: 'Quầy Lao động - Thương binh & Xã hội',
    officer: 'Đ/c Lê Thị Cẩm Tú',
    role: 'Công chức Lao động - Thương binh & Xã hội',
    phone: '0238.3846.888 (Số máy lẻ 104)',
    email: 'ldtbxh.hoaquan@nghean.gov.vn',
    fields: [
      'Chế độ chính sách người có công, thân nhân liệt sĩ',
      'Trợ cấp đối tượng bảo trợ xã hội (người tàn tật, người già)',
      'Hỗ trợ mai táng phí, trợ cấp đột xuất',
      'Chi trả an sinh xã hội không dùng tiền mặt'
    ],
    description: 'Tiếp nhận và giải quyết tận tâm, ân cần các chính sách an sinh xã hội, bảo trợ và người có công với cách mạng.',
    badgeColor: 'bg-amber-600'
  }
]

export const LEADERSHIP_CONTACTS = [
  {
    title: 'Chủ tịch UBND xã Hoa Quân',
    name: 'Đ/c Hoàng Minh Tuấn',
    role: 'Chịu trách nhiệm toàn diện hoạt động CCHC và tiếp công dân',
    schedule: 'Tiếp công dân định kỳ vào Thứ Năm hàng tuần (hoặc đột xuất)',
    hotline: '0912.345.678',
    email: 'chutich.hoaquan@nghean.gov.vn'
  },
  {
    title: 'Phó Chủ tịch UBND xã (Phụ trách Văn hóa - Xã hội)',
    name: 'Đ/c Đặng Quốc Bảo',
    role: 'Trực tiếp chỉ đạo hoạt động Bộ phận Một cửa & Cải cách hành chính',
    schedule: 'Thường trực ký duyệt hồ sơ hộ tịch, chứng thực hàng ngày',
    hotline: '0983.112.233',
    email: 'phochutich.hoaquan@nghean.gov.vn'
  }
]
