"use client"

import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"


export default function Archive(){


const [cases,setCases] = useState<any[]>([])



useEffect(()=>{


const saved =
localStorage.getItem("cases")


if(saved){

const allCases =
JSON.parse(saved)


const judgments =
allCases.filter(
(item:any)=>
item.judgment
)


setCases(judgments)


}


},[])






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
📚 أرشيف الأحكام
</h1>


<hr/>




<table

border={1}

width="100%"

>


<thead>

<tr>

<th>
رقم الصك
</th>


<th>
رقم القضية
</th>


<th>
القاضي
</th>


<th>
تاريخ الحكم
</th>


<th>
إجراء
</th>


</tr>

</thead>




<tbody>


{

cases.map((item)=>(


<tr key={item.id}>


<td>

{item.deedNumber || "غير صادر"}

</td>



<td>

{item.id}

</td>




<td>

{item.judgeName || item.judge}

</td>




<td>

{item.judgmentDate}

</td>




<td>


<button

onClick={()=>{

window.location.href =
`/cases/${item.id}/print`

}}

>

🖨️ فتح الصك

</button>



</td>




</tr>


))


}



</tbody>



</table>




</main>


</>


)

}