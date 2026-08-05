"use client"
import Link from "next/link"
import { useState } from "react"

export default function Cases() {

  const [cases, setCases] = useState<any[]>([])
  const [plaintiff, setPlaintiff] = useState("")
  const [defendant, setDefendant] = useState("")
  const [type, setType] = useState("")

  function addCase() {

    const newCase = {
      id: cases.length + 1,
      plaintiff,
      defendant,
      type,
      status: "جديدة"
    }

    setCases([...cases, newCase])

    setPlaintiff("")
    setDefendant("")
    setType("")
  }

  return (
    <main>

      <h1>⚖️ نظام القضايا</h1>

      <hr />

      <h2>إضافة قضية جديدة</h2>

      <input
        placeholder="اسم المدعي"
        value={plaintiff}
        onChange={(e) => setPlaintiff(e.target.value)}
      />

      <br />

      <input
        placeholder="اسم المدعى عليه"
        value={defendant}
        onChange={(e) => setDefendant(e.target.value)}
      />

      <br />

      <input
        placeholder="نوع القضية"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />

      <br />

      <button onClick={addCase}>
        إضافة القضية
      </button>


      <hr />

      <h2>القضايا المسجلة</h2>

      {cases.map((item) => (
        <div key={item.id}>

          <h3>
            رقم القضية: #{item.id}
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
            الحالة: {item.status}
          </p>

          <hr />

        </div>
      ))}

    </main>
  )
}