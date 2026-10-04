import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../styles.css'

const siteName = 'Trung tâm Phục vụ Hành chính công xã Hoa Quân, tỉnh Nghệ An'
const siteDescription = 'Cổng thông tin điện tử, cập nhật hoạt động công vụ, tra cứu thủ tục hành chính, tra cứu tiến độ hồ sơ một cửa và tiếp nhận ý kiến công dân của Trung tâm Phục vụ Hành chính công xã Hoa Quân, tỉnh Nghệ An.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans antialiased selection:bg-red-700 selection:text-white">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
