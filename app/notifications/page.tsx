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



},[])







function clearAll(){


localStorage.removeItem("notifications")

setNotifications([])


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
🔔 الإشعارات
</h1>



<hr/>





<button onClick={clearAll}>

🗑 حذف الكل

</button>






{

notifications.length === 0 &&

<h3>
لا توجد إشعارات
</h3>

}





{

notifications.map((item)=>(


<div

key={item.id}

style={{

border:"1px solid #ccc",

padding:"15px",

margin:"10px",

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