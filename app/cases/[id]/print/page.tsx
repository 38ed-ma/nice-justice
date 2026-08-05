"use client"

import { useEffect, useState } from "react"

export default function PrintJudgment() {

  const [data, setData] = useState<any>(null)
  const [verify, setVerify] = useState("")

  useEffect(() => {

    const id = window.location.pathname.split("/")[2]

    const saved = localStorage.getItem("cases")

    if (saved) {

      const cases = JSON.parse(saved)

      const found = cases.find((item: any) => item.id === id)

      setData(found)

      setVerify("CHK-" + Date.now())

    }

  }, [])

  function printPage() {
    window.print()
  }

  if (!data) {
    return (
      <main style={{ padding: "40px", textAlign: "center" }}>
        <h1>جاري تحميل الصك...</h1>
      </main>
    )
  }

  return (

    <main
      style={{
        padding: "40px",
        direction: "rtl",
        background: "#fff",
        color: "#000",
        minHeight: "100vh"
      }}
    >

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          border: "3px solid black",
          padding: "30px",
          borderRadius: "10px"
        }}
      >

        <h1 style={{ textAlign: "center" }}>
          ⚖️ وزارة العدل
        </h1>

        <h2 style={{ textAlign: "center" }}>
          صك حكم قضائي
        </h2>

        <hr />

        <p><strong>رقم القضية:</strong> {data.id}</p>

        <p><strong>رقم التحقق:</strong> {verify}</p>

        <p><strong>رقم الصك:</strong> {data.deedNumber || "غير محدد"}</p>

        <p><strong>المدعي:</strong> {data.plaintiff}</p>

        <p><strong>المدعى عليه:</strong> {data.defendant}</p>

        <p><strong>القاضي:</strong> {data.judge}</p>

        <hr />

        <h3>الحكم</h3>

        <p>
          {data.judgment || "لم يتم إصدار حكم حتى الآن"}
        </p>

        <br />

        <p>
          <strong>توقيع القاضي:</strong>
        </p>

        <h3>
          {data.signature || "........................"}
        </h3>

        <br />

        <div
          style={{
            width: "180px",
            height: "180px",
            border: "3px dashed red",
            borderRadius: "50%",
            margin: "30px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "red",
            fontWeight: "bold",
            textAlign: "center"
          }}
        >
          ختم<br />
          وزارة العدل
        </div>

      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "30px"
        }}
      >

        <button
          onClick={printPage}
          style={{
            padding: "12px 25px",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          🖨️ طباعة الصك
        </button>

      </div>

    </main>

  )

}