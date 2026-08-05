"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Sidebar() {
  const [role, setRole] = useState("")

  useEffect(() => {
    const savedRole = localStorage.getItem("role")
    if (savedRole) {
      setRole(savedRole)
    }
  }, [])

  return (
    <aside className="sidebar">

      <div className="logo">
        <h2>⚖️ وزارة العدل</h2>
        <span>النظام الإلكتروني</span>
      </div>

      <nav>

        <Link href="/">🏠 الرئيسية</Link>

        <Link href="/cases">📁 القضايا</Link>

        <Link href="/judges">👨‍⚖️ القضاة</Link>

        {role === "مسؤول" && (
          <Link href="/users">👥 المستخدمين</Link>
        )}

        <Link href="/verdicts">📜 الأحكام</Link>

        <Link href="/settings">⚙️ الإعدادات</Link>

      </nav>

      <div className="sidebar-footer">
        <p>الصلاحية الحالية</p>
        <strong>{role || "غير مسجل"}</strong>
      </div>

    </aside>
  )
}