"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"


export default function Login(){

const router = useRouter()

const [user,setUser] = useState("")
const [password,setPassword] = useState("")
const [error,setError] = useState("")


function login(){

if(
(user === "قاضي" && password === "1289") ||
(user === "محامي" && password === "3467") ||
(user === "مسؤول" && password === "0912")
){

localStorage.setItem("role", user)

router.push("/")

}else{

setError("بيانات الدخول غير صحيحة")

}

}


return(

<main style={{
textAlign:"center",
padding:"50px"
}}>


<h1>⚖️ تسجيل دخول العدل</h1>


<select
value={user}
onChange={(e)=>setUser(e.target.value)}
>

<option value="">
اختر المستخدم
</option>

<option>
قاضي
</option>

<option>
محامي
</option>

<option>
مسؤول
</option>

</select>


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


<p style={{color:"red"}}>
{error}
</p>


</main>

)

}