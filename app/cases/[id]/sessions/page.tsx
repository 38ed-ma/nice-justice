"use client"

import { useEffect, useState } from "react"
import Sidebar from "../../../components/Sidebar"


export default function Sessions(){


const [caseId,setCaseId] = useState("")

const [sessions,setSessions] = useState<any[]>([])


const [date,setDate] = useState("")

const [judge,setJudge] = useState("")

const [notes,setNotes] = useState("")




useEffect(()=>{


const id =
window.location.pathname.split("/")[2]


setCaseId(id)



const saved =
localStorage.getItem("sessions")



if(saved){


const all =
JSON.parse(saved)


const current =
all.filter(
(item:any)=>item.caseId === id
)



setSessions(current)


}


},[])







function addSession(){


if(!date || !judge || !notes){

alert("عبي جميع البيانات")

return

}



const newSession = {


id:Date.now(),


caseId,


date,


judge,


notes


}



const updated = [

...sessions,

newSession

]



setSessions(updated)



const allSaved =
localStorage.getItem("sessions")



let all = []


if(allSaved){

all =
JSON.parse(allSaved)

}



localStorage.setItem(

"sessions",

JSON.stringify(
[
...all,
newSession
]
)

)



setDate("")

setJudge("")

setNotes("")


alert("تم إضافة الجلسة")


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
📝 محاضر الجلسات
</h1>



<h2>
القضية: {caseId}
</h2>




<hr/>





<h3>
إضافة جلسة جديدة
</h3>




<input

placeholder="تاريخ الجلسة"

type="date"

value={date}

onChange={(e)=>setDate(e.target.value)}

 />



<br/><br/>




<input

placeholder="اسم القاضي"

value={judge}

onChange={(e)=>setJudge(e.target.value)}

 />



<br/><br/>




<textarea

placeholder="ملاحظات الجلسة"

rows={6}

value={notes}

onChange={(e)=>setNotes(e.target.value)}

 />



<br/><br/>




<button onClick={addSession}>

➕ إضافة محضر

</button>




<hr/>





<h2>
سجل الجلسات
</h2>




{

sessions.map((item)=>(


<div

key={item.id}

style={{

border:"1px solid #ccc",

padding:"15px",

margin:"10px",

borderRadius:"10px"

}}

>


<p>
📅 التاريخ: {item.date}
</p>


<p>
⚖️ القاضي: {item.judge}
</p>


<p>
📝 المحضر:
<br/>
{item.notes}
</p>


</div>


))


}



</main>


</>


)

}