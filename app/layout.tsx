import "./globals.css"

export const metadata = {
  title: "وزارة العدل",
  description: "Minister Of Justice",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}