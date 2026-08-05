"use client"

import { useEffect, useState } from "react"
import Sidebar from "../../components/Sidebar"


export default function CaseDetails(){


const [caseData,setCaseData] = useState<any>(null)

const [user,setUser] = useState<any>(null)

const [status,setStatus] = useState("")
const [notes,setNotes] = useState("")

const [judgment,setJudgment] = useState("")
const [judgeName,setJudgeName] = useState("")


const canEdit =
user?.role === "وزير العدل" ||
user?.role === "قاضي"




useEffect(()=>{


const savedUser = localStorage.getItem("user")


if(savedUser){

setUser(JSON.parse(savedUser))

}



const id = window.location.pathname.split("/").pop()


const saved = localStorage.getItem("cases")


if(saved){


const allCases = JSON.parse(saved)


const found = allCases.find(
(item:any)=>item.id === id
)


setCaseData(found)

setStatus(found?.status || "")

setNotes(found?.notes || "")

setJudgment(found?.judgment || "")

setJudgeName(found?.judgeName || "")


}


},[])





function saveChanges(){


const saved = localStorage.getItem("cases")


if(saved){


const allCases = JSON.parse(saved)


const updated = allCases.map((item:any)=>{


if(item.id === caseData.id){


return {

...item,

status,

notes,

judgment,

judgeName,

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



alert("تم حفظ التعديلات")


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



<h3>
بيانات القضية
</h3>


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

disabled={!canEdit}

value={status}

onChange={(e)=>setStatus(e.target.value)}

>

<option>جديدة</option>

<option>قيد المراجعة</option>

<option>منظورة</option>

<option>صدر الحكم</option>

<option>مغلقة</option>


</select>




<hr/>




<h3>
📝 ملاحظات القاضي
</h3>


<textarea

disabled={!canEdit}

rows={5}

value={notes}

onChange={(e)=>setNotes(e.target.value)}

placeholder="ملاحظات القاضي"

/>





<hr/>




<h3>
⚖️ إصدار حكم رسمي
</h3>



<input

disabled={!canEdit}

placeholder="اسم القاضي المصدر للحكم"

value={judgeName}

onChange={(e)=>setJudgeName(e.target.value)}

 />



<br/><br/>




<textarea

disabled={!canEdit}

rows={8}

placeholder="نص الحكم الرسمي"

value={judgment}

onChange={(e)=>setJudgment(e.target.value)}

 />



<br/><br/>





{

canEdit &&

<button onClick={saveChanges}>

💾 حفظ الحكم والتعديلات

</button>

}



<br/><br/>




<button onClick={printJudgment}>

🖨️ طباعة صك الحكم

</button>



</main>


</>


)


}