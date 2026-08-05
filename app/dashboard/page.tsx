"use client"

import Sidebar from "../components/Sidebar"


export default function Dashboard(){


return(

<>

<Sidebar />


<main

style={{

marginRight:"260px",
padding:"35px",
direction:"rtl",
background:"#E8DCC0",
minHeight:"100vh"

}}

>


<header

style={{

background:"#0B1F3A",
color:"white",
padding:"30px",
borderRadius:"20px",
display:"flex",
justifyContent:"space-between",
alignItems:"center"

}}

>


<div>

<h1>
⚖️ وزارة العدل
</h1>


<p style={{color:"#D4AF37"}}>
Minister Of Justice
</p>

</div>



<div
style={{
background:"#132B4F",
padding:"20px",
borderRadius:"15px",
textAlign:"center"
}}
>

<p>
وزير العدل
</p>


<h2 style={{color:"#D4AF37"}}>
خالد ايلفن
</h2>


<span>
( عقيد )
</span>


</div>


</header>



<section

style={{

display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"20px",
marginTop:"30px"

}}

>


{

[
["📁","128","القضايا"],
["⚖️","84","الأحكام"],
["👥","24","المستخدمون"],
["📅","17","الجلسات"]

].map((x:any)=>(


<div

key={x[2]}

style={{

background:"white",
padding:"25px",
borderRadius:"20px",
textAlign:"center",
borderTop:"5px solid #D4AF37"

}}

>

<h1>{x[0]}</h1>

<h2>{x[1]}</h2>

<p>{x[2]}</p>


</div>


))


}


</section>



<div

style={{

marginTop:"30px",
background:"white",
padding:"25px",
borderRadius:"20px"

}}

>


<h2>
📂 آخر القضايا
</h2>


<table style={{
width:"100%",
marginTop:"20px"
}}>


<tr>

<th>
رقم القضية
</th>

<th>
الحالة
</th>

</tr>


<tr>

<td>
NC-2026-0001
</td>

<td>
جديدة
</td>

</tr>


</table>


</div>



</main>


</>

)

}