import "./globals.css"

export const metadata = {
  title: "وزارة العدل | النظام الإلكتروني",
  description: "نظام إدارة القضايا",
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