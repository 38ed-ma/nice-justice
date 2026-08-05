export default function Dashboard() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#eef2f7",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#0f172a" }}>
        🏛️ وزارة العدل الإلكترونية
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#555",
          marginBottom: "30px",
        }}
      >
        لوحة التحكم الرئيسية
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        <a
          href="/cases"
          style={{
            textDecoration: "none",
            color: "black",
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,.1)",
          }}
        >
          <h2>⚖️ القضايا</h2>
          <p>إدارة جميع القضايا.</p>
        </a>

        <a
          href="/judgments"
          style={{
            textDecoration: "none",
            color: "black",
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,.1)",
          }}
        >
          <h2>📜 الأحكام</h2>
          <p>إدارة الأحكام القضائية.</p>
        </a>

        <a
          href="/employees"
          style={{
            textDecoration: "none",
            color: "black",
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,.1)",
          }}
        >
          <h2>👥 الموظفون</h2>
          <p>إدارة موظفي الوزارة.</p>
        </a>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,.1)",
          }}
        >
          <h2>🪪 التراخيص</h2>
          <p>قريبًا...</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,.1)",
          }}
        >
          <h2>📝 القرارات</h2>
          <p>قريبًا...</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,.1)",
          }}
        >
          <h2>⚙️ الإعدادات</h2>
          <p>قريبًا...</p>
        </div>
      </div>
    </main>
  )
}