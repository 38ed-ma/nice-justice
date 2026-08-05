"use client"

import Sidebar from "../components/Sidebar"


export default function Dashboard(){


return(

<>

<Sidebar />


<main

style={{

marginRight:"300px",

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


<p

style={{

color:"#D4AF37",

marginTop:"8px"

}}

>
Minister Of Justice
</p>


</div>




<div

style={{

textAlign:"center",

background:"rgba(255,255,255,.1)",

padding:"15px 30px",

borderRadius:"15px"

}}

>


<span>
وزير العدل
</span>


<h2

style={{

margin:"8px 0",

color:"#D4AF37"

}}

>
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

gap:"20px",

marginBottom:"35px"

}}

>


{

[

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

boxShadow:"0 8px 20px rgba(0,0,0,.15)",

borderTop:"5px solid #D4AF37"

}}

>


<h1>
{item[0]}
</h1>


<h2

style={{

fontSize:"35px"

}}

>
{item[1]}
</h2>


<p

style={{

color:"#0B1F3A",

fontWeight:"bold"

}}

>
{item[2]}
</p>


</div>


))


}


</section>





<section

style={{

background:"white",

padding:"25px",

borderRadius:"20px",

boxShadow:"0 8px 20px rgba(0,0,0,.15)"

}}

>


<h2>
📁 آخر القضايا
</h2>



<table

style={{

width:"100%",

marginTop:"20px",

borderCollapse:"collapse"

}}

>


<thead>

<tr

style={{

background:"#0B1F3A",

color:"white"

}}

>

<th style={{padding:"15px"}}>
رقم القضية
</th>

<th style={{padding:"15px"}}>
المدعي
</th>

<th style={{padding:"15px"}}>
المدعى عليه
</th>

<th style={{padding:"15px"}}>
الحالة
</th>

<th style={{padding:"15px"}}>
القاضي
</th>

</tr>

</thead>



<tbody>


<tr>

<td style={{padding:"15px"}}>
NC-2026-0001
</td>


<td style={{padding:"15px"}}>
محمد
</td>


<td style={{padding:"15px"}}>
أحمد
</td>


<td style={{padding:"15px",color:"green"}}>
مكتملة
</td>


<td style={{padding:"15px"}}>
خالد ايلفن
</td>


</tr>


</tbody>



</table>



</section>



</main>


</>

)

}