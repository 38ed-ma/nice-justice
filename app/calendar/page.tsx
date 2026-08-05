"use client"

import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"


export default function Calendar(){


const [appointments,setAppointments] = useState<any[]>([])


const [caseId,setCaseId] = useState("")

const [date,setDate] = useState("")

const [time,setTime] = useState("")

const [judge,setJudge] = useState("")





useEffect(()=>{


const saved =
localStorage.getItem("appointments")


if(saved){

setAppointments(JSON.parse(saved))

}


},[])







function addAppointment(){


if(!caseId || !date || !time || !judge){

alert("اكمل البيانات")

return

}



const newAppointment = {

id:Date.now(),

caseId,

date,

time,

judge

}



const updated=[

...appointments,

newAppointment

]



setAppointments(updated)



localStorage.setItem(

"appointments",

JSON.stringify(updated)

)



setCaseId("")

setDate("")

setTime("")

setJudge("")


alert("تم إضافة الموعد")


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
📅 مواعيد الجلسات
</h1>



<hr/>




<h2>
إضافة موعد جديد
</h2>




<input

placeholder="رقم القضية"

value={caseId}

onChange={(e)=>setCaseId(e.target.value)}

 />



<br/><br/>




<input

type="date"

value={date}

onChange={(e)=>setDate(e.target.value)}

 />



<br/><br/>




<input

type="time"

value={time}

onChange={(e)=>setTime(e.target.value)}

 />



<br/><br/>




<input

placeholder="اسم القاضي"

value={judge}

onChange={(e)=>setJudge(e.target.value)}

 />



<br/><br/>




<button onClick={addAppointment}>

➕ إضافة موعد

</button>





<hr/>





<h2>
جدول الجلسات
</h2>





{

appointments.map((item)=>(


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
📁 القضية: {item.caseId}
</p>


<p>
📅 التاريخ: {item.date}
</p>


<p>
⏰ الوقت: {item.time}
</p>


<p>
⚖️ القاضي: {item.judge}
</p>



</div>


))


}



</main>


</>

)

}