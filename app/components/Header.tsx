"use client"

import { useEffect, useState } from "react"

export default function Header() {
  const [role, setRole] = useState("")

  useEffect(() => {
    const savedRole = localStorage.getItem("role")
    if (savedRole) {
      setRole(savedRole)
    }
  }, [])

  const today = new Date().toLocaleDateString("ar-SA")

  return (
    <header className="topbar">

      <div>
        <h1>نظام إدارة العدل</h1>
        <p>وزارة العدل الإلكترونية</p>
      </div>

      <div className="user-box">
        <div>
          <strong>{role || "زائر"}</strong>
          <p>{today}</p>
        </div>

        <div className="avatar">
          ⚖️
        </div>
      </div>

    </header>
  )
}