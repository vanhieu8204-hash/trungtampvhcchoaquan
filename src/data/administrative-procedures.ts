export interface Procedure {
  id: string
  code: string
  name: string
  category: 'tu-phap' | 'dia-chinh' | 'ldtbxh' | 'chung-thuc' | 'ho-kinh-doanh'
  categoryName: string
  timeLimit: string
  fee: string
  executionType: 'Trực tuyến toàn trình' | 'Trực tuyến một phần' | 'Trực tiếp tại Bộ phận một cửa'
  authority: string
  documents: string[]
  templateFormUrl?: string
  dvcUrl: string
  steps: string[]
}

export const ADMINISTRATIVE_PROCEDURES: Procedure[] = [
  {
    id: 'tthc-01',
    code: '1.002891.000.00.00.H40',
    name: 'Đăng ký khai sinh (kết hợp liên thông Cấp thẻ BHYT và Đăng ký thường trú)',
    category: 'tu-phap',
    categoryName: 'Tư pháp - Hộ tịch',
    timeLimit: '02 ngày làm việc (Liên thông 3 trong 1)',
    fee: 'Miễn lệ phí (Quy định cho trẻ em)',
    executionType: 'Trực tuyến toàn trình',
    authority: 'UBND xã Hoa Quân, tỉnh Nghệ An',
    documents: [
      'Tờ khai đăng ký khai sinh (theo mẫu điện tử tương tác trên Cổng DVC);',
      'Giấy chứng sinh do cơ sở y tế cấp (hoặc văn bản xác nhận của người làm chứng);',
      'Giấy chứng nhận kết hôn của cha mẹ (trích xuất tự động qua VNeID nếu đã số hóa);',
      'Xuất trình CCCD hoặc thông tin cư trú trên VNeID của người đi khai sinh.'
    ],
    dvcUrl: 'https://dichvucong.gov.vn',
    steps: [
      'Nộp hồ sơ trực tuyến qua VNeID hoặc nộp trực tiếp tại Quầy số 2 - Bộ phận Một cửa xã Hoa Quân',
      'Công chức Tư pháp - Hộ tịch thẩm tra thông tin và nhập dữ liệu vào Hệ thống hộ tịch điện tử',
      'Chủ tịch hoặc Phó Chủ tịch UBND xã ký duyệt bản điện tử và cấp trích lục',
      'Hệ thống tự động liên thông sang Bảo hiểm xã hội cấp thẻ BHYT và Công an xã đăng ký thường trú'
    ]
  },
  {
    id: 'tthc-02',
    code: '1.002892.000.00.00.H40',
    name: 'Đăng ký kết hôn',
    category: 'tu-phap',
    categoryName: 'Tư pháp - Hộ tịch',
    timeLimit: 'Giải quyết ngay trong ngày làm việc',
    fee: 'Miễn phí theo Nghị quyết của HĐND tỉnh Nghệ An',
    executionType: 'Trực tuyến một phần',
    authority: 'UBND xã Hoa Quân, tỉnh Nghệ An',
    documents: [
      'Tờ khai đăng ký kết hôn (hai bên nam, nữ cùng ký tên);',
      'Giấy xác nhận tình trạng hôn nhân (đối với người không cư trú thường xuyên tại xã Hoa Quân);',
      'Thông tin Căn cước công dân của hai bên qua ứng dụng VNeID mức 2.'
    ],
    dvcUrl: 'https://dichvucong.gov.vn',
    steps: [
      'Hai bên nam, nữ nộp hồ sơ tại Quầy số 2 hoặc nộp trước qua mạng',
      'Công chức Tư pháp kiểm tra điều kiện kết hôn theo Luật Hôn nhân & Gia đình',
      'Lãnh đạo UBND xã ký Giấy chứng nhận kết hôn',
      'Tổ chức trao Giấy chứng nhận kết hôn trang trọng tại phòng đón tiếp của Trung tâm'
    ]
  },
  {
    id: 'tthc-03',
    code: '1.002905.000.00.00.H40',
    name: 'Cấp bản sao trích lục hộ tịch (Khai sinh, Kết hôn, Khai tử)',
    category: 'tu-phap',
    categoryName: 'Tư pháp - Hộ tịch',
    timeLimit: 'Trả kết quả ngay sau 15 - 30 phút (Áp dụng Ngày thứ Năm không hẹn)',
    fee: '8.000 đồng / bản (Miễn phí nếu nhận bản điện tử)',
    executionType: 'Trực tuyến toàn trình',
    authority: 'UBND xã Hoa Quân, tỉnh Nghệ An',
    documents: [
      'Tờ khai yêu cầu cấp bản sao trích lục hộ tịch (theo mẫu);',
      'CCCD hoặc tài khoản VNeID của người có yêu cầu.'
    ],
    dvcUrl: 'https://dichvucong.gov.vn',
    steps: [
      'Tra cứu dữ liệu sổ hộ tịch điện tử đã được số hóa 100% của xã Hoa Quân',
      'In trích lục bản sao, trình ký số hoặc ký giấy',
      'Trả kết quả trực tiếp hoặc gửi qua bưu điện/kho dữ liệu điện tử'
    ]
  },
  {
    id: 'tthc-04',
    code: '1.001923.000.00.00.H40',
    name: 'Cấp Giấy xác nhận tình trạng hôn nhân',
    category: 'tu-phap',
    categoryName: 'Tư pháp - Hộ tịch',
    timeLimit: 'Trong 01 ngày làm việc',
    fee: 'Miễn phí khi nộp trực tuyến',
    executionType: 'Trực tuyến toàn trình',
    authority: 'UBND xã Hoa Quân, tỉnh Nghệ An',
    documents: [
      'Tờ khai xác nhận tình trạng hôn nhân theo mẫu quy định;',
      'Bản án/Quyết định ly hôn đã có hiệu lực pháp luật (nếu đã từng ly hôn);',
      'Giấy chứng tử của vợ/chồng (nếu vợ/chồng đã mất).'
    ],
    dvcUrl: 'https://dichvucong.gov.vn',
    steps: [
      'Nộp hồ sơ trên Cổng dịch vụ công Quốc gia',
      'Công chức Tư pháp đối chiếu dữ liệu hộ tịch và dân cư',
      'Lãnh đạo UBND xã phê duyệt và ký cấp giấy'
    ]
  },
  {
    id: 'tthc-05',
    code: '2.001452.000.00.00.H40',
    name: 'Xác nhận hiện trạng, nguồn gốc sử dụng đất đai phục vụ cấp GCN QSDĐ lần đầu',
    category: 'dia-chinh',
    categoryName: 'Đất đai - Địa chính - Môi trường',
    timeLimit: '15 ngày làm việc',
    fee: 'Không thu phí tại UBND xã',
    executionType: 'Trực tuyến một phần',
    authority: 'UBND xã Hoa Quân, tỉnh Nghệ An',
    documents: [
      'Đơn đăng ký, cấp Giấy chứng nhận quyền sử dụng đất (Mẫu số 04a/ĐK);',
      'Chứng từ thực hiện nghĩa vụ tài chính hoặc giấy tờ về quyền sử dụng đất quy định tại Điều 137 Luật Đất đai;',
      'Sơ đồ trích lục hoặc trích đo hiện trạng thửa đất.'
    ],
    dvcUrl: 'https://dichvucong.nghean.gov.vn',
    steps: [
      'Nộp hồ sơ tại Quầy số 3 - Địa chính xã Hoa Quân',
      'Công chức Địa chính phối hợp Ban cán sự xóm kiểm tra thực địa, niêm yết công khai 15 ngày tại trụ sở xã và nhà văn hóa xóm',
      'Hội đồng tư vấn đất đai xã họp xét duyệt nguồn gốc và thời điểm sử dụng đất',
      'Chủ tịch UBND xã ký xác nhận và chuyển hồ sơ lên Chi nhánh Văn phòng Đăng ký đất đai'
    ]
  },
  {
    id: 'tthc-06',
    code: '2.001458.000.00.00.H40',
    name: 'Đăng ký biến động quyền sử dụng đất (Tặng cho, Thừa kế giữa cha mẹ và con)',
    category: 'dia-chinh',
    categoryName: 'Đất đai - Địa chính - Môi trường',
    timeLimit: '10 ngày làm việc',
    fee: 'Theo quy định của HĐND tỉnh Nghệ An',
    executionType: 'Trực tiếp tại Bộ phận một cửa',
    authority: 'Bộ phận Tiếp nhận & Trả kết quả liên thông xã Hoa Quân',
    documents: [
      'Đơn đăng ký biến động đất đai, tài sản gắn liền với đất (Mẫu số 09/ĐK);',
      'Bản gốc Giấy chứng nhận quyền sử dụng đất đã cấp;',
      'Hợp đồng tặng cho hoặc Văn bản thỏa thuận phân chia di sản thừa kế đã được chứng thực hợp pháp;',
      'Tờ khai thuế thu nhập cá nhân và lệ phí trước bạ.'
    ],
    dvcUrl: 'https://dichvucong.nghean.gov.vn',
    steps: [
      'Tiếp nhận hồ sơ tại Quầy Một cửa và số hóa thành phần hồ sơ',
      'Chuyển thông tin nghĩa vụ tài chính điện tử sang cơ quan Thuế',
      'Công dân nhận thông báo nộp thuế qua tin nhắn và thanh toán trực tuyến',
      'Nhận kết quả trang bổ sung GCN QSDĐ tại Quầy số 1'
    ]
  },
  {
    id: 'tthc-07',
    code: '1.000318.000.00.00.H40',
    name: 'Chứng thực bản sao từ bản chính các giấy tờ, văn bản',
    category: 'chung-thuc',
    categoryName: 'Chứng thực',
    timeLimit: 'Giải quyết ngay (không quá 15 phút)',
    fee: '2.000 đồng/trang (Trang thứ 3 trở đi: 1.000 đồng/trang)',
    executionType: 'Trực tiếp tại Bộ phận một cửa',
    authority: 'UBND xã Hoa Quân, tỉnh Nghệ An',
    documents: [
      'Bản chính giấy tờ, văn bản làm cơ sở để chứng thực bản sao;',
      'Bản sao cần chứng thực (hoặc photocopy trực tiếp tại Trung tâm một cửa).'
    ],
    dvcUrl: 'https://dichvucong.gov.vn',
    steps: [
      'Công chức Một cửa đối chiếu bản sao với bản chính',
      'Đóng dấu lời chứng thực, trình Lãnh đạo UBND xã hoặc người được ủy quyền ký chứng thực',
      'Lấy số chứng thực vào Sổ chứng thực điện tử và trả ngay cho công dân'
    ]
  },
  {
    id: 'tthc-08',
    code: '1.000325.000.00.00.H40',
    name: 'Chứng thực chữ ký trong các giấy tờ, văn bản và sơ yếu lý lịch',
    category: 'chung-thuc',
    categoryName: 'Chứng thực',
    timeLimit: 'Giải quyết ngay trong ngày làm việc',
    fee: '10.000 đồng / trường hợp',
    executionType: 'Trực tiếp tại Bộ phận một cửa',
    authority: 'UBND xã Hoa Quân, tỉnh Nghệ An',
    documents: [
      'Giấy tờ, văn bản mà người yêu cầu chứng thực sẽ ký vào;',
      'Xuất trình Căn cước công dân của người yêu cầu chứng thực.'
    ],
    dvcUrl: 'https://dichvucong.gov.vn',
    steps: [
      'Người yêu cầu ký tên trực tiếp trước mặt người tiếp nhận hồ sơ',
      'Ghi lời chứng, ký duyệt và đóng dấu',
      'Thu phí theo biên lai điện tử và trả kết quả ngay'
    ]
  },
  {
    id: 'tthc-09',
    code: '1.001844.000.00.00.H40',
    name: 'Trợ cấp xã hội hàng tháng đối với người cao tuổi, người khuyết tật nặng',
    category: 'ldtbxh',
    categoryName: 'Lao động - Thương binh & Xã hội',
    timeLimit: '07 ngày làm việc',
    fee: 'Miễn phí hoàn toàn',
    executionType: 'Trực tuyến toàn trình',
    authority: 'UBND xã Hoa Quân, tỉnh Nghệ An',
    documents: [
      'Tờ khai đề nghị trợ cấp xã hội (theo mẫu quy định);',
      'Bản sao Giấy xác nhận mức độ khuyết tật (đối với người khuyết tật);',
      'Bản sao Giấy khai sinh hoặc CCCD để xác định độ tuổi.'
    ],
    dvcUrl: 'https://dichvucong.gov.vn',
    steps: [
      'Nộp hồ sơ trực tuyến hoặc tại Quầy số 4',
      'Hội đồng xác định mức độ khuyết tật xã xét duyệt',
      'Chủ tịch UBND xã ban hành Quyết định trợ cấp và lập danh sách chi trả qua tài khoản an sinh xã hội'
    ]
  },
  {
    id: 'tthc-10',
    code: '1.001850.000.00.00.H40',
    name: 'Hỗ trợ chi phí mai táng cho đối tượng bảo trợ xã hội',
    category: 'ldtbxh',
    categoryName: 'Lao động - Thương binh & Xã hội',
    timeLimit: '03 ngày làm việc',
    fee: 'Miễn phí hoàn toàn',
    executionType: 'Trực tuyến toàn trình',
    authority: 'UBND xã Hoa Quân, tỉnh Nghệ An',
    documents: [
      'Tờ khai đề nghị hỗ trợ chi phí mai táng;',
      'Bản sao Giấy chứng tử của đối tượng;',
      'Bản sao Quyết định thôi hưởng trợ cấp xã hội hàng tháng.'
    ],
    dvcUrl: 'https://dichvucong.gov.vn',
    steps: [
      'Công chức LĐTB&XH tiếp nhận và thẩm định hồ sơ',
      'Trình Chủ tịch UBND xã phê duyệt quyết định hỗ trợ',
      'Chi trả kinh phí mai táng kịp thời cho thân nhân gia đình'
    ]
  },
  {
    id: 'tthc-11',
    code: '1.003921.000.00.00.H40',
    name: 'Đăng ký thành lập Hộ kinh doanh cá thể tại địa bàn xã',
    category: 'ho-kinh-doanh',
    categoryName: 'Tài chính - Kế hoạch - Hộ kinh doanh',
    timeLimit: '03 ngày làm việc',
    fee: '100.000 đồng / lần cấp',
    executionType: 'Trực tuyến toàn trình',
    authority: 'Bộ phận tiếp nhận liên thông xã Hoa Quân',
    documents: [
      'Giấy đề nghị đăng ký hộ kinh doanh theo mẫu thống nhất;',
      'Bản sao hợp lệ CCCD của chủ hộ kinh doanh và các thành viên tham gia;',
      'Hợp đồng thuê địa điểm kinh doanh hoặc giấy chứng nhận quyền sở hữu nhà đất.'
    ],
    dvcUrl: 'https://dichvucong.nghean.gov.vn',
    steps: [
      'Kê khai trực tuyến trên Cổng dịch vụ công',
      'Hệ thống liên thông cấp mã số thuế hộ kinh doanh',
      'Trả Giấy chứng nhận đăng ký hộ kinh doanh điện tử và bản in có dấu'
    ]
  }
]
