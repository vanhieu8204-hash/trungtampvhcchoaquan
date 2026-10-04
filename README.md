# Trung Tâm Phục Vụ Hành Chính Công Xã Hoa Quân, Tỉnh Nghệ An

Cổng thông tin điện tử, cập nhật hoạt động công vụ, tra cứu thủ tục hành chính, tra cứu tiến độ hồ sơ một cửa và tiếp nhận ý kiến công dân của Trung tâm Phục vụ Hành chính công xã Hoa Quân, tỉnh Nghệ An.

## Giới thiệu tổng quan

Trang web phục vụ người dân, tổ chức và doanh nghiệp trên địa bàn xã Hoa Quân, tỉnh Nghệ An trong công tác tiếp nhận, xử lý và theo dõi thủ tục hành chính theo cơ chế Một cửa, Một cửa liên thông hiện đại:
- **Cập nhật & giới thiệu hoạt động**: Đăng tải tin tức chỉ đạo điều hành, hoạt động công vụ, sáng kiến CCHC, mô hình "Ngày thứ Năm không hẹn", chuyển đổi số và Đề án 06.
- **Tra cứu bộ thủ tục hành chính**: Hơn 120+ TTHC cấp xã chia theo các lĩnh vực (Tư pháp - Hộ tịch, Địa chính - Đất đai, Lao động - TB&XH, Chứng thực, Hộ kinh doanh).
- **Tra cứu tiến độ hồ sơ điện tử**: Kiểm tra dòng thời gian luân chuyển hồ sơ thời gian thực qua mã biên nhận.
- **Đặt lịch hẹn làm việc trực tuyến**: Đăng ký trước ngày giờ làm việc tại các quầy Một cửa để được tiếp nhận ưu tiên.
- **Khảo sát hài lòng & Gửi phản ánh**: Đo lường chỉ số SIPAS và chuyển tiếp trực tiếp ý kiến đóng góp đến Lãnh đạo UBND xã.
- **Phân hệ quản trị / Cập nhật hoạt động**: Giao diện đăng tin nhanh dành cho cán bộ một cửa với khả năng lưu trữ cơ sở dữ liệu.

## Công nghệ sử dụng

- **Frontend Framework**: TanStack Start (React 19, TanStack Router v1)
- **Styling**: Tailwind CSS v4, Lucide React Icons
- **Content Engine**: Content Collections (Markdown bài viết biên tập có kiểm tra kiểu dữ liệu với Zod)
- **Cơ sở dữ liệu**: Netlify Database (Managed Postgres) kết hợp Drizzle ORM (`drizzle-orm@beta`, `drizzle-kit@beta`)
- **Serverless API**: Netlify Functions (`@netlify/functions`)
- **Thu thập dữ liệu mẫu**: Netlify Forms (`citizen_feedback`, `appointment_booking`) với static skeleton `public/__forms.html`
- **Build tool**: Vite 7

## Cấu trúc thư mục

```
├── content/posts/           # Các bài viết hoạt động định dạng Markdown
├── db/                      # Schema cơ sở dữ liệu Postgres (Drizzle ORM)
│   ├── schema.ts
│   └── index.ts
├── netlify/
│   ├── database/migrations/ # Các file migration SQL tự động chạy khi deploy
│   └── functions/api.ts     # Netlify Functions xử lý API REST
├── public/                  # Assets tĩnh và file form detection __forms.html
├── src/
│   ├── components/          # Header, Footer, BlogPosts, UI primitives
│   ├── data/                # Dữ liệu 120+ TTHC, Quầy giao dịch, Hồ sơ mẫu
│   ├── routes/              # Các route trang (Trang chủ, Giới thiệu, Hoạt động...)
│   └── styles.css           # Cấu hình Tailwind và màu sắc trang trọng hành chính
├── drizzle.config.ts        # Cấu hình Drizzle Kit
├── netlify.toml             # Cấu hình Netlify build và functions
└── package.json
```

## Chạy dự án cục bộ

1. Cài đặt các gói phụ thuộc:
```bash
pnpm install
```

2. Chạy môi trường phát triển với Netlify CLI:
```bash
netlify dev --port 8889
```
Hoặc chạy Vite dev server:
```bash
pnpm dev
```
Trang web sẽ sẵn sàng tại `http://localhost:3000` (hoặc cổng do Netlify CLI điều phối).
