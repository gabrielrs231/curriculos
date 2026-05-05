import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Toaster } from "sonner"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gestão de Currículos",
  description: "Sistema de gestão de currículos",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.className} flex flex-col min-h-screen bg-slate-50`}>
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}