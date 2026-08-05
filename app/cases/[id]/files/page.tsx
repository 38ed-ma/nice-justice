"use client"

import { useEffect, useState } from "react"
import Sidebar from "../../../components/Sidebar"



export default function Files(){


const [caseId,setCaseId] = useState("")

const [files,setFiles] = useState<any[]>([])

const [name,setName] = useState("")





useEffect(()=>{


const id =
window.location.pathname.split("/")[2]


setCaseId(id)



const saved =
localStorage.getItem("files")



if(saved){


const all =
JSON.parse(saved)



const current =
all.filter(
(item:any)=>item.caseId === id
)



setFiles(current)


}



},[])









function addFile(){


if(!name){

alert("اكتب اسم الملف")

return

}





const newFile = {


id:Date.now(),

caseId,

name,

date:new Date().toLocaleDateString("ar-SA")

}





const updated = [

...files,

newFile

]



setFiles(updated)




const allSaved =
localStorage.getItem("files")



let all:any[] = []



if(allSaved){

all = JSON.parse(allSaved)

}



localStorage.setItem(

"files",

JSON.stringify(
[
...all,
newFile
]
)

)



setName("")



alert("تم إضافة المرفق")


}









function deleteFile(id:number){


const updated =
files.filter(
(item)=>item.id !== id
)



setFiles(updated)




const allSaved =
localStorage.getItem("files")



if(allSaved){


const all =
JSON.parse(allSaved)



const newAll =
all.filter(
(item:any)=>item.id !== id
)



localStorage.setItem(

"files",

JSON.stringify(newAll)

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
📎 مرفقات القضية
</h1>



<h2>
{caseId}
</h2>



<hr/>





<h3>
إضافة ملف
</h3>




<input

placeholder="اسم الملف"

value={name}

onChange={(e)=>setName(e.target.value)}

 />





<br/><br/>





<button onClick={addFile}>

➕ إضافة مرفق

</button>






<hr/>





<h2>
ملفات القضية
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




<button

onClick={()=>deleteFile(item.id)}

>

🗑 حذف

</button>



</div>


))


}





</main>


</>

)

}