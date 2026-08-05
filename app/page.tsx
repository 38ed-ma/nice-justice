import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>نايس سيتي</h1>

      <Link href="/login">
        افتح تسجيل الدخول
      </Link>

    </main>
  )
}