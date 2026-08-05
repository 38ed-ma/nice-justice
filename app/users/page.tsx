"use client"

import { useEffect, useState } from "react"
import { encryptPassword } from "../lib/password"
import Sidebar from "../components/Sidebar"


export default function Users(){


const [users,setUsers] = useState<any[]>([])


const [username,setUsername] = useState("")

const [password,setPassword] = useState("")

const [role,setRole] = useState("")





useEffect(()=>{


const saved =
localStorage.getItem("users")


if(saved){

setUsers(JSON.parse(saved))

}


},[])







function addUser(){



if(!username || !password || !role){

alert("عبي جميع البيانات")

return

}





const newUser={


id:Date.now(),


username,


password:

encryptPassword(password),


role



}





const updated=[

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



<hr/>




<h2>
إضافة مستخدم
</h2>



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




<button onClick={addUser}>

➕ إضافة

</button>





<hr/>




<h2>
المستخدمين

</h2>




{

users.map((item)=>(


<div

key={item.id}

style={{

border:"1px solid #ccc",

padding:"15px",

margin:"10px"

}}

>


<p>
👤 {item.username}
</p>


<p>
الصلاحية: {item.role}
</p>




<button

onClick={()=>deleteUser(item.id)}

>

🗑 حذف

</button>



</div>


))


}





</main>


</>

)

}