"use client"

import { useEffect, useState } from "react"


export default function Dashboard(){


const [cases,setCases] = useState<any[]>([])

const [user,setUser] = useState<any>(null)



useEffect(()=>{


const savedUser = localStorage.getItem("user")


if(savedUser){

setUser(JSON.parse(savedUser))

}else{

window.location.href="/login"

}



const savedCases = localStorage.getItem("cases")


if(savedCases){

setCases(JSON.parse(savedCases))

}


},[])



function logout(){

localStorage.removeItem("user")

window.location.href="/login"

}



const newCases =
cases.filter(
(item)=>item.status === "جديدة"
).length



const reviewing =
cases.filter(
(item)=>item.status === "قيد المراجعة"
).length



const closed =
cases.filter(
(item)=>item.status === "مغلقة"
).length




return(


<main

style={{

padding:"40px",

direction:"rtl",

textAlign:"center"

}}

>


<h1>
⚖️ لوحة تحكم وزارة العدل
</h1>



<h2>
مرحباً {user?.username}
</h2>


<p>
الصلاحية: {user?.role}
</p>



<button onClick={logout}>

🚪 تسجيل خروج

</button>



<hr/>




<h2>
📁 إجمالي القضايا
</h2>

<h1>
{cases.length}
</h1>



<hr/>




<h2>
🆕 قضايا جديدة
</h2>

<h1>
{newCases}
</h1>




<hr/>




<h2>
🕒 قضايا قيد المراجعة
</h2>

<h1>
{reviewing}
</h1>




<hr/>




<h2>
✅ قضايا مغلقة
</h2>

<h1>
{closed}
</h1>




<br/><br/>




<button

onClick={()=>{

window.location.href="/cases"

}}

>

📁 إدارة القضايا

</button>



</main>


)


}