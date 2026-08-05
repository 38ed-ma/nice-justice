"use client"

import { useEffect, useState } from "react"


export default function PrintJudgment(){


const [caseData,setCaseData] = useState<any>(null)



useEffect(()=>{


const id =
window.location.pathname.split("/")[2]



const saved =
localStorage.getItem("cases")



if(saved){


const cases =
JSON.parse(saved)



const found =
cases.find(
(item:any)=>item.id === id
)



setCaseData(found)


}



},[])







function printPage(){

window.print()

}







if(!caseData){

return <h1>جاري تجهيز الصك...</h1>

}





return(

<main

style={{

padding:"50px",

direction:"rtl",

textAlign:"center",

fontFamily:"Arial"

}}

>



<h1>
⚖️ وزارة العدل
</h1>



<h2>
صك حكم قضائي
</h2>



<hr/>




<h3>
رقم القضية:
</h3>

<p>
{caseData.id}
</p>




<h3>
أطراف القضية
</h3>



<p>
المدعي: {caseData.plaintiff}
</p>



<p>
المدعى عليه: {caseData.defendant}
</p>




<h3>
نوع القضية
</h3>


<p>
{caseData.type}
</p>




<hr/>





<h3>
نص الحكم
</h3>



<p

style={{

minHeight:"150px",

fontSize:"18px"

}}

>

{caseData.judgment || "لم يتم إصدار حكم"}

</p>





<hr/>




<p>
القاضي المصدر للحكم:
<br/>

{caseData.judgeName || caseData.judge}

</p>




<p>

تاريخ الإصدار:

<br/>

{caseData.judgmentDate || 
new Date().toLocaleDateString("ar-SA")}

</p>





<br/><br/>




<button

onClick={printPage}

>

🖨️ طباعة الصك

</button>




</main>

)


}