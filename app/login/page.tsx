export default function Login() {
  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        background: "#eef2f3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          width: "350px",
          textAlign: "center",
          boxShadow: "0 5px 20px #ccc"
        }}
      >
        <h1>⚖️ تسجيل الدخول</h1>

        <p>اختر نوع الحساب</p>

        <button style={buttonStyle}>
          👤 مواطن
        </button>

        <button style={buttonStyle}>
          ⚖️ محامي
        </button>

        <button style={buttonStyle}>
          👨‍⚖️ قاضي
        </button>

        <button style={buttonStyle}>
          🏛️ إدارة الوزارة
        </button>
      </div>
    </main>
  )
}

const buttonStyle = {
  width: "100%",
  padding: "15px",
  margin: "10px 0",
  border: "none",
  borderRadius: "10px",
  background: "#0f172a",
  color: "white",
  fontSize: "16px",
  cursor: "pointer"
}