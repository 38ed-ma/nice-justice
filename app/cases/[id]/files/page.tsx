"use client"

import { useEffect, useState } from "react"
import Sidebar from "../../../components/Sidebar"


export default function CaseFile(){


const [data,setData] = useState<any>(null)

const [sessions,setSessions] = useState<any[]>([])

const [files,setFiles] = useState<any[]>([])




useEffect(()=>{


const id =
window.location.pathname.split("/")[2]




// القضايا

const savedCases =
localStorage.getItem("cases")


if(savedCases){


const cases =
JSON.parse(savedCases)


const found =
cases.find(
(item:any)=>item.id === id
)


setData(found)


}




// الجلسات

const savedSessions =
localStorage.getItem("sessions")


if(savedSessions){


const all =
JSON.parse(savedSessions)


setSessions(

all.filter(
(item:any)=>item.caseId === id
)

)


}




// المرفقات

const savedFiles =
localStorage.getItem("files")


if(savedFiles){


const all =
JSON.parse(savedFiles)


setFiles(

all.filter(
(item:any)=>item.caseId === id
)

)


}



},[])






if(!data){

return <h1>جاري تحميل الملف...</h1>

}





return(

<>


<Sidebar />



<main

style={{

marginRight:"280px",

padding:"40px",

direction:"rtl"

}}

>



<h1>
📁 ملف القضية
</h1>



<h2>
{data.id}
</h2>




<hr/>




<h2>
بيانات القضية
</h2>



<p>
👤 المدعي: {data.plaintiff}
</p>


<p>
👤 المدعى عليه: {data.defendant}
</p>


<p>
⚖️ القاضي: {data.judge}
</p>


<p>
📌 النوع: {data.type}
</p>


<p>
📍 الحالة: {data.status}
</p>





<hr/>





<h2>
⚖️ الحكم
</h2>



<p>
{data.judgment || "لم يصدر حكم"}
</p>



<p>

رقم الصك:

{data.deedNumber || "غير موجود"}

</p>





<hr/>





<h2>
📝 الجلسات
</h2>




{

sessions.length === 0 &&

<p>
لا توجد جلسات
</p>

}





{

sessions.map((item)=>(


<div

key={item.id}

style={box}

>


📅 {item.date}

<br/>

⚖️ {item.judge}

<br/>

📝 {item.notes}


</div>


))


}






<hr/>





<h2>
📎 المرفقات
</h2>




{

files.length === 0 &&

<p>
لا توجد ملفات
</p>

}





{

files.map((item)=>(


<div

key={item.id}

style={box}

>


📄 {item.name}


<br/>


<a

href={item.data}

download={item.name}

>

فتح الملف

</a>


</div>


))


}






</main>


</>

)

}




const box={

border:"1px solid #ccc",

padding:"15px",

margin:"10px",

borderRadius:"10px"

}