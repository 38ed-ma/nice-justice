"use client"

import { useEffect, useState } from "react"
const [casesCount, setCasesCount] = useState(0)
const [judgesCount, setJudgesCount] = useState(0)
const [usersCount, setUsersCount] = useState(0)
export default function Home() {

  const [role, setRole] = useState("")

  useEffect(() => {

  const user = localStorage.getItem("role")

  if (user) {
    setRole(user)

    const savedCases = JSON.parse(localStorage.getItem("cases") || "[]")
    setCasesCount(savedCases.length)

    const savedJudges = JSON.parse(localStorage.getItem("judges") || "[]")
    setJudgesCount(savedJudges.length)

    const savedUsers = JSON.parse(localStorage.getItem("users") || "[]")
    setUsersCount(savedUsers.length)
  }

}, [])
  return (
    <main>

      <section className="hero">

        <div>
          <h1>⚖️ نظام وزارة العدل</h1>
          <p>لوحة التحكم الرئيسية لإدارة القضايا والجلسات والأحكام.</p>
        </div>

        <div className="role-badge">
          {role || "زائر"}
        </div>

      </section>


      <section className="dashboard">

        <div className="card">
          <span>📁</span>
          <h3>القضايا</h3>
          <h2>0</h2>
        </div>

        <div className="card">
          <span>👨‍⚖️</span>
          <h3>القضاة</h3>
          <h2>0</h2>
        </div>

        <div className="card">
          <span>📜</span>
          <h3>الأحكام</h3>
          <h2>0</h2>
        </div>

        <div className="card">
          <span>👥</span>
          <h3>المستخدم الحالي</h3>
          <h2>{role || "زائر"}</h2>
        </div>

      </section>


      <section className="welcome-card">

        <h2>مرحباً بك 👋</h2>

        <p>
          أهلاً بك في نظام وزارة العدل الإلكتروني.
          يمكنك إدارة القضايا، متابعة الأحكام، واستعراض بيانات القضاة من لوحة التحكم.
        </p>

      </section>

    </main>
  )
}