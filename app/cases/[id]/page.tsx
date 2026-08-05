"use client"

import { useEffect, useState } from "react"
import Sidebar from "../../components/Sidebar"
import Auth from "../../components/Auth"


export default function CaseDetails(){


const [caseData,setCaseData] = useState<any>(null)

const [user,setUser] = useState<any>(null)

const [status,setStatus] = useState("")

const [notes,setNotes] = useState("")

const [judgment,setJudgment] = useState("")

const [judgeName,setJudgeName] = useState("")

const [signature,setSignature] = useState("")




const canEdit =
user?.role === "وزير العدل" ||
user?.role === "قاضي"






useEffect(()=>{


const savedUser =
localStorage.getItem("user")


if(savedUser){

setUser(JSON.parse(savedUser))

}





const id =
window.location.pathname.split("/")[2]



const saved =
localStorage.getItem("cases")



if(saved){


const allCases =
JSON.parse(saved)



const found =
allCases.find(
(item:any)=>item.id === id
)



setCaseData(found)

setStatus(found?.status || "")

setNotes(found?.notes || "")

setJudgment(found?.judgment || "")

setJudgeName(found?.judgeName || "")

setSignature(found?.signature || "")



}



},[])









function saveChanges(){



const saved =
localStorage.getItem("cases")



if(saved){



const allCases =
JSON.parse(saved)




const updated =
allCases.map((item:any)=>{


if(item.id === caseData.id){


return{

...item,

status,

notes,

judgment,

judgeName,

signature,


deedNumber:

item.deedNumber ||

`DEED-2026-${String(Date.now()).slice(-6)}`,



judgmentDate:

new Date().toLocaleDateString("ar-SA")



}



}


return item


})






localStorage.setItem(

"cases",

JSON.stringify(updated)

)






// 🔔 إشعار الحكم


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

title:"⚖️ صدر حكم جديد",

message:`تم إصدار حكم في القضية رقم ${caseData.id}`,

date:new Date().toLocaleDateString("ar-SA")

})




localStorage.setItem(

"notifications",

JSON.stringify(notifications)

)






alert("تم حفظ الحكم")



}



}








function printJudgment(){


window.location.href =
`/cases/${caseData.id}/print`


}







if(!caseData){

return <h1>جاري تحميل القضية...</h1>

}








return(

<Auth roles={[
"وزير العدل",
"قاضي",
"محامي"
]}>



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
⚖️ إدارة القضية
</h1>




<h2>
{caseData.id}
</h2>



<hr/>




<p>
المدعي: {caseData.plaintiff}
</p>


<p>
المدعى عليه: {caseData.defendant}
</p>


<p>
نوع القضية: {caseData.type}
</p>



<p>
القاضي: {caseData.judge}
</p>




<hr/>




<h3>
حالة القضية
</h3>




<select

value={status}

disabled={!canEdit}

onChange={(e)=>setStatus(e.target.value)}

>


<option>
جديدة
</option>


<option>
قيد المراجعة
</option>


<option>
منظورة
</option>


<option>
صدر الحكم
</option>


<option>
مغلقة
</option>



</select>





<hr/>




<h3>
📝 ملاحظات القاضي
</h3>



<textarea

rows={5}

disabled={!canEdit}

value={notes}

onChange={(e)=>setNotes(e.target.value)}

 />





<hr/>




<h3>
⚖️ الحكم
</h3>




<textarea

rows={8}

disabled={!canEdit}

value={judgment}

onChange={(e)=>setJudgment(e.target.value)}

 />




<br/><br/>




<input

disabled={!canEdit}

placeholder="اسم القاضي"

value={judgeName}

onChange={(e)=>setJudgeName(e.target.value)}

 />





<br/><br/>




<input

disabled={!canEdit}

placeholder="توقيع القاضي"

value={signature}

onChange={(e)=>setSignature(e.target.value)}

 />





<br/><br/>





{

canEdit &&


<button onClick={saveChanges}>

💾 حفظ الحكم

</button>


}





<br/><br/>





<button onClick={printJudgment}>

🖨️ طباعة الصك

</button>






</main>



</>



</Auth>


)


}