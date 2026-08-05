"use client"

import { useEffect, useState } from "react"
import Sidebar from "../../../components/Sidebar"


export default function Files(){


const [caseId,setCaseId] = useState("")

const [files,setFiles] = useState<any[]>([])

const [file,setFile] = useState<File | null>(null)





useEffect(()=>{


const id =
window.location.pathname.split("/")[2]


setCaseId(id)



const saved =
localStorage.getItem("files")



if(saved){

const all =
JSON.parse(saved)


setFiles(

all.filter(
(item:any)=>item.caseId === id
)

)

}



},[])







function uploadFile(){


if(!file){

alert("اختر ملف")

return

}



const reader =
new FileReader()



reader.onload = ()=>{



const newFile = {


id:Date.now(),

caseId,

name:file.name,

type:file.type,

data:reader.result,

date:new Date().toLocaleDateString("ar-SA")

}




const allSaved =
localStorage.getItem("files")



const all =
allSaved
?
JSON.parse(allSaved)
:
[]



const updated=[

...all,

newFile

]



localStorage.setItem(

"files",

JSON.stringify(updated)

)



setFiles(

updated.filter(
(item:any)=>item.caseId===caseId
)

)



setFile(null)


alert("تم رفع الملف")

}



reader.readAsDataURL(file)


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
📎 مرفقات القضية
</h1>


<h2>
{caseId}
</h2>


<hr/>




<input

type="file"

onChange={(e)=>

setFile(
e.target.files?.[0] || null
)

}

/>




<br/><br/>




<button onClick={uploadFile}>

📤 رفع الملف

</button>






<hr/>




<h2>
الملفات المرفوعة
</h2>






{

files.map((item)=>(


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
📄 {item.name}
</p>


<p>
📅 {item.date}
</p>



<a

href={item.data}

download={item.name}

>

⬇️ فتح / تحميل

</a>



</div>


))


}



</main>


</>

)

}