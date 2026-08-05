"use client"

import { useState } from "react"


export default function Login(){


const [username,setUsername] = useState("")

const [password,setPassword] = useState("")



function login(){


const savedUsers =
localStorage.getItem("users")



if(savedUsers){


const users = JSON.parse(savedUsers)



const found = users.find(
(item:any)=>
item.username === username &&
item.password === password
)



if(found){


localStorage.setItem(

"user",

JSON.stringify(found)

)



window.location.href="/dashboard"


}else{


alert("بيانات الدخول غير صحيحة")


}



}else{


alert("لا يوجد مستخدمين")


}



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




<input

placeholder="كلمة المرور"

type="password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

 />



<br/><br/>




<button onClick={login}>

دخول

</button>



</main>

)

}