"use client"

import { useEffect, useState } from "react"


export default function Sidebar(){

const [user,setUser] = useState<any>(null)

const [notifications,setNotifications] = useState(0)



useEffect(()=>{

const savedUser =
localStorage.getItem("user")


if(savedUser){

setUser(JSON.parse(savedUser))

}


const savedNotifications =
localStorage.getItem("notifications")


if(savedNotifications){

setNotifications(
JSON.parse(savedNotifications).length
)

}


},[])




const menu=[

{
icon:"🏠",
title:"الرئيسية",
link:"/dashboard"
},

{
icon:"⚖️",
title:"القضايا",
link:"/cases"
},

{
icon:"📜",
title:"الأحكام",
link:"/archive"
},

{
icon:"📅",
title:"الجلسات",
link:"/calendar"
},

{
icon:"👥",
title:"المستخدمون",
link:"/users"
},

{
icon:"🔔",
title:`الإشعارات (${notifications})`,
link:"/notifications"
},

{
icon:"👤",
title:"الملف الشخصي",
link:"/profile"
},

{
icon:"🔐",
title:"تسجيل الدخول",
link:"/login"
}

]



return(

<aside

style={{

position:"fixed",

right:0,

top:0,

width:"260px",

height:"100vh",

background:
"linear-gradient(180deg,#0B1F3A,#071426)",

color:"white",

display:"flex",

flexDirection:"column",

boxShadow:"-10px 0 30px rgba(0,0,0,.35)",

zIndex:999

}}

>




<div

style={{

padding:"25px 15px",

textAlign:"center",

borderBottom:
"1px solid rgba(255,255,255,.15)"

}}

>


<div

style={{

fontSize:"35px"

}}

>

⚖️

</div>



<h1

style={{

margin:"5px 0",

fontSize:"24px",

color:"#D4AF37"

}}

>

وزارة العدل

</h1>


<p

style={{

margin:0,

color:"#E8DCC0"

}}

>

Minister Of Justice

</p>




<div

style={{

marginTop:"20px",

background:"rgba(212,175,55,.12)",

border:"1px solid #D4AF37",

borderRadius:"15px",

padding:"15px"

}}

>


<p

style={{

margin:0,

color:"#D4AF37"

}}

>

وزير العدل

</p>


<strong>

عقيد ( خالد ايلفن )

</strong>


</div>




<div

style={{

marginTop:"15px",

background:"rgba(255,255,255,.08)",

padding:"10px",

borderRadius:"10px"

}}

>

👤 {user?.username || "زائر"}

<br/>

<small>

{user?.role || "بدون صلاحية"}

</small>


</div>


</div>





<div

style={{

padding:"15px",

overflowY:"auto",

flex:1

}}

>



{

menu.map((item)=>(


<button

key={item.link}

onClick={()=>window.location.href=item.link}


style={{

width:"100%",

padding:"14px",

marginBottom:"10px",

borderRadius:"12px",

border:"none",

background:"#132B4F",

color:"white",

fontSize:"15px",

cursor:"pointer",

textAlign:"right"

}}



onMouseEnter={(e)=>{

e.currentTarget.style.background="#D4AF37"

e.currentTarget.style.color="#111"

}}


onMouseLeave={(e)=>{

e.currentTarget.style.background="#132B4F"

e.currentTarget.style.color="white"

}}



>


{item.icon}

&nbsp;

{item.title}


</button>


))


}


</div>





<footer

style={{

padding:"15px",

textAlign:"center",

fontSize:"12px",

color:"#E8DCC0",

borderTop:
"1px solid rgba(255,255,255,.1)"

}}

>

Ministry Of Justice © 2026

</footer>



</aside>


)


}