"use client"

import { useEffect, useState } from "react"


export default function Cases(){


const [cases,setCases] = useState<any[]>([])

const [search,setSearch] = useState("")


useEffect(()=>{

const savedCases = localStorage.getItem("cases")

if(savedCases){

setCases(JSON.parse(savedCases))

}

},[])



function deleteCase(id:string){

const updated = cases.filter((item)=>item.id !== id)

setCases(updated)

localStorage.setItem(
"cases",
JSON.stringify(updated)
)

}



return(

<main>


<h1>
📁 سجل القضايا
</h1>


<input

placeholder="🔍 البحث عن قضية"

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


<br/><br/>


<table>


<thead>

<tr>

<th>
رقم القضية
</th>


<th>
المدعي
</th>


<th>
المدعى عليه
</th>


<th>
القاضي
</th>


<th>
الحالة
</th>


<th>
إجراء
</th>


</tr>

</thead>



<tbody>


{

cases
.filter((item)=>

item.id.includes(search)

)

.map((item)=>(


<tr key={item.id}>


<td>
{item.id}
</td>


<td>
{item.plaintiff}
</td>


<td>
{item.defendant}
</td>


<td>
{item.judge}
</td>


<td>
{item.status}
</td>


<td>

<button
onClick={()=>deleteCase(item.id)}
>

🗑 حذف

</button>


</td>


</tr>


))


}



</tbody>


</table>


</main>

)

}