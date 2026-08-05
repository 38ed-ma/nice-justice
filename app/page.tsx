"use client"

import { useEffect, useState } from "react"


export default function Home(){

const [role,setRole] = useState("")


useEffect(()=>{

const user = localStorage.getItem("role")

if(user){
setRole(user)
}

},[])



return(

<main>

<h1>
لوحة التحكم
</h1>


<h2>
مرحباً بك 👋 {role}
</h2>



<div className="dashboard">


<div className="card">

<h2>📁</h2>
<h3>القضايا</h3>
<p>0</p>

</div>



<div className="card">

<h2>⚖️</h2>
<h3>الجلسات</h3>
<p>
{
role === "قاضي" ? "متاحة" : "مغلقة"
}
</p>

</div>



{
role === "مسؤول" &&

<div className="card">

<h2>👥</h2>
<h3>إدارة المستخدمين</h3>
<p>
متاحة
</p>

</div>

}



</div>


</main>

)

}