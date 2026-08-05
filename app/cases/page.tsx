"use client"

import { useEffect, useState } from "react"


export default function Cases(){

const user = JSON.parse(localStorage.getItem("user") || "null")


const [cases,setCases] = useState<any[]>([])

const [showForm,setShowForm] = useState(false)

const [search,setSearch] = useState("")


const [plaintiff,setPlaintiff] = useState("")
const [defendant,setDefendant] = useState("")
const [judge,setJudge] = useState("")
const [type,setType] = useState("")



useEffect(()=>{

const saved = localStorage.getItem("cases")

if(saved){

setCases(JSON.parse(saved))

}

},[])




function addCase(){

if(!plaintiff || !defendant || !type || !judge){
alert("الرجاء تعبئة جميع البيانات")
return
}

const newCase = {

id:`NC-2026-${String(cases.length+1).padStart(4,"0")}`,

plaintiff,

defendant,

type,

judge,

status:"جديدة",

createdAt:new Date().toLocaleDateString("ar-SA")

}


const updated=[...cases,newCase]


setCases(updated)


localStorage.setItem(
"cases",
JSON.stringify(updated)
)


setShowForm(false)


setPlaintiff("")
setDefendant("")
setJudge("")
setType("")


}





function deleteCase(id:string){

const updated =
cases.filter((item)=>item.id !== id)


setCases(updated)


localStorage.setItem(
"cases",
JSON.stringify(updated)
)

}


if(!user){

window.location.href="/login"

return null

}


return(

<main>


<h1>
📁 نظام القضايا
</h1>



<button onClick={()=>setShowForm(!showForm)}>

➕ قضية جديدة

</button>




{
showForm &&

<div className="card">


<h2>
تسجيل قضية
</h2>


<input
placeholder="اسم المدعي"
value={plaintiff}
onChange={(e)=>setPlaintiff(e.target.value)}
/>


<input
placeholder="اسم المدعى عليه"
value={defendant}
onChange={(e)=>setDefendant(e.target.value)}
/>



<input
placeholder="نوع القضية"
value={type}
onChange={(e)=>setType(e.target.value)}
/>



<input
placeholder="القاضي المسؤول"
value={judge}
onChange={(e)=>setJudge(e.target.value)}
/>



<button onClick={addCase}>
حفظ القضية
</button>


</div>

}




<br/>


<input

placeholder="🔍 بحث برقم القضية"

value={search}

onChange={(e)=>setSearch(e.target.value)}

 />





<table>


<thead>

<tr>

<th>رقم القضية</th>

<th>المدعي</th>

<th>المدعى عليه</th>

<th>القاضي</th>

<th>الحالة</th>

<th>إجراء</th>


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
  <button
    onClick={() => {
      window.location.href = `/cases/${item.id}`
    }}
  >
    {item.id}
  </button>
</td>

<td>{item.plaintiff}</td>

<td>{item.defendant}</td>

<td>{item.judge}</td>

<td>{item.status}</td>


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