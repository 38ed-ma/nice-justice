"use client"

import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"


export default function Dashboard(){


const [cases,setCases] = useState<any[]>([])
const [users,setUsers] = useState<any[]>([])
const [user,setUser] = useState<any>(null)



useEffect(()=>{


const savedUser =
localStorage.getItem("user")


if(savedUser){

setUser(JSON.parse(savedUser))

}



const savedCases =
localStorage.getItem("cases")


if(savedCases){

setCases(JSON.parse(savedCases))

}



const savedUsers =
localStorage.getItem("users")


if(savedUsers){

setUsers(JSON.parse(savedUsers))

}



},[])





return(

<>

<Sidebar />


<main

style={{

marginRight:"260px",

padding:"30px",

direction:"rtl",

background:"#E8DCC0",

minHeight:"100vh"

}}

>



<div

style={{

background:"#0B1F3A",

color:"white",

padding:"25px",

borderRadius:"20px",

boxShadow:"0 10px 25px #999"

}}

>


<h1>

⚖️ وزارة العدل

</h1>


<p>

Minister Of Justice

</p>



<div

style={{

marginTop:"15px",

background:"rgba(255,255,255,.1)",

padding:"15px",

borderRadius:"15px"

}}

>


وزير العدل

<h2>

عقيد ( خالد ايلفن )

</h2>


</div>



</div>






<section

style={{

display:"grid",

gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",

gap:"20px",

marginTop:"30px"

}}

>



<Card
icon="📁"
number={cases.length}
title="القضايا"
/>



<Card
icon="⚖️"
number="0"
title="الأحكام"
/>



<Card
icon="👥"
number={users.length}
title="المستخدمون"
/>



<Card
icon="📅"
number="0"
title="الجلسات"
/>



</section>






<section

style={{

background:"white",

marginTop:"30px",

padding:"25px",

borderRadius:"20px",

boxShadow:"0 5px 15px #aaa"

}}

>



<h2>

📂 آخر القضايا

</h2>




<table

style={{

width:"100%",

borderCollapse:"collapse"

}}

>


<thead>

<tr>

<th>رقم القضية</th>

<th>المدعي</th>

<th>المدعى عليه</th>

<th>الحالة</th>

<th>القاضي</th>

</tr>

</thead>



<tbody>


{

cases.slice(0,5).map((item)=>(


<tr key={item.id}>


<td>{item.id}</td>

<td>{item.plaintiff}</td>

<td>{item.defendant}</td>

<td>{item.status}</td>

<td>{item.judge}</td>


</tr>


))


}



</tbody>



</table>


</section>





</main>


</>

)


}






function Card({

icon,

number,

title

}:{

icon:string,

number:any,

title:string

}){


return(

<div

style={{

background:"white",

padding:"25px",

borderRadius:"20px",

textAlign:"center",

boxShadow:"0 5px 15px rgba(0,0,0,.15)"

}}

>


<div

style={{

fontSize:"35px"

}}

>

{icon}

</div>


<h2

style={{

fontSize:"35px",

color:"#0B1F3A"

}}

>

{number}

</h2>


<p>

{title}

</p>


</div>

)


}