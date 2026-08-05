"use client"

import { useState } from "react"


export default function Login(){


const [username,setUsername] = useState("38ed")

const [role,setRole] = useState("")



function login(){


if(!username || !role){

alert("عبي جميع البيانات")

return

}



localStorage.setItem(

"user",

JSON.stringify({

username,

role

})

)



window.location.href="/dashboard"



}





return(


<main

style={{

padding:"50px",

textAlign:"center",

direction:"rtl"

}}

>


<h1>
⚖️ نظام العدل الإلكتروني
</h1>


<h2>
تسجيل الدخول
</h2>



<input

placeholder="اسم المستخدم"

value={username}

onChange={(e)=>setUsername(e.target.value)}

/>



<br/><br/>



<select

value={role}

onChange={(e)=>setRole(e.target.value)}

>


<option value="">
اختر الصلاحية
</option>


<option>
وزير العدل
</option>


<option>
قاضي
</option>


<option>
محامي
</option>


<option>
موظف
</option>



</select>



<br/><br/>



<button onClick={login}>

دخول

</button>



</main>


)


}