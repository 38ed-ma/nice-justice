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
height:"140px",
background:
"linear-gradient(135deg,#0B1F3A,#162B4D)",
color:"white",
display:"flex",
alignItems:"center",
justifyContent:"space-between",
padding:"0 50px",
boxShadow:"0 8px 25px rgba(0,0,0,.25)"
}}
>


<div>

<h1
style={{
margin:0,
fontSize:"34px",
letterSpacing:"1px"
}}
>
⚖️ Minister Of Justice
</h1>


<h2
style={{
margin:"8px 0",
fontSize:"28px"
}}
>
وزارة العدل
</h2>


</div>




<div

style={{

background:"rgba(255,255,255,.1)",

padding:"20px 35px",

borderRadius:"20px",

border:"1px solid rgba(212,175,55,.5)",

textAlign:"center"

}}

>


<p

style={{

margin:0,

color:"#D4AF37",

fontSize:"16px"

}}

>

وزير العدل

</p>



<h2

style={{

margin:"8px 0",

fontSize:"24px"

}}

>

عقيد ( خالد ايلفن )

</h2>


</div>



</header>



{children}



</body>


</html>

)

}