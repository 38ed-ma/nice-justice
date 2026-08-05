"use client"

import {useState} from "react"
import {checkPassword} from "../lib/password"



export default function Login(){


const [username,setUsername] = useState("")

const [password,setPassword] = useState("")




function login(){


const saved =
localStorage.getItem("users")



if(!saved){

alert("لا يوجد مستخدمين")

return

}



const users =
JSON.parse(saved)




const user =
users.find(
(item:any)=>
item.username === username
)




if(!user){

alert("بيانات الدخول غير صحيحة")

return

}




const correct =
checkPassword(
password,
user.password
)




if(!correct){

alert("بيانات الدخول غير صحيحة")

return

}




localStorage.setItem(

"user",

JSON.stringify(user)

)



window.location.href="/dashboard"



}







return(

<main

style={{

padding:"50px",

direction:"rtl",

textAlign:"center"

}}

>


<h1>
🔐 تسجيل الدخول
</h1>




<input

placeholder="اسم المستخدم"

value={username}

onChange={(e)=>setUsername(e.target.value)}

 />



<br/><br/>




<input

type="password"

placeholder="كلمة المرور"

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