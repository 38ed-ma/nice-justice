"use client"

import { useEffect, useState } from "react"


export default function Judges(){


const [judges,setJudges] = useState<any[]>([])

const [name,setName] = useState("")
const [court,setCourt] = useState("")


useEffect(()=>{

const saved = localStorage.getItem("judges")

if(saved){

setJudges(JSON.parse(saved))

}

},[])



function addJudge(){


const newJudge = {

id:`J-${String(judges.length+1).padStart(3,"0")}`,

name,

court

}



const updated=[...judges,newJudge]


setJudges(updated)


localStorage.setItem(
"judges",
JSON.stringify(updated)
)


setName("")
setCourt("")

}



return(

<main>


<h1>
👨‍⚖️ إدارة القضاة
</h1>


<div className="card">


<input

placeholder="اسم القاضي"

value={name}

onChange={(e)=>setName(e.target.value)}

 />


<input

placeholder="المحكمة"

value={court}

onChange={(e)=>setCourt(e.target.value)}

 />


<button onClick={addJudge}>

➕ إضافة قاضي

</button>


</div>



<br/>


<table>


<thead>

<tr>

<th>
رقم القاضي
</th>

<th>
الاسم
</th>

<th>
المحكمة
</th>

</tr>

</thead>



<tbody>


{

judges.map((judge)=>(


<tr key={judge.id}>


<td>
{judge.id}
</td>


<td>
{judge.name}
</td>


<td>
{judge.court}
</td>


</tr>


))


}


</tbody>


</table>


</main>

)

}