"use client"

import { useEffect, useState } from "react"


export default function Users(){


const [users,setUsers] = useState<any[]>([])

const [name,setName] = useState("")
const [role,setRole] = useState("")



useEffect(()=>{

const saved = localStorage.getItem("users")

if(saved){

setUsers(JSON.parse(saved))

}

},[])




function addUser(){


const newUser={

id:`U-${String(users.length+1).padStart(3,"0")}`,

name,

role

}



const updated=[...users,newUser]


setUsers(updated)


localStorage.setItem(
"users",
JSON.stringify(updated)
)


setName("")
setRole("")

}





function deleteUser(id:string){


const updated = users.filter(
(item)=>item.id !== id
)


setUsers(updated)


localStorage.setItem(
"users",
JSON.stringify(updated)
)


}




return(

<main>


<h1>
👥 إدارة المستخدمين
</h1>



<div className="card">


<input

placeholder="اسم المستخدم"

value={name}

onChange={(e)=>setName(e.target.value)}

 />



<select

value={role}

onChange={(e)=>setRole(e.target.value)}

>


<option>
اختر الصلاحية
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



<button onClick={addUser}>

➕ إضافة مستخدم

</button>


</div>



<br/>


<table>


<thead>

<tr>

<th>
الرقم
</th>

<th>
الاسم
</th>

<th>
الصلاحية
</th>

<th>
إجراء
</th>

</tr>

</thead>



<tbody>


{

users.map((user)=>(


<tr key={user.id}>


<td>
{user.id}
</td>


<td>
{user.name}
</td>


<td>
{user.role}
</td>


<td>

<button
onClick={()=>deleteUser(user.id)}
>

🗑 حذف

</button>


</td>


</tr>


))


}



</tbody>


</table>



</main>

)

}