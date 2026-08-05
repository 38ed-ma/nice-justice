"use client"

import { useState } from "react"

export default function Home() {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [role, setRole] = useState("")
  const [error, setError] = useState("")

  function handleLogin() {
    if (user === "minister" && pass === "1234") {
      setRole("وزير العدل")
    } 
    else if (user === "judge" && pass === "J1234") {
      setRole("قاضي")
    } 
    else if (user === "lawyer" && pass === "L1234") {
      setRole("محامي")
    } 
    else {
      setError("بيانات الدخول غير صحيحة")
      return
    }

    setLogin(false)
    setError("")
  }

  return (
    <main>

      {!role ? (
        <>
          <h1>نايس سيتي</h1>
          <p>وزارة العدل الإلكترونية</p>

          <button onClick={() => setLogin(true)}>
            تسجيل الدخول (للعدل فقط)
          </button>

          <hr />

          <h2>مرحباً بكم في بوابة وزارة العدل</h2>

          <p>
            هنا يتم تقديم الخدمات الإلكترونية الخاصة بالعدل والقضايا والتراخيص.
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
          <h1>لوحة تحكم وزارة العدل</h1>

          <h2>الرتبة: {role}</h2>

          <hr />

          <button>
            القضايا
          </button>

          <button>
            الأحكام
          </button>

          {role === "وزير العدل" && (
            <>
              <button>
                إدارة الموظفين
              </button>

              <button>
                القرارات
              </button>
            </>
          )}

          {role === "قاضي" && (
            <button>
              مراجعة القضايا
            </button>
          )}

          {role === "محامي" && (
            <button>
              ملفاتي
            </button>
          )}

          <br />

          <button onClick={() => setRole("")}>
            تسجيل خروج
          </button>
        </>
      )}

    </main>
  )
}