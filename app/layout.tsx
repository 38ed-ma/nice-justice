import "./globals.css"

export const metadata = {
  title: "وزارة العدل - النظام الإلكتروني",
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

          <aside className="sidebar">

            <h2>⚖️ وزارة العدل</h2>

            <nav>
              <p>🏠 الرئيسية</p>
              <p>📁 القضايا</p>
              <p>👨‍⚖️ القضاة</p>
              <p>👥 المستخدمين</p>
              <p>📜 الأحكام</p>
              <p>⚙️ الإعدادات</p>
            </nav>

          </aside>


          <main className="content">

            <header>
              نظام إدارة العدل الإلكتروني
            </header>

            {children}

          </main>


        </div>

      </body>
    </html>
  )
}