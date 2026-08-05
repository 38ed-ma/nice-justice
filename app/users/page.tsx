"use client"

import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"


export default function Users(){


const [users,setUsers] = useState<any[]>([])

const [username,setUsername] = useState("")

const [role,setRole] = useState("")

const [currentUser,setCurrentUser] = useState<any>(null)



useEffect(()=>{


const savedUser =
localStorage.getItem("user")


if(savedUser){

setCurrentUser(JSON.parse(savedUser))

}



const savedUsers =
localStorage.getItem("users")


if(savedUsers){

setUsers(JSON.parse(savedUsers))

}


},[])





function addUser(){


if(!username || !role){

alert("اكمل البيانات")

return

}



const newUser={

id:Date.now(),

username,

role

}



const updated=[...users,newUser]


setUsers(updated)


localStorage.setItem(

"users",

JSON.stringify(updated)

)



setUsername("")

setRole("")


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






if(currentUser?.role !== "وزير العدل"){

return <h1>ليس لديك صلاحية</h1>

}





return(

<>


<Sidebar />


<main

style={{

marginRight:"20px",

padding:"40px",

direction:"rtl"

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




<select

value={role}

onChange={(e)=>setRole(e.target.value)}

>


<option>
اختر الرتبة
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

➕ إضافة مستخدم

</button>





<hr/>




<h2>
المستخدمين
</h2>



{

users.map((item)=>(


<div key={item.id}>


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


<hr/>


</div>


))


}



</main>


</>

)

}