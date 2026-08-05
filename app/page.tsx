"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Home() {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [role, setRole] = useState("")
  const [username, setUsername] = useState("")
  const [error, setError] = useState("")

  function handleLogin() {
    if (user === "minister" && pass === "1234") {
      setRole("وزير العدل")
      setUsername("minister")
    } else if (user === "judge" && pass === "J1234") {
      setRole("قاضي")
      setUsername("judge")
    } else if (user === "lawyer" && pass === "L1234") {
      setRole("محامي")
      setUsername("lawyer")
    } else {
      setError("بيانات الدخول غير صحيحة")
      return
    }

    setLogin(false)
    setError("")
  }

  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      {!role ? (
        <>
          <h1>🏛️ نايس سيتي</h1>
          <h3>وزارة العدل الإلكترونية</h3>

          <button onClick={() => setLogin(true)}>
            تسجيل الدخول (للعدل فقط)
          </button>

          <hr />

          <h2>مرحباً بكم في بوابة وزارة العدل</h2>

          <p>النظام الإلكتروني لإدارة القضايا والأحكام والتراخيص.</p>

          {login && (
            <div>
              <h2>تسجيل دخول العدل</h2>

              <input
                placeholder="اسم المستخدم"
                onChange={(e) => setUser(e.target.value)}
              />

              <br /><br />

              <input
                placeholder="كلمة المرور"
                type="password"
                onChange={(e) => setPass(e.target.value)}
              />

              <br /><br />

              <button onClick={handleLogin}>دخول</button>

              <button onClick={() => setLogin(false)}>إغلاق</button>

              <p style={{ color: "red" }}>{error}</p>
            </div>
          )}
        </>
      ) : (
        <>
          <h1>🏛️ لوحة وزارة العدل</h1>

          <h2>مرحباً {username}</h2>

          <p>الرتبة: {role}</p>

          <h2>تم تسجيل الدخول بنجاح ✅</h2>

<p>
مرحبًا بك في وزارة العدل الإلكترونية
</p>

<br />

<Link href="/dashboard">
  <button
    style={{
      padding: "15px 30px",
      fontSize: "18px",
      borderRadius: "10px",
      cursor: "pointer"
    }}
  >
    🏛️ دخول لوحة التحكم
  </button>
</Link>

<br /><br />

<button
  onClick={() => {
    setRole("")
    setUsername("")
  }}
>
  تسجيل خروج
</button>
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/cases">
              <button>⚖️ القضايا</button>
            </Link>

            <Link href="/judgments">
              <button>📜 الأحكام</button>
            </Link>

            {role === "وزير العدل" && (
              <>
                <Link href="/employees">
                  <button>👥 إدارة الموظفين</button>
                </Link>

                <button>📝 القرارات</button>
              </>
            )}

            {role === "قاضي" && (
              <>
                <button>📂 القضايا المحالة</button>
                <button>⚖️ إصدار حكم</button>
              </>
            )}

            {role === "محامي" && (
              <>
                <button>📁 ملفاتي</button>
                <button>📄 الطلبات</button>
              </>
            )}
          </div>

          <br /><br />

          <button
            onClick={() => {
              setRole("")
              setUsername("")
            }}
          >
            تسجيل خروج
          </button>
        </>
      )}
    </main>
  )
}