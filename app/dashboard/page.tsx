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

padding:"40px",

direction:"rtl",

textAlign:"center"

}}

>


<h1>
⚖️ لوحة تحكم وزارة العدل
</h1>



<hr/>





<div

style={{

display:"grid",

gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",

gap:"20px"

}}

>




<Card

title="📁 إجمالي القضايا"

value={cases.length}

/>



<Card

title="🆕 قضايا جديدة"

value={newCases}

/>



<Card

title="🔒 قضايا مغلقة"

value={closedCases}

/>



<Card

title="⚖️ أحكام صادرة"

value={judgments}

/>



<Card

title="👨‍⚖️ القضاة"

value={judges}

/>



<Card

title="👨‍💼 المحامين"

value={lawyers}

/>



</div>



</main>


</>

)

}







function Card({title,value}:any){


return(

<div

style={{

border:"1px solid #ccc",

padding:"25px",

borderRadius:"15px",

fontSize:"20px"

}}

>


<h3>

{title}

</h3>



<h1>

{value}

</h1>



</div>

)

}