"use client"

import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"



export default function Notifications(){


const [notifications,setNotifications] = useState<any[]>([])





useEffect(()=>{


const saved =
localStorage.getItem("notifications")



if(saved){

setNotifications(JSON.parse(saved))

}



// تصفير العداد بعد فتح الصفحة

localStorage.setItem(
"notifications",
JSON.stringify([])
)



},[])







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
🔔 الإشعارات
</h1>



<hr/>






{

notifications.length === 0 &&

<h2>
لا توجد إشعارات
</h2>

}






{

notifications.map((item)=>(


<div

key={item.id}

style={{

border:"1px solid #ccc",

padding:"15px",

margin:"15px",

borderRadius:"10px"

}}

>


<h3>

{item.title}

</h3>



<p>

{item.message}

</p>



<small>

{item.date}

</small>



</div>


))


}




</main>


</>

)

}