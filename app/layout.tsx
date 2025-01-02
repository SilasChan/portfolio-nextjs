import { Martian_Mono } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio app",
  // icons: {
  //   icon: ["/favicon.ico"],
  // },
}

const martianMono = Martian_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-martian-mono",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={martianMono.variable}>
      <body className="font-martianMono">
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
