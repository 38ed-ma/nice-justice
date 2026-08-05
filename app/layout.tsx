"use client"
import "./globals.css"
import Link from "next/link"
import { useEffect, useState } from "react"
export const metadata = {
  title: "وزارة العدل - النظام الإلكتروني",
  description: "نظام إدارة القضايا",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [role, setRole] = useState("")


useEffect(() => {

  const user = localStorage.getItem("role")

  if(user){
    setRole(user)
  }

}, [])

return (
    <html lang="ar" dir="rtl">
      <body>

        <div className="layout">

          <aside className="sidebar">

            <h2>⚖️ وزارة العدل</h2>

            <nav>
  <p>🏠 الرئيسية</p>
  <Link href="/cases">
  <p>📁 القضايا</p>
</Link>
  <Link href="/judges">
  <p>👨‍⚖️ القضاة</p>
</Link>
  <Link href="/users">
  {
role === "مسؤول" && (
<p>👥 المستخدمين</p>
)
}
</Link>
  <Link href="/verdicts">
  <p>📜 الأحكام</p>
</Link>
  <Link href="/settings">
  <p>⚙️ الإعدادات</p>
</Link>

  <Link href="/login">
  <p>🔐 تسجيل دخول للعدل</p>
</Link>

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