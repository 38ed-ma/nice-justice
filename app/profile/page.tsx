"use client"

import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"
import { checkPassword, encryptPassword } from "../lib/password"



export default function Profile(){


const [user,setUser] = useState<any>(null)


const [oldPassword,setOldPassword] = useState("")

const [newPassword,setNewPassword] = useState("")





useEffect(()=>{


const saved =
localStorage.getItem("user")


if(saved){

setUser(JSON.parse(saved))

}



},[])








function changePassword(){



if(!oldPassword || !newPassword){

alert("عبّي جميع البيانات")

return

}





const correct =
checkPassword(
oldPassword,
user.password
)



if(!correct){

alert("كلمة المرور القديمة غير صحيحة")

return

}






const users =
JSON.parse(
localStorage.getItem("users") || "[]"
)





const updated =

users.map((item:any)=>{


if(item.id === user.id){


return{

...item,

password:
encryptPassword(newPassword)

}


}


return item


})







localStorage.setItem(

"users",

JSON.stringify(updated)

)





const updatedUser = {

...user,

password:
encryptPassword(newPassword)

}




localStorage.setItem(

"user",

JSON.stringify(updatedUser)

)




setUser(updatedUser)



setOldPassword("")

setNewPassword("")



alert("تم تغيير كلمة المرور")



}









function logout(){


localStorage.removeItem("user")


window.location.href="/login"


}






if(!user){

return <h1>لا يوجد مستخدم</h1>

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
👤 الملف الشخصي
</h1>




<div

style={{

border:"1px solid #ccc",

padding:"25px",

borderRadius:"15px"

}}

>



<h2>

{user.username}

</h2>



<p>
⚖️ الصلاحية: {user.role}
</p>



<hr/>




<h2>
🔐 تغيير كلمة المرور
</h2>




<input

type="password"

placeholder="كلمة المرور القديمة"

value={oldPassword}

onChange={(e)=>setOldPassword(e.target.value)}

 />



<br/><br/>




<input

type="password"

placeholder="كلمة المرور الجديدة"

value={newPassword}

onChange={(e)=>setNewPassword(e.target.value)}

 />



<br/><br/>




<button

onClick={changePassword}

>

💾 حفظ كلمة المرور

</button>



<br/><br/>




<button

onClick={logout}

>

🚪 تسجيل الخروج

</button>




</div>





</main>


</>

)

}