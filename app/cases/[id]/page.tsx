"use client"

import { useEffect, useState } from "react"

export default function CaseDetails(){

const [caseData,setCaseData] = useState<any>(null)

const [status,setStatus] = useState("")
const [notes,setNotes] = useState("")


useEffect(()=>{

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

notes

}

}

return item

})


localStorage.setItem(
"cases",
JSON.stringify(updated)
)


setCaseData({

...caseData,

status,

notes

})


alert("تم تحديث القضية")

}

}




if(!caseData){

return <h1>جاري تحميل القضية...</h1>

}



return(

<main>


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
تحديث الحالة
</h3>


<select

value={status}

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



<br/><br/>



<h3>
ملاحظات القاضي
</h3>


<textarea

value={notes}

onChange={(e)=>setNotes(e.target.value)}

placeholder="اكتب ملاحظات القضية هنا"

rows={6}

/>



<br/><br/>



<button onClick={saveChanges}>

💾 حفظ التعديلات

</button>



</main>

)

}