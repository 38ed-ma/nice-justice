"use client"

import { useState } from "react"

export default function Home() {
  const [login, setLogin] = useState(false)

  return (
    <main>
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

          <input placeholder="اسم المستخدم" />

          <br />

          <input placeholder="كلمة المرور" type="password" />

          <br />

          <button>
            دخول
          </button>

          <button onClick={() => setLogin(false)}>
            إغلاق
          </button>
        </div>
      )}
    </main>
  )
}