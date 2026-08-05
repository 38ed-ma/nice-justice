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
alignItems:"center",
marginBottom:"30px"

}}

>


<div>

<h1>
⚖️ وزارة العدل
</h1>


<p style={{
color:"#D4AF37"
}}>
Minister Of Justice
</p>


</div>



<div

style={{

background:"rgba(255,255,255,.1)",
padding:"20px",
borderRadius:"15px",
textAlign:"center"

}}

>

<p>
وزير العدل
</p>

<h2 style={{
color:"#D4AF37"
}}>
خالد ايلفن
</h2>


<small>
( عقيد )
</small>


</div>



</header>





<section

style={{

display:"grid",
gridTemplateColumns:"repeat(4,1fr)",
gap:"20px"

}}

>


{[

["📁","128","القضايا"],

["⚖️","84","الأحكام"],

["👥","24","المستخدمون"],

["📅","17","الجلسات"]

].map((item:any)=>(


<div

key={item[2]}

style={{

background:"white",
padding:"25px",
borderRadius:"20px",
textAlign:"center",
boxShadow:"0 8px 20px #0003",
borderTop:"5px solid #D4AF37"

}}

>


<h1>
{item[0]}
</h1>


<h2 style={{
fontSize:"35px"
}}>
{item[1]}
</h2>


<p>
{item[2]}
</p>


</div>


))}


</section>





<div

style={{

marginTop:"35px",
background:"white",
padding:"25px",
borderRadius:"20px"

}}

>


<h2>
📂 آخر القضايا
</h2>


<table

style={{

width:"100%",
marginTop:"20px",
borderCollapse:"collapse"

}}

>


<thead>

<tr>

<th>رقم القضية</th>
<th>المدعي</th>
<th>المدعى عليه</th>
<th>الحالة</th>

</tr>

</thead>



<tbody>

<tr>

<td>NC-2026-0001</td>

<td>محمد</td>

<td>أحمد</td>

<td>
مكتملة
</td>

</tr>


</tbody>


</table>


</div>



</main>


</>

)

}