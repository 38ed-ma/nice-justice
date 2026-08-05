"use client"

import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"

alert("وصلت صفحة القضايا")

const [cases,setCases] = useState<any[]>([])
const [showForm,setShowForm] = useState(false)
const [search,setSearch] = useState("")

const [plaintiff,setPlaintiff] = useState("")
const [defendant,setDefendant] = useState("")
const [judge,setJudge] = useState("")
const [type,setType] = useState("")

const [user,setUser] = useState<any>(null)



useEffect(()=>{

const savedUser = localStorage.getItem("user")

if(savedUser){
setUser(JSON.parse(savedUser))
}


const savedCases = localStorage.getItem("cases")

if(savedCases){

const allCases = JSON.parse(savedCases)

const currentUser = JSON.parse(savedUser || "{}")


if(currentUser.role === "قاضي"){

setCases(
allCases.filter(
(item:any)=>item.judge === currentUser.username
)
)

}

else if(currentUser.role === "محامي"){

setCases(
allCases.filter(
(item:any)=>item.lawyer === currentUser.username
)
)

}

else{

setCases(allCases)

}

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


const saved = localStorage.getItem("cases")

const all = saved ? JSON.parse(saved) : []


const updated=[...all,newCase]


localStorage.setItem(
"cases",
JSON.stringify(updated)
)


setCases(updated)

setShowForm(false)

setPlaintiff("")
setDefendant("")
setJudge("")
setType("")


}




function deleteCase(id:string){

const saved = localStorage.getItem("cases")

if(saved){

const all = JSON.parse(saved)

const updated = all.filter(
(item:any)=>item.id !== id
)


localStorage.setItem(
"cases",
JSON.stringify(updated)
)


setCases(updated)

}

}




return(

<>

<Sidebar />


<main

style={{

marginRight:"280px",

padding:"40px",

direction:"rtl",

background:"#f5f5f5",

minHeight:"100vh"

}}

>


<h1 style={{
textAlign:"center",
color:"#0b1f3a"
}}>
⚖️ نظام القضايا
</h1>



{

(user?.role === "وزير العدل" ||
user?.role === "موظف")

&&

<button

style={{

background:"#0b1f3a",

color:"white",

padding:"12px 25px",

border:"none",

borderRadius:"10px",

cursor:"pointer"

}}

onClick={()=>setShowForm(!showForm)}

>

➕ قضية جديدة

</button>

}




{

showForm &&


<div

style={{

background:"white",

padding:"25px",

margin:"20px auto",

borderRadius:"15px",

maxWidth:"500px",

boxShadow:"0 0 10px #ccc"

}}

>


<h2>
تسجيل قضية
</h2>



<input

style={inputStyle}

placeholder="اسم المدعي"

value={plaintiff}

onChange={(e)=>setPlaintiff(e.target.value)}

/>



<input

style={inputStyle}

placeholder="اسم المدعى عليه"

value={defendant}

onChange={(e)=>setDefendant(e.target.value)}

/>



<input

style={inputStyle}

placeholder="نوع القضية"

value={type}

onChange={(e)=>setType(e.target.value)}

/>



<input

style={inputStyle}

placeholder="القاضي المسؤول"

value={judge}

onChange={(e)=>setJudge(e.target.value)}

/>



<button

style={saveButton}

onClick={addCase}

>

💾 حفظ القضية

</button>


</div>


}





<div style={{marginTop:"30px"}}>


<input

style={searchStyle}

placeholder="🔍 البحث برقم القضية"

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


</div>





<table

style={tableStyle}

>


<thead>

<tr>

<th>رقم القضية</th>

<th>المدعي</th>

<th>المدعى عليه</th>

<th>القاضي</th>

<th>الحالة</th>

<th>الإجراء</th>

</tr>

</thead>




<tbody>


{

cases

.filter(
(item)=>
item.id.includes(search)
)

.map((item)=>(


<tr key={item.id}>


<td>

<button

onClick={()=>{

window.location.href=`/cases/${item.id}`

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


{

user?.role === "وزير العدل"

&&


<button

onClick={()=>deleteCase(item.id)}

>

🗑 حذف

</button>

}


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



const inputStyle={

display:"block",

width:"90%",

padding:"12px",

margin:"15px auto",

borderRadius:"8px",

border:"1px solid #ccc"

}


const saveButton={

background:"#d4af37",

padding:"12px 30px",

border:"none",

borderRadius:"10px",

cursor:"pointer"

}


const searchStyle={

width:"80%",

padding:"12px",

borderRadius:"10px",

border:"1px solid #ccc"

}


const tableStyle={

width:"100%",

marginTop:"20px",

background:"white",

borderCollapse:"collapse" as const

}