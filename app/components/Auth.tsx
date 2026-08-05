"use client"

import { useEffect,useState } from "react"


export default function Auth({
children,
roles
}:any){


const [allowed,setAllowed] = useState(false)



useEffect(()=>{


const saved =
localStorage.getItem("user")


if(!saved){

window.location.href="/login"

return

}



const user =
JSON.parse(saved)



if(roles.includes(user.role)){

setAllowed(true)

}else{

alert("ليس لديك صلاحية")

window.location.href="/dashboard"

}



},[])



if(!allowed){

return null

}



return children


}