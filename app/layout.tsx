import "./globals.css"

export const metadata = {
  title: "وزارة العدل",
  description: "Minister Of Justice",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="ar" dir="rtl">

      <body
        style={{
          margin:0,
          background:"#E8DCC0",
          fontFamily:"Arial"
        }}
      >


        <header
          style={{
            height:"120px",
            background:"#0B1F3A",
            color:"white",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            boxShadow:"0 4px 15px rgba(0,0,0,.3)"
          }}
        >

          <h1
            style={{
              margin:0,
              fontSize:"32px"
            }}
          >
            ⚖️ Minister Of Justice - وزارة العدل
          </h1>


          <p
            style={{
              marginTop:"10px",
              fontSize:"18px",
              color:"#D4AF37"
            }}
          >
            وزير العدل : عقيد ( خالد ايلفن )
          </p>


        </header>



        {children}



      </body>


    </html>

  )
}