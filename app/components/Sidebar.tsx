"use client"

import { useEffect, useState } from "react"

export default function Sidebar(){

const [user,setUser] = useState<any>(null)
const [open,setOpen] = useState(false)


useEffect(()=>{

const savedUser = localStorage.getItem("user")

if(savedUser){
setUser(JSON.parse(savedUser))
}

},[])



const menu=[

["🏠","الرئيسية","/dashboard"],
["⚖️","القضايا","/cases"],
["📜","الأحكام","/archive"],
["📅","الجلسات","/calendar"],
["👥","المستخدمون","/users"],
["🔔","الإشعارات","/notifications"],
["👤","الملف الشخصي","/profile"],
["🔐","تسجيل الدخول","/login"]

]



return(

<>


<button

onClick={()=>setOpen(!open)}

style={{

position:"fixed",
top:"15px",
right:"15px",
zIndex:10000,
background:"#D4AF37",
border:"none",
padding:"12px 16px",
borderRadius:"10px",
fontSize:"22px",
cursor:"pointer"

}}

>

☰

</button>



<aside

style={{

position:"fixed",
right:0,
top:0,

width:"260px",
maxWidth:"85vw",

height:"100vh",

background:"#0B1F3A",

color:"white",

zIndex:9999,

padding:"20px",

transform:
open
? "translateX(0)"
: "translateX(100%)",

transition:"0.3s",

boxShadow:"-10px 0 30px #0006",

overflowY:"auto"

}}

>


<h1

style={{

textAlign:"center",
color:"#D4AF37"

}}

>

⚖️ وزارة العدل

</h1>



<p

style={{

textAlign:"center",
color:"#E8DCC0"

}}

>

Minister Of Justice

</p>




<div

style={{

marginTop:"20px",
padding:"15px",
border:"1px solid #D4AF37",
borderRadius:"15px",
textAlign:"center"

}}

>

<p>
وزير العدل
</p>

<h3>
عقيد ( خالد ايلفن )
</h3>

</div>




<div

style={{

marginTop:"20px",
background:"#132B4F",
padding:"10px",
borderRadius:"10px"

}}

>

👤 {user?.username || "زائر"}

<br/>

{user?.role || "بدون صلاحية"}

</div>




<div style={{marginTop:"25px"}}>


{

menu.map((item:any)=>(


<button

key={item[2]}

onClick={()=>{

window.location.href=item[2]

}}

style={{

width:"100%",
padding:"14px",
marginBottom:"10px",
border:"none",
borderRadius:"12px",

background:"#132B4F",

color:"white",

fontSize:"15px",

textAlign:"right",

cursor:"pointer"

}}

>

{item[0]} {item[1]}

</button>


))


}


</div>



<footer

style={{

textAlign:"center",
marginTop:"20px",
color:"#E8DCC0",
fontSize:"12px"

}}

>

Ministry Of Justice © 2026

</footer>


</aside>


</>

)

}