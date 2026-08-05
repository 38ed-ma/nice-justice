"use client"

import { useState } from "react"

export default function Judgments() {
  const [judgments, setJudgments] = useState<any[]>([])

  const [caseId, setCaseId] = useState("")
  const [judge, setJudge] = useState("")
  const [prison, setPrison] = useState("")
  const [fine, setFine] = useState("")
  const [notes, setNotes] = useState("")

  function addJudgment() {
    const newJudgment = {
      id: judgments.length + 1,
      caseId,
      judge,
      prison,
      fine,
      notes,
      date: new Date().toLocaleDateString("ar-SA")
    }

    setJudgments([...judgments, newJudgment])

    setCaseId("")
    setJudge("")
    setPrison("")
    setFine("")
    setNotes("")
  }

  return (
    <main style={{ padding: "40px", textAlign: "center" }}>

      <h1>📜 نظام الأحكام</h1>

      <hr />

      <input
        placeholder="رقم القضية"
        value={caseId}
        onChange={(e) => setCaseId(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="اسم القاضي"
        value={judge}
        onChange={(e) => setJudge(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="مدة السجن"
        value={prison}
        onChange={(e) => setPrison(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="الغرامة"
        value={fine}
        onChange={(e) => setFine(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="نص الحكم"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />

      <br /><br />

      <button onClick={addJudgment}>
        إصدار الحكم
      </button>

      <hr />

      {judgments.map((item) => (
        <div key={item.id}>
          <h3>الحكم #{item.id}</h3>
          <p>رقم القضية: {item.caseId}</p>
          <p>القاضي: {item.judge}</p>
          <p>مدة السجن: {item.prison}</p>
          <p>الغرامة: {item.fine}</p>
          <p>الحكم: {item.notes}</p>
          <p>التاريخ: {item.date}</p>
          <hr />
        </div>
      ))}

    </main>
  )
}