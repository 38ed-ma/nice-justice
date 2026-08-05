"use client"

import Sidebar from "../components/Sidebar"


export default function Dashboard(){


return(

<>

<Sidebar />


<main

style={{

padding:"25px",

direction:"rtl",

background:"#E8DCC0",

minHeight:"100vh"

}}

>



<header

style={{

background:"#0B1F3A",

color:"white",

padding:"25px",

borderRadius:"20px",

display:"flex",

justifyContent:"space-between",

alignItems:"center",

flexWrap:"wrap",

gap:"20px"

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

background:"rgba(255,255,255,.1)",

padding:"15px 25px",

borderRadius:"15px",

textAlign:"center"

}}

>


<p>

وزير العدل

</p>


<h2

style={{

color:"#D4AF37",

margin:"8px 0"

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

gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",

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

fontSize:"35px",

margin:"10px"

}}

>

{item[1]}

</h2>


<p>

{item[2]}

</p>


</div>


))


}


</section>







<section

style={{

background:"white",

marginTop:"35px",

padding:"25px",

borderRadius:"20px",

overflowX:"auto"

}}

>


<div

style={{

display:"flex",

justifyContent:"space-between",

alignItems:"center"

}}

>

<h2>

📂 آخر القضايا

</h2>


<button

style={{

background:"#D4AF37",

border:"none",

padding:"12px 20px",

borderRadius:"10px",

cursor:"pointer"

}}

onClick={()=>window.location.href="/cases"}

>

+ قضية جديدة

</button>


</div>





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

<td style={{padding:"15px",textAlign:"center"}}>
NC-2026-0001
</td>


<td style={{padding:"15px",textAlign:"center"}}>
محمد
</td>


<td style={{padding:"15px",textAlign:"center"}}>
أحمد
</td>


<td style={{padding:"15px",textAlign:"center"}}>

<span

style={{

background:"#16a34a",

color:"white",

padding:"6px 12px",

borderRadius:"10px"

}}

>

مكتملة

</span>

</td>


<td style={{padding:"15px",textAlign:"center"}}>
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