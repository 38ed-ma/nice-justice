"use client"

import { useEffect, useState } from "react"


export default function Sidebar(){


const [user,setUser] = useState<any>(null)

const [open,setOpen] = useState(false)

const [count,setCount] = useState(0)



useEffect(()=>{


const savedUser =
localStorage.getItem("user")


if(savedUser){

setUser(JSON.parse(savedUser))

}




const savedNotifications =
localStorage.getItem("notifications")



if(savedNotifications){

setCount(
JSON.parse(savedNotifications).length
)

}



},[])







return(

<>


<button

onClick={()=>setOpen(!open)}

style={{

position:"fixed",

top:"20px",

right:"20px",

zIndex:2000,

fontSize:"25px",

padding:"10px",

borderRadius:"10px"

}}

>

☰

</button>






<aside

style={{

position:"fixed",

top:0,

right:open ? 0 : "-300px",

width:"250px",

height:"100vh",

background:"#111827",

color:"white",

padding:"20px",

transition:"0.3s",

zIndex:1500,

direction:"rtl"

}}

>



<h2>
⚖️ العدل الإلكتروني
</h2>



<hr/>




<p>
👤 {user?.username}
</p>


<p>
الصلاحية:
<br/>
{user?.role}
</p>



<hr/>





<button style={btn}

onClick={()=>window.location.href="/dashboard"}

>

🏠 الرئيسية

</button>






<button style={btn}

onClick={()=>window.location.href="/cases"}

>

📁 القضايا

</button>






<button style={btn}

onClick={()=>window.location.href="/archive"}

>

📚 أرشيف الأحكام

</button>






<button style={btn}

onClick={()=>window.location.href="/calendar"}

>

📅 مواعيد الجلسات

</button>







<button style={btn}

onClick={()=>window.location.href="/notifications"}

>

🔔 الإشعارات ({count})

</button>






<button style={btn}

onClick={()=>window.location.href="/users"}

>

👥 المستخدمين

</button>






<button style={btn}

onClick={()=>window.location.href="/login"}

>

🔐 تسجيل الدخول

</button>





</aside>



</>

)

}





const btn={

width:"100%",

padding:"12px",

marginTop:"10px",

background:"#1f2937",

color:"white",

border:"none",

borderRadius:"8px",

cursor:"pointer"

}