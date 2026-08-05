"use client"

import Sidebar from "../components/Sidebar"

export default function Dashboard() {
  return (
    <>
      <Sidebar />

      <main className="main">

        <header className="header">

          <div>
            <h1>⚖️ وزارة العدل</h1>
            <p>Minister Of Justice</p>
          </div>

          <div className="minister">

            <span>وزير العدل</span>

            <h2>خالد ايلفن</h2>

            <small>( عقيد )</small>

          </div>

        </header>

        <section className="cards">

          <div className="card">
            <h3>📁</h3>
            <h2>128</h2>
            <p>القضايا</p>
          </div>

          <div className="card">
            <h3>⚖️</h3>
            <h2>84</h2>
            <p>الأحكام</p>
          </div>

          <div className="card">
            <h3>👥</h3>
            <h2>24</h2>
            <p>المستخدمون</p>
          </div>

          <div className="card">
            <h3>📅</h3>
            <h2>17</h2>
            <p>الجلسات</p>
          </div>

        </section>

        <section className="tableBox">

          <div className="tableHeader">

            <h2>آخر القضايا</h2>

            <button>+ قضية جديدة</button>

          </div>

          <table>

            <thead>

              <tr>

                <th>رقم</th>

                <th>المدعي</th>

                <th>المدعى عليه</th>

                <th>الحالة</th>

                <th>القاضي</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>#1001</td>

                <td>محمد</td>

                <td>أحمد</td>

                <td>
                  <span className="green">
                    مكتملة
                  </span>
                </td>

                <td>خالد ايلفن</td>

              </tr>

            </tbody>

          </table>

        </section>

      </main>
    </>
  )
}