"use client"

import { useEffect, useState } from "react"

export default function Sidebar() {

  const [user, setUser] = useState<any>(null)
  const [notifications, setNotifications] = useState(0)

  useEffect(() => {

    const savedUser = localStorage.getItem("user")

    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }

    const savedNotifications = localStorage.getItem("notifications")

    if (savedNotifications) {
      setNotifications(JSON.parse(savedNotifications).length)
    }

  }, [])

  const menu = [
    {
      icon: "🏠",
      title: "الرئيسية",
      link: "/dashboard"
    },
    {
      icon: "⚖️",
      title: "القضايا",
      link: "/cases"
    },
    {
      icon: "📜",
      title: "الأحكام",
      link: "/archive"
    },
    {
      icon: "📅",
      title: "الجلسات",
      link: "/calendar"
    },
    {
      icon: "👥",
      title: "المستخدمون",
      link: "/users"
    },
    {
      icon: "🔔",
      title: `الإشعارات (${notifications})`,
      link: "/notifications"
    },
    {
      icon: "👤",
      title: "الملف الشخصي",
      link: "/profile"
    },
    {
      icon: "🔐",
      title: "تسجيل الدخول",
      link: "/login"
    }
  ]

  return (

    <aside
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "300px",
        height: "100vh",
        background: "#0F3D2E",
        color: "white",
        display: "flex",
        flexDirection: "column",
        boxShadow: "-8px 0 25px rgba(0,0,0,.25)",
        zIndex: 999
      }}
    >

      <div
        style={{
          padding: "28px",
          borderBottom: "1px solid rgba(255,255,255,.12)",
          background:
            "linear-gradient(180deg,#14532d,#0F3D2E)"
        }}
      >

        <h1
          style={{
            margin: 0,
            fontSize: "26px",
            fontWeight: "bold"
          }}
        >
          ⚖️ وزارة العدل
        </h1>

        <p
          style={{
            marginTop: "8px",
            color: "#D1FAE5",
            fontSize: "15px"
          }}
        >
          Minister Of Justice
        </p>

        <div
          style={{
            marginTop: "25px",
            background: "rgba(255,255,255,.08)",
            borderRadius: "15px",
            padding: "18px"
          }}
        >

          <div
            style={{
              fontSize: "14px",
              color: "#A7F3D0"
            }}
          >
            وزير العدل
          </div>

          <h2
            style={{
              margin: "8px 0 0",
              fontSize: "22px"
            }}
          >
            خالد ايلفن
          </h2>

          <div
            style={{
              color: "#FCD34D",
              marginTop: "5px"
            }}
          >
            ( عقيد )
          </div>

        </div>

        <div
          style={{
            marginTop: "18px",
            fontSize: "14px"
          }}
        >

          👤 {user?.username || "زائر"}

          <br />

          {user?.role || "بدون صلاحية"}

        </div>

      </div>

      <div
        style={{
          flex: 1,
          padding: "18px",
          overflowY: "auto"
        }}
      >

        {menu.map((item) => (

          <button
            key={item.link}
            onClick={() => window.location.href = item.link}
            style={{
              width: "100%",
              padding: "16px",
              marginBottom: "12px",
              borderRadius: "14px",
              border: "none",
              background: "#14532D",
              color: "white",
              textAlign: "right",
              cursor: "pointer",
              fontSize: "16px",
              transition: ".25s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#D4AF37"
              e.currentTarget.style.color = "#111"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#14532D"
              e.currentTarget.style.color = "white"
            }}
          >

            <span style={{ marginLeft: "10px" }}>
              {item.icon}
            </span>

            {item.title}

          </button>

        ))}

      </div>

      <div
        style={{
          padding: "20px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,.1)",
          color: "#9CA3AF",
          fontSize: "13px"
        }}
      >
        Ministry Of Justice © 2026
      </div>

    </aside>

  )

}