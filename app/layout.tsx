import "./globals.css"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"

export const metadata = {
  title: "وزارة العدل | النظام الإلكتروني",
  description: "نظام إدارة القضايا",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>

        <div className="layout">

          <Sidebar />

          <main className="content">

            <Header />

            {children}

          </main>

        </div>

      </body>
    </html>
  )
}