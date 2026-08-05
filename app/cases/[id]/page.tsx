"use client"

import { useEffect, useState } from "react"


export default function CaseDetails(){

const [caseData,setCaseData] = useState<any>(null)


useEffect(()=>{

const id = window.location.pathname.split("/").pop()

const saved = localStorage.getItem("cases")


if(saved){

const allCases = JSON.parse(saved)

const found = allCases.find(
(item:any)=>item.id === id
)

setCaseData(found)

}

},[])



if(!caseData){

return <h2>جاري تحميل القضية...</h2>

}



return(

<main>

<h1>
📁 ملف القضية
</h1>


<div className="card">

<h2>
{caseData.id}
</h2>


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


<p>
الحالة: {caseData.status}
</p>


</div>


</main>

)

}