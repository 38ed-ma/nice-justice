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

minHeight:"100vh",

background:"#E8DCC0",

display:"flex",

justifyContent:"center",

alignItems:"center",

direction:"rtl",

padding:"20px"

}}

>


<div

style={{

width:"420px",

background:"white",

borderRadius:"25px",

padding:"40px",

boxShadow:"0 15px 40px rgba(0,0,0,.25)",

textAlign:"center"

}}

>



<div

style={{

fontSize:"55px",

marginBottom:"10px"

}}

>

⚖️

</div>



<h1

style={{

color:"#0B1F3A",

marginBottom:"5px"

}}

>

وزارة العدل

</h1>



<p

style={{

color:"#B8860B",

fontSize:"18px",

fontWeight:"bold"

}}

>

Minister Of Justice

</p>



<hr

style={{

margin:"25px 0",

border:"none",

borderTop:"1px solid #ddd"

}}

/>



<h2

style={{

color:"#0B1F3A",

marginBottom:"25px"

}}

>

🔐 تسجيل الدخول

</h2>




<input

style={{

width:"100%",

padding:"15px",

borderRadius:"12px",

border:"1px solid #ccc",

marginBottom:"15px",

fontSize:"16px"

}}

placeholder="اسم المستخدم"

value={username}

onChange={(e)=>setUsername(e.target.value)}

/>




<input

style={{

width:"100%",

padding:"15px",

borderRadius:"12px",

border:"1px solid #ccc",

marginBottom:"25px",

fontSize:"16px"

}}

type="password"

placeholder="كلمة المرور"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>





<button

onClick={login}

style={{

width:"100%",

padding:"15px",

background:"#0B1F3A",

color:"white",

border:"none",

borderRadius:"12px",

fontSize:"18px",

cursor:"pointer"

}}

>

دخول النظام

</button>



<p

style={{

marginTop:"25px",

color:"#777",

fontSize:"13px"

}}

>

Ministry Of Justice © 2026

</p>



</div>


</main>


)


}