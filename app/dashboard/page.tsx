"use client"

import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"


export default function Dashboard(){


const [cases,setCases] = useState<any[]>([])

const [users,setUsers] = useState<any[]>([])



useEffect(()=>{


const savedCases =
localStorage.getItem("cases")


const savedUsers =
localStorage.getItem("users")



if(savedCases){

setCases(JSON.parse(savedCases))

}



if(savedUsers){

setUsers(JSON.parse(savedUsers))

}



},[])





const totalCases =
cases.length



const newCases =
cases.filter(
(item)=>item.status === "جديدة"
).length




const closedCases =
cases.filter(
(item)=>item.status === "مغلقة"
).length




const judgments =
cases.filter(
(item)=>item.judgment
).length




const judges =
users.filter(
(item)=>item.role === "قاضي"
).length




const lawyers =
users.filter(
(item)=>item.role === "محامي"
).length






return(

<>


<Sidebar />



<main

style={{

marginRight:"280px",

padding:"30px",

direction:"rtl",

textAlign:"center"

}}

>


<h1>
⚖️ لوحة وزارة العدل
</h1>



<p>
إحصائيات النظام
</p>



<hr/>





<div

style={{

display:"grid",

gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",

gap:"15px"

}}

>




<Box

title="📁 إجمالي القضايا"

number={totalCases}

/>



<Box

title="🆕 القضايا الجديدة"

number={newCases}

/>



<Box

title="🔒 القضايا المغلقة"

number={closedCases}

/>



<Box

title="⚖️ الأحكام الصادرة"

number={judgments}

/>



<Box

title="👨‍⚖️ القضاة"

number={judges}

/>



<Box

title="👨‍💼 المحامين"

number={lawyers}

/>



</div>





<hr/>




<h2>
📊 حالة القضايا
</h2>




<div

style={{

width:"300px",

height:"20px",

background:"#ddd",

margin:"auto",

borderRadius:"20px",

overflow:"hidden"

}}

>


<div

style={{

width:
`${totalCases ? (closedCases/totalCases)*100 : 0}%`,

height:"100%",

background:"green"

}}

>


</div>


</div>



<p>

نسبة القضايا المغلقة

</p>






</main>


</>

)

}






function Box({title,number}:any){


return(

<div

style={{

border:"1px solid #ccc",

padding:"20px",

borderRadius:"15px"

}}

>


<h3>

{title}

</h3>


<h1>

{number}

</h1>


</div>

)

}