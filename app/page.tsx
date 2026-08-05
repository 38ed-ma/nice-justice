"use client"

import { useState } from "react"

export default function Home() {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const [dashboard, setDashboard] = useState(false)
  const [error, setError] = useState("")

  function handleLogin() {
    if (user === "admin" && pass === "1234") {
      setDashboard(true)
      setLogin(false)
      setError("")
    } else {
      setError("بيانات الدخول غير صحيحة")
    }
  }

  return (
    <main>

      {!dashboard ? (
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

          <p>مرحباً بك في النظام الإداري</p>

          <button>القضايا</button>
          <button>الأحكام</button>
          <button>التراخيص</button>
          <button>المحامين</button>

          <br />

          <button onClick={() => setDashboard(false)}>
            تسجيل خروج
          </button>
        </>
      )}

    </main>
  )
}