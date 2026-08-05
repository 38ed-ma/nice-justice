"use client"

import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"


export default function Users(){


const [users,setUsers] = useState<any[]>([])

const [username,setUsername] = useState("")

const [password,setPassword] = useState("")

const [role,setRole] = useState("")



useEffect(()=>{


const savedUsers =
localStorage.getItem("users")


if(savedUsers){

setUsers(JSON.parse(savedUsers))

}


},[])





function addUser(){


if(!username || !password || !role){

alert("عبي جميع البيانات")

return

}



const newUser = {

id:Date.now(),

username,

password,

role

}



const updated = [
...users,
newUser
]


setUsers(updated)



localStorage.setItem(

"users",

JSON.stringify(updated)

)



setUsername("")

setPassword("")

setRole("")



alert("تم إضافة المستخدم")


}







function deleteUser(id:number){


const updated =
users.filter(
(item)=>item.id !== id
)



setUsers(updated)



localStorage.setItem(

"users",

JSON.stringify(updated)

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
👥 إدارة المستخدمين
</h1>



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




<select

value={role}

onChange={(e)=>setRole(e.target.value)}

>


<option value="">

اختر الصلاحية

</option>


<option value="وزير العدل">

وزير العدل

</option>


<option value="قاضي">

قاضي

</option>


<option value="محامي">

محامي

</option>


<option value="موظف">

موظف

</option>


</select>



<br/><br/>




<button onClick={addUser}>

➕ إضافة مستخدم

</button>




<hr/>




<h2>
قائمة المستخدمين
</h2>




{

users.map((item)=>(


<div key={item.id}>


<p>
👤 {item.username}
</p>


<p>
🔐 كلمة المرور: {item.password}
</p>


<p>
⚖️ الصلاحية: {item.role}
</p>



<button

onClick={()=>deleteUser(item.id)}

>

🗑 حذف

</button>


<hr/>


</div>


))


}



</main>


</>

)

}