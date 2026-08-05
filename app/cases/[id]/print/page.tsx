"use client"

import { useEffect, useState } from "react"
import jsPDF from "jspdf"
import Sidebar from "../../../components/Sidebar"


export default function PrintJudgment(){


const [data,setData] = useState<any>(null)

const [verify,setVerify] = useState("")



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



setVerify(
"CHK-" + Date.now()
)



}



},[])







function createPDF(){



const pdf =
new jsPDF()





pdf.rect(
10,
10,
190,
270
)





pdf.setFontSize(18)


pdf.text(

"وزارة العدل",

80,

30

)




pdf.setFontSize(15)


pdf.text(

"صك حكم قضائي",

70,

45

)





pdf.setFontSize(12)



pdf.text(

`رقم القضية: ${data.id}`,

20,

70

)



pdf.text(

`رقم التحقق: ${verify}`,

20,

85

)



pdf.text(

`المدعي: ${data.plaintiff}`,

20,

100

)



pdf.text(

`المدعى عليه: ${data.defendant}`,

20,

115

)



pdf.text(

`القاضي: ${data.judge}`,

20,

130

)





pdf.text(

"نص الحكم:",

20,

155

)




pdf.text(

data.judgment || "لا يوجد حكم",

20,

170

)





pdf.text(

"توقيع القاضي:",

20,

210

)



pdf.text(

data.signature || "غير موجود",

20,

225

)





pdf.text(

"ختم وزارة العدل",

120,

245

)





pdf.save(

`صك-${data.id}.pdf`

)



}







if(!data){

return (

<h1>

جاري تحميل الصك...

</h1>

)

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



<div

style={{

border:"3px solid black",

padding:"30px",

borderRadius:"10px"

}}

>


<h1>
⚖️ وزارة العدل
</h1>



<h2>
📜 صك حكم قضائي
</h2>



<hr/>




<p>
رقم القضية: {data.id}
</p>


<p>
رقم التحقق: {verify}
</p>



<p>
المدعي: {data.plaintiff}
</p>



<p>
المدعى عليه: {data.defendant}
</p>



<p>
القاضي: {data.judge}
</p>



<hr/>




<h3>
نص الحكم
</h3>


<p>
{data.judgment || "لا يوجد حكم"}
</p>



<br/>

<p>
✍️ توقيع القاضي
</p>


<h3>
{data.signature || ""}
</h3>



<h2>
🔴 ختم وزارة العدل
</h2>



</div>



<br/>




<button

onClick={createPDF}

>

📥 إنشاء PDF

</button>




</main>


</>

)

}