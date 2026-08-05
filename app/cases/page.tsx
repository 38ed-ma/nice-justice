"use client"

import { useState, useEffect } from "react"

export default function Cases() {

  const [cases, setCases] = useState<any[]>([])

useEffect(() => {
  const savedCases = localStorage.getItem("cases")

  if (savedCases) {
    setCases(JSON.parse(savedCases))
  }
}, [])

  const [plaintiff, setPlaintiff] = useState("")
  const [defendant, setDefendant] = useState("")
  const [type, setType] = useState("")
  const [judge, setJudge] = useState("")


  function addCase() {

  const newCase = {
    id: `NC-2026-${String(cases.length + 1).padStart(4, "0")}`,
    plaintiff,
    defendant,
    type,
    judge,
    status: "جديدة"
  }

  const updatedCases = [...cases, newCase]

  setCases(updatedCases)

  localStorage.setItem("cases", JSON.stringify(updatedCases))

  setPlaintiff("")
  setDefendant("")
  setType("")
  setJudge("")
}

    setCases([...cases, newCase])

    setPlaintiff("")
    setDefendant("")
    setType("")
    setJudge("")
  }


  return (
    <main style={{padding:"40px", textAlign:"center"}}>

      <h1>⚖️ نظام القضايا - وزارة العدل</h1>

      <hr />

      <h2>تسجيل قضية جديدة</h2>


      <input
        placeholder="اسم المدعي"
        value={plaintiff}
        onChange={(e)=>setPlaintiff(e.target.value)}
      />

      <br /><br />


      <input
        placeholder="اسم المدعى عليه"
        value={defendant}
        onChange={(e)=>setDefendant(e.target.value)}
      />

      <br /><br />


      <input
        placeholder="نوع القضية"
        value={type}
        onChange={(e)=>setType(e.target.value)}
      />

      <br /><br />


      <input
        placeholder="القاضي المسؤول"
        value={judge}
        onChange={(e)=>setJudge(e.target.value)}
      />

      <br /><br />


      <button onClick={addCase}>
        إنشاء قضية
      </button>


      <hr />


      <h2>سجل القضايا</h2>


      {cases.map((item)=>(
        <div key={item.id}>

          <h3>
            📁 {item.id}
          </h3>

          <p>
            المدعي: {item.plaintiff}
          </p>

          <p>
            المدعى عليه: {item.defendant}
          </p>

          <p>
            نوع القضية: {item.type}
          </p>

          <p>
            القاضي: {item.judge}
          </p>

          <p>
            الحالة: {item.status}
          </p>

          <hr />

        </div>
      ))}


    </main>
  )
}