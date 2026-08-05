"use client"

import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"


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




const newCases =
cases.filter(
(item)=>item.status==="جديدة"
).length



const reviewing =
cases.filter(
(item)=>item.status==="قيد المراجعة"
).length



const closed =
cases.filter(
(item)=>item.status==="مغلقة"
).length




return(

<>


<Sidebar />


<main

style={{

marginRight:"280px",

padding:"40px",

direction:"rtl",

textAlign:"center",

fontFamily:"Arial"

}}

>


<h1>
⚖️ نظام العدل الإلكتروني
</h1>


<h2>
لوحة التحكم
</h2>



<div

style={{

background:"#eee",

padding:"20px",

borderRadius:"15px"

}}

>


<h3>
👤 {user?.username}
</h3>


<p>
الصلاحية: {user?.role}
</p>



</div>




<br/>



<div

style={{

display:"grid",

gridTemplateColumns:"repeat(2,1fr)",

gap:"20px"

}}

>


<div style={card}>

<h2>
📁
</h2>

<h3>
إجمالي القضايا
</h3>

<h1>
{cases.length}
</h1>

</div>





<div style={card}>

<h2>
🆕
</h2>

<h3>
قضايا جديدة
</h3>

<h1>
{newCases}
</h1>

</div>





<div style={card}>

<h2>
🕒
</h2>

<h3>
قيد المراجعة
</h3>

<h1>
{reviewing}
</h1>

</div>





<div style={card}>

<h2>
✅
</h2>

<h3>
القضايا المغلقة
</h3>

<h1>
{closed}
</h1>

</div>



</div>




<br/><br/>



<button

style={{

padding:"15px 30px",

fontSize:"18px"

}}

onClick={()=>{

window.location.href="/cases"

}}

>

📁 الدخول للقضايا

</button>



</main>


</>


)


}




const card={

padding:"25px",

border:"1px solid #ccc",

borderRadius:"15px"

}