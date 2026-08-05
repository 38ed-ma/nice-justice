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
fontFamily:"Arial, sans-serif"
}}
>


<header
style={{
background:"linear-gradient(135deg,#0B1F3A,#162B4D)",
color:"white",
padding:"25px 15px",
textAlign:"center",
boxShadow:"0 5px 20px rgba(0,0,0,.25)"
}}
>


<h1
style={{
margin:0,
fontSize:"24px"
}}
>
⚖️ Minister Of Justice
</h1>


<h2
style={{
margin:"8px 0",
fontSize:"22px"
}}
>
وزارة العدل
</h2>



<div

style={{

marginTop:"15px",

background:"rgba(255,255,255,.1)",

padding:"15px",

borderRadius:"15px"

}}

>


<div
style={{
color:"#D4AF37"
}}
>
وزير العدل
</div>


<strong
style={{
fontSize:"20px"
}}
>
عقيد ( خالد ايلفن )
</strong>


</div>



</header>



{children}



</body>


</html>

)

}