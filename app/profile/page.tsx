"use client"

import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"



export default function Profile(){


const [user,setUser] = useState<any>(null)



useEffect(()=>{


const saved =
localStorage.getItem("user")



if(saved){

setUser(JSON.parse(saved))

}



},[])







function logout(){


localStorage.removeItem("user")


window.location.href="/login"


}






if(!user){

return(

<h1 style={{textAlign:"center"}}>

لا يوجد مستخدم مسجل

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
👤 الملف الشخصي
</h1>



<hr/>





<div

style={{

border:"1px solid #ccc",

padding:"25px",

borderRadius:"15px",

maxWidth:"400px",

margin:"auto"

}}

>



<h2>
👤 {user.username}
</h2>



<p>
🆔 رقم المستخدم:
</p>


<p>
{user.id}
</p>




<p>
⚖️ الصلاحية:
</p>


<h3>
{user.role}
</h3>





<p>
📅 تاريخ الدخول:
</p>


<p>

{new Date().toLocaleDateString("ar-SA")}

</p>






<button

onClick={logout}

style={{

padding:"12px",

background:"#b91c1c",

color:"white",

border:"none",

borderRadius:"8px"

}}

>

🚪 تسجيل الخروج

</button>




</div>





</main>


</>

)

}