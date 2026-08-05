"use client"

import { useEffect, useState } from "react"
import jsPDF from "jspdf"
import QRCode from "qrcode"
import Sidebar from "../../../components/Sidebar"



export default function PrintJudgment(){


const [data,setData] = useState<any>(null)

const [qr,setQr] = useState("")







useEffect(()=>{


async function load(){


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




const qrCode =
await QRCode.toDataURL(

`justice-system/check/${id}`

)



setQr(qrCode)



}



}



load()



},[])









function createPDF(){



const pdf =
new jsPDF()





// إطار الصك

pdf.rect(
10,
10,
190,
270
)





pdf.setFontSize(20)



pdf.text(

"وزارة العدل",

80,

30

)





pdf.setFontSize(16)



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

`رقم الصك: ${
data.deedNumber ||
"DEED-2026"
}`,

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

`القاضي: ${
data.judgeName ||
data.judge
}`,

20,

130

)





pdf.text(

"نص الحكم:",

20,

150

)



pdf.text(

data.judgment ||

"لا يوجد حكم",

20,

165

)





pdf.text(

`توقيع القاضي: ${
data.signature ||
""
}`,

20,

210

)





pdf.text(

"ختم وزارة العدل",

120,

230

)






pdf.text(

`رقم التحقق: ${Date.now()}`,

20,

250

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



<h1>
📜 صك الحكم
</h1>




<div

style={{

border:"3px solid black",

padding:"30px",

borderRadius:"10px"

}}

>



<h2>
⚖️ وزارة العدل
</h2>



<h3>
صك حكم قضائي
</h3>




<hr/>





<p>

رقم القضية:

{data.id}

</p>




<p>

رقم الصك:

{data.deedNumber || "DEED-2026"}

</p>




<p>

المدعي:

{data.plaintiff}

</p>




<p>

المدعى عليه:

{data.defendant}

</p>




<p>

القاضي:

{data.judgeName || data.judge}

</p>





<hr/>




<h3>
نص الحكم
</h3>


<p>

{data.judgment}

</p>




<br/>




<p>
✍️ توقيع القاضي
</p>


<h3>

{data.signature}

</h3>




<h2>
🔴 ختم وزارة العدل
</h2>





{

qr &&

<img

src={qr}

width="120"

/>

}





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