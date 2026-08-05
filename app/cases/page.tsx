"use client"

import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"



export default function Cases(){


const [cases,setCases] = useState<any[]>([])

const [showForm,setShowForm] = useState(false)

const [search,setSearch] = useState("")


const [plaintiff,setPlaintiff] = useState("")

const [defendant,setDefendant] = useState("")

const [judge,setJudge] = useState("")

const [type,setType] = useState("")





useEffect(()=>{


const saved =
localStorage.getItem("cases")


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






const updated=[

...cases,

newCase

]



setCases(updated)



localStorage.setItem(

"cases",

JSON.stringify(updated)

)





// 🔔 إنشاء إشعار

const oldNotifications =
localStorage.getItem("notifications")



const notifications =
oldNotifications
?
JSON.parse(oldNotifications)
:
[]




notifications.push({

id:Date.now(),

title:"📁 قضية جديدة",

message:`تم إنشاء القضية رقم ${newCase.id}`,

date:new Date().toLocaleDateString("ar-SA")

})




localStorage.setItem(

"notifications",

JSON.stringify(notifications)

)






setShowForm(false)

setPlaintiff("")

setDefendant("")

setJudge("")

setType("")



}









function deleteCase(id:string){



const updated =
cases.filter(
(item)=>item.id !== id
)




setCases(updated)



localStorage.setItem(

"cases",

JSON.stringify(updated)

)



}









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
📁 نظام القضايا
</h1>





<button

onClick={()=>setShowForm(!showForm)}

>

➕ قضية جديدة

</button>






{

showForm &&


<div>


<h2>
تسجيل قضية
</h2>



<input

placeholder="اسم المدعي"

value={plaintiff}

onChange={(e)=>setPlaintiff(e.target.value)}

 />

<br/><br/>



<input

placeholder="اسم المدعى عليه"

value={defendant}

onChange={(e)=>setDefendant(e.target.value)}

 />

<br/><br/>




<input

placeholder="نوع القضية"

value={type}

onChange={(e)=>setType(e.target.value)}

 />

<br/><br/>




<input

placeholder="القاضي المسؤول"

value={judge}

onChange={(e)=>setJudge(e.target.value)}

 />

<br/><br/>





<button onClick={addCase}>

💾 حفظ القضية

</button>




</div>


}






<hr/>





<input

placeholder="🔍 بحث برقم القضية"

value={search}

onChange={(e)=>setSearch(e.target.value)}

 />







<table

border={1}

width="100%"

>


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

onClick={()=>{

window.location.href=

`/cases/${item.id}`

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



</>

)

}