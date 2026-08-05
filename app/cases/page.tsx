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



const allCases =
JSON.parse(savedCases)





if(
JSON.parse(savedUser || "{}").role
===
"قاضي"
){


setCases(

allCases.filter(
(item:any)=>
item.judge === JSON.parse(savedUser || "{}").username
)

)


}

else if(

JSON.parse(savedUser || "{}").role
===
"محامي"

){



setCases(

allCases.filter(
(item:any)=>
item.lawyer === JSON.parse(savedUser || "{}").username
)

)


}



else{


setCases(allCases)


}





}



},[])









function addCase(){



if(
!plaintiff ||
!defendant ||
!type ||
!judge
){


alert("الرجاء تعبئة جميع البيانات")

return

}




const newCase={



id:

`NC-2026-${String(cases.length+1).padStart(4,"0")}`,



plaintiff,


defendant,


type,


judge,



status:"جديدة",


createdAt:

new Date().toLocaleDateString("ar-SA")



}





const saved =
localStorage.getItem("cases")



const all =
saved
?
JSON.parse(saved)
:
[]




const updated=[

...all,

newCase

]





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



const saved =
localStorage.getItem("cases")



if(saved){



const all =
JSON.parse(saved)



const updated =

all.filter(
(item:any)=>item.id !== id
)



localStorage.setItem(

"cases",

JSON.stringify(updated)

)



setCases(

updated

)



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

textAlign:"center"

}}

>




<h1>
📁 نظام القضايا
</h1>




{

(user?.role === "وزير العدل" ||
user?.role === "موظف")

&&



<button

onClick={()=>setShowForm(!showForm)}

>

➕ قضية جديدة

</button>


}






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

💾 حفظ

</button>



</div>



}







<hr/>





<input

placeholder="🔍 بحث"

value={search}

onChange={(e)=>setSearch(e.target.value)}

 />








<table

border={1}

width="100%"

>


<thead>

<tr>

<th>القضية</th>

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

.filter(

(item)=>

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