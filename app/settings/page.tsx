"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"


export default function Settings(){


const router = useRouter()

const [role,setRole] = useState("")



useEffect(()=>{

const user = localStorage.getItem("role")

if(user){

setRole(user)

}

},[])




function logout(){

localStorage.removeItem("role")

router.push("/login")

}



return(

<main>


<h1>
⚙️ الإعدادات
</h1>


<div className="card">


<h2>
المستخدم الحالي:
</h2>


<h3>
{role}
</h3>



<button onClick={logout}>

🚪 تسجيل خروج

</button>


</div>


</main>

)

}