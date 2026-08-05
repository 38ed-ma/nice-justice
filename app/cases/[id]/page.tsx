"use client"

import { useEffect, useState } from "react"


export default function CaseDetails(){


const [caseData,setCaseData] = useState<any>(null)

const [status,setStatus] = useState("")
const [notes,setNotes] = useState("")

const [judgment,setJudgment] = useState("")
const [judgeName,setJudgeName] = useState("")



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



setCaseData({

...caseData,

status,

notes,

judgment,

judgeName

})



alert("تم حفظ التعديلات")


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
حالة القضية
</h3>


<select

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

rows={5}

value={notes}

onChange={(e)=>setNotes(e.target.value)}

placeholder="اكتب ملاحظات القاضي"

 />



<hr/>


<h3>
⚖️ إصدار حكم رسمي
</h3>


<input

placeholder="اسم القاضي المصدر للحكم"

value={judgeName}

onChange={(e)=>setJudgeName(e.target.value)}

/>



<br/><br/>



<textarea

rows={8}

placeholder="نص الحكم الرسمي"

value={judgment}

onChange={(e)=>setJudgment(e.target.value)}

 />



<br/><br/>



<button onClick={saveChanges}>

💾 حفظ الحكم والتعديلات

</button>



</main>


)


}