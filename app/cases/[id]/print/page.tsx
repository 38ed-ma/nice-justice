"use client"

import { useEffect, useState } from "react"


export default function PrintJudgment(){


const [caseData,setCaseData] = useState<any>(null)


useEffect(()=>{


const id = window.location.pathname.split("/")[2]


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

return <h1>جاري تجهيز الصك...</h1>

}



return(

<main
style={{
padding:"50px",
textAlign:"center",
direction:"rtl"
}}
>


<h1>
⚖️ صك حكم
</h1>


<h2>
وزارة العدل
</h2>


<hr/>


<h3>
بيانات القضية
</h3>


<p>
رقم القضية: {caseData.id}
</p>


<p>
المدعي: {caseData.plaintiff}
</p>


<p>
المدعى عليه: {caseData.defendant}
</p>


<p>
نوع القضية: {caseData.type}
</p>


<hr/>


<h3>
نص الحكم
</h3>


<p
style={{
fontSize:"18px",
lineHeight:"2"
}}
>

{caseData.judgment}

</p>


<hr/>


<p>
القاضي المصدر: {caseData.judgeName}
</p>


<p>
تاريخ الحكم: {caseData.judgmentDate}
</p>


<br/><br/>


<p>
توقيع القاضي:
______________
</p>


<br/><br/>


<button
onClick={()=>window.print()}
>

🖨️ طباعة

</button>


</main>

)

}