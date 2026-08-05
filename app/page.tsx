export default function Home() {
  return (
    <main dir="rtl" style={{ minHeight: "100vh", background: "#f5f5f5", padding: "40px" }}>
      
      <header style={{
        background: "#111827",
        color: "white",
        padding: "25px",
        borderRadius: "15px",
        textAlign: "center"
      }}>
        <h1>وزارة العدل الإلكترونية</h1>
        <p>بوابة نايس سيتي للخدمات القضائية</p>
      </header>


      <section style={{
        marginTop: "30px",
        display: "grid",
        gap: "20px"
      }}>

        <div style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px"
        }}>
          <h2>⚖️ الخدمات القضائية</h2>
          <p>رفع القضايا - متابعة الأحكام - طلبات المحكمة</p>
        </div>


        <div style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px"
        }}>
          <h2>📄 إصدار الوثائق</h2>
          <p>إصدار أحكام - تراخيص - تصاريح رسمية</p>
        </div>


        <div style={{
          background: "white",
          padding: "25px",
          borderRadius: "15px"
        }}>
          <h2>👨‍⚖️ المحكمة الإلكترونية</h2>
          <p>حجز موعد جلسة ومراجعة القضايا</p>
        </div>

      </section>


      <footer style={{
        marginTop: "40px",
        textAlign: "center"
      }}>
        © وزارة العدل - نايس سيتي
      </footer>

    </main>
  )
}