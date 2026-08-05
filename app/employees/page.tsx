"use client"

import { useState } from "react"

export default function Employees() {

  const [employees, setEmployees] = useState<any[]>([])

  const [name, setName] = useState("")
  const [rank, setRank] = useState("محامي")

  function addEmployee() {

    if (!name) return

    setEmployees([
      ...employees,
      {
        id: employees.length + 1,
        name,
        rank,
        status: "على رأس العمل"
      }
    ])

    setName("")
    setRank("محامي")
  }

  function fireEmployee(id:number){
    setEmployees(
      employees.map(emp =>
        emp.id === id
          ? {...emp,status:"موقوف"}
          : emp
      )
    )
  }

  function deleteEmployee(id:number){
    setEmployees(
      employees.filter(emp => emp.id !== id)
    )
  }

  return (

    <main style={{padding:"40px",textAlign:"center"}}>

      <h1>👥 إدارة الموظفين</h1>

      <hr/>

      <input
        placeholder="اسم الموظف"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <br/><br/>

      <select
        value={rank}
        onChange={(e)=>setRank(e.target.value)}
      >

        <option>محامي</option>
        <option>قاضي</option>
        <option>وكيل وزارة</option>
        <option>وزير العدل</option>

      </select>

      <br/><br/>

      <button onClick={addEmployee}>
        إضافة موظف
      </button>

      <hr/>

      {employees.map((emp)=>(
        <div key={emp.id}>

          <h3>{emp.name}</h3>

          <p>
            الرتبة: {emp.rank}
          </p>

          <p>
            الحالة: {emp.status}
          </p>

          <button onClick={()=>fireEmployee(emp.id)}>
            🚫 إيقاف
          </button>

          <button onClick={()=>deleteEmployee(emp.id)}>
            ❌ حذف
          </button>

          <hr/>

        </div>
      ))}

    </main>

  )

}