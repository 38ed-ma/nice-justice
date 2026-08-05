"use client"

export default function Home() {

  return (

    <main>

      <h1>
        لوحة التحكم
      </h1>


      <div className="dashboard">


        <div className="card">

          <h2>📁</h2>
          <h3>القضايا</h3>
          <p>0</p>

        </div>



        <div className="card">

          <h2>🆕</h2>
          <h3>القضايا الجديدة</h3>
          <p>0</p>

        </div>



        <div className="card">

          <h2>👨‍⚖️</h2>
          <h3>القضاة</h3>
          <p>0</p>

        </div>



        <div className="card">

          <h2>📜</h2>
          <h3>الأحكام</h3>
          <p>0</p>

        </div>


      </div>


    </main>

  )
}