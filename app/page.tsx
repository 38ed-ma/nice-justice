export default function Home() {
  return (
    <main dir="rtl" style={{
      minHeight: "100vh",
      background: "#eef2f3",
      fontFamily: "Arial, sans-serif"
    }}>

      {/* الهيدر */}
      <header style={{
        background: "#0f172a",
        color: "white",
        padding: "30px",
        textAlign: "center"
      }}>
        <h1 style={{fontSize:"35px"}}>
          ⚖️ وزارة العدل الإلكترونية
        </h1>

        <p style={{fontSize:"18px"}}>
          بوابة نايس سيتي للخدمات القضائية
        </p>
      </header>


      {/* القائمة */}
      <nav style={{
        background:"#ffffff",
        padding:"15px",
        display:"flex",
        justifyContent:"center",
        gap:"25px",
        boxShadow:"0 2px 10px #ddd"
      }}>

        <span>الرئيسية</span>
        <span>القضايا</span>
        <span>الأحكام</span>
        <span>الخدمات</span>
        <span>تواصل معنا</span>

      </nav>


      {/* الخدمات */}
      <section style={{
        padding:"40px",
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
        gap:"25px"
      }}>


        <div style={card}>
          <h2>📁 القضايا</h2>
          <p>
            تسجيل ومتابعة القضايا القضائية
          </p>
        </div>


        <div style={card}>
          <h2>⚖️ الأحكام</h2>
          <p>
            إصدار ومراجعة الأحكام الرسمية
          </p>
        </div>


        <div style={card}>
          <h2>👨‍⚖️ القضاة</h2>
          <p>
            إدارة صلاحيات القضاة والمحاكم
          </p>
        </div>


        <div style={card}>
          <h2>📄 الوثائق</h2>
          <p>
            إصدار التصاريح والاستدعاءات
          </p>
        </div>


      </section>


      {/* تسجيل الدخول */}
      <section style={{
        textAlign:"center",
        padding:"20px"
      }}>

        <button style={{
          background:"#0f172a",
          color:"white",
          border:"none",
          padding:"15px 40px",
          borderRadius:"10px",
          fontSize:"18px",
          cursor:"pointer"
        }}>
          تسجيل الدخول
        </button>

      </section>


      <footer style={{
        background:"#0f172a",
        color:"white",
        textAlign:"center",
        padding:"20px",
        marginTop:"30px"
      }}>
        © وزارة العدل - نايس سيتي
      </footer>


    </main>
  )
}


const card = {
  background:"white",
  padding:"25px",
  borderRadius:"15px",
  boxShadow:"0 5px 15px rgba(0,0,0,0.1)",
  textAlign:"center"
}