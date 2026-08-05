"use client"

import { useEffect, useState } from "react"

export default function Sidebar(){

const [user,setUser] = useState<any>(null)

useEffect(()=>{

const saved = localStorage.getItem("user")

if(saved){
setUser(JSON.parse(saved))
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

<aside
style={{
position:"fixed",
right:0,
top:0,
width:"260px",
height:"100vh",
background:"#0B1F3A",
color:"white",
zIndex:9999,
padding:"20px",
boxShadow:"-10px 0 25px #0005"
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

<p>وزير العدل</p>

<h3>
عقيد ( خالد ايلفن )
</h3>

</div>



<div style={{marginTop:"20px"}}>

👤 {user?.username || "زائر"}

<br/>

{user?.role || "بدون صلاحية"}

</div>



<div style={{marginTop:"25px"}}>

{
menu.map((item:any)=>(

<button

key={item[2]}

onClick={()=>window.location.href=item[2]}

style={{

width:"100%",
padding:"15px",
marginBottom:"10px",
border:"none",
borderRadius:"12px",
background:"#132B4F",
color:"white",
cursor:"pointer",
textAlign:"right",
fontSize:"16px"

}}

>

{item[0]} {item[1]}

</button>

))

}

</div>



</aside>

)

}