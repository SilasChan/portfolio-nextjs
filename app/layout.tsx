import { Martian_Mono } from "next/font/google"
import { Provider } from "@/components/Providers"
import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Silas Chan | Cloud & Cyber Security Portfolio",
  description:
    "Portfolio of Silas Chan, an aspiring Cloud Engineer based in Brisbane, Australia. Explore cloud projects, enterprise IT experience, networking and cyber security skills, and professional certifications.",
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
    <html lang="en" className={martianMono.variable} suppressHydrationWarning>
      <body className="font-martianMono">
        <Provider>
          <Navbar />
          <main className="relative overflow-hidden">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
