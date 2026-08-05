"use client"

import { useEffect,useState } from "react"



export default function Auth({children,roles}:any){


const [allowed,setAllowed] = useState(false)

const [loading,setLoading] = useState(true)



useEffect(()=>{


const saved =
localStorage.getItem("user")



if(!saved){

window.location.href="/login"

return

}



const user =
JSON.parse(saved)




if(
roles &&
!roles.includes(user.role)
){

alert("ليس لديك صلاحية")

window.location.href="/dashboard"

return

}




setAllowed(true)

setLoading(false)



},[])







if(loading){

return(

<h1 style={{textAlign:"center"}}>

جاري التحقق...

</h1>

)

}





return allowed ? children : null


}