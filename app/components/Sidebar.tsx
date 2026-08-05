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




function logout(){

localStorage.removeItem("user")

window.location.href="/login"

}



return(

<aside

style={{

width:"250px",

height:"100vh",

background:"#111827",

color:"white",

padding:"20px",

position:"fixed",

right:0,

top:0,

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



<button

onClick={()=>window.location.href="/dashboard"}

style={btn}

>

🏠 الرئيسية

</button>



<button

onClick={()=>window.location.href="/cases"}

style={btn}

>

📁 القضايا

</button>



<button

onClick={()=>window.location.href="/cases"}

style={btn}

>

⚖️ الأحكام

</button>



<button

onClick={()=>window.location.href="/users"}

style={btn}

>

👥 المستخدمين

</button>



<button

onClick={logout}

style={btn}

>

🚪 تسجيل خروج

</button>



</aside>

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