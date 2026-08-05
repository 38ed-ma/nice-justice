"use client"

import { useEffect, useState } from "react"
import jsPDF from "jspdf"
import Sidebar from "../../../components/Sidebar"



export default function PrintJudgment(){


const [data,setData] = useState<any>(null)





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



setData(found)


}



},[])







function createPDF(){



const pdf = new jsPDF()



pdf.setFontSize(18)


pdf.text(

"وزارة العدل",

80,

20

)



pdf.setFontSize(14)



pdf.text(

"صك حكم قضائي",

70,

35

)




pdf.text(

`رقم الصك: ${data.deedNumber || "DEED-2026"}`,

20,

55

)



pdf.text(

`رقم القضية: ${data.id}`,

20,

70

)



pdf.text(

`المدعي: ${data.plaintiff}`,

20,

85

)



pdf.text(

`المدعى عليه: ${data.defendant}`,

20,

100

)



pdf.text(

`القاضي: ${data.judgeName || data.judge}`,

20,

115

)





pdf.text(

"الحكم:",

20,

140

)



pdf.text(

data.judgment || "لا يوجد حكم",

20,

155

)





pdf.text(

"توقيع القاضي:",

20,

200

)



pdf.text(

data.signature || "غير موجود",

20,

215

)




pdf.text(

"ختم وزارة العدل",

120,

230

)



pdf.save(

`صك-${data.id}.pdf`

)



}







if(!data){

return <h1>جاري التحميل...</h1>

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
📄 صك الحكم
</h1>



<hr/>




<h2>
{data.id}
</h2>



<p>
رقم الصك:
{data.deedNumber || "يتم إنشاؤه عند الحفظ"}
</p>



<p>
القاضي:
{data.judgeName || data.judge}
</p>




<div

style={{

border:"2px solid #000",

padding:"20px"

}}

>


<h3>
نص الحكم
</h3>


<p>
{data.judgment}
</p>



<br/>


<p>
✍️ توقيع القاضي:
</p>


<h3>
{data.signature}
</h3>



<h2>
🔴 ختم وزارة العدل
</h2>



</div>





<br/>


<button onClick={createPDF}>

📥 إنشاء PDF

</button>




</main>


</>

)

}