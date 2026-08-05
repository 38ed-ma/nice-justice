"use client"

import Link from "next/link"
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
    } 
    else if (user === "judge" && pass === "J1234") {
      setRole("قاضي")
      setUsername("judge")
    } 
    else if (user === "lawyer" && pass === "L1234") {
      setRole("محامي")
      setUsername("lawyer")
    } 
    else {
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

          <p>
            النظام الإلكتروني لإدارة القضايا والأحكام والتراخيص.
          </p>

          {login && (
            <div>
              <h2>تسجيل دخول العدل</h2>

              <input
                placeholder="اسم المستخدم"
                onChange={(e) => setUser(e.target.value)}
              />

              <br />

              <input
                placeholder="كلمة المرور"
                type="password"
                onChange={(e) => setPass(e.target.value)}
              />

              <br />

              <button onClick={handleLogin}>
                دخول
              </button>

              <button onClick={() => setLogin(false)}>
                إغلاق
              </button>

              <p>{error}</p>
            </div>
          )}

        </>
      ) : (
        <>
          <h1>🏛️ لوحة وزارة العدل</h1>

          <h2>مرحباً {username}</h2>

          <p>
            الرتبة: {role}
          </p>

          <hr />

          <h2>الخدمات</h2>

          <Link href="/cases">
            <button>
              ⚖️ القضايا
            </button>
          </Link>

          <button>
            📜 الأحكام
          </button>

          {role === "وزير العدل" && (
            <>
              <button>
                👥 إدارة الموظفين
              </button>

              <button>
                📝 القرارات
              </button>
            </>
          )}

          {role === "قاضي" && (
            <>
              <button>
                📂 القضايا المحالة
              </button>

              <button>
                ⚖️ إصدار حكم
              </button>
            </>
          )}

          {role === "محامي" && (
            <>
              <button>
                📁 ملفاتي
              </button>

              <button>
                📄 الطلبات
              </button>
            </>
          )}

          <br /><br />

          <button onClick={() => {
            setRole("")
            setUsername("")
          }}>
            تسجيل خروج
          </button>

        </>
      )}

    </main>
  )
}