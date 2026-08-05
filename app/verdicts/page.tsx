"use client"

import { useEffect, useState } from "react"


export default function Verdicts(){


const [verdicts,setVerdicts] = useState<any[]>([])

const [caseId,setCaseId] = useState("")
const [judge,setJudge] = useState("")
const [text,setText] = useState("")



useEffect(()=>{

const saved = localStorage.getItem("verdicts")

if(saved){

setVerdicts(JSON.parse(saved))

}

},[])




function addVerdict(){


const newVerdict={

id:`V-${String(verdicts.length+1).padStart(3,"0")}`,

caseId,

judge,

text

}



const updated=[...verdicts,newVerdict]


setVerdicts(updated)


localStorage.setItem(
"verdicts",
JSON.stringify(updated)
)



setCaseId("")
setJudge("")
setText("")


}




return(

<main>


<h1>
📜 الأحكام
</h1>



<div className="card">


<input
placeholder="رقم القضية"
value={caseId}
onChange={(e)=>setCaseId(e.target.value)}
/>


<input
placeholder="القاضي"
value={judge}
onChange={(e)=>setJudge(e.target.value)}
/>



<textarea

placeholder="نص الحكم"

value={text}

onChange={(e)=>setText(e.target.value)}

 />



<button onClick={addVerdict}>

➕ إصدار حكم

</button>


</div>




<table>


<thead>

<tr>

<th>
رقم الحكم
</th>

<th>
القضية
</th>

<th>
القاضي
</th>

<th>
الحكم
</th>

</tr>

</thead>



<tbody>


{

verdicts.map((item)=>(


<tr key={item.id}>


<td>{item.id}</td>

<td>{item.caseId}</td>

<td>{item.judge}</td>

<td>{item.text}</td>


</tr>


))


}



</tbody>


</table>


</main>

)

}