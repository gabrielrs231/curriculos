"use client"

import Link from "next/link"
import Nav from "./Nav"

export default function Header() {
  return (
    <header className="bg-slate-900 text-white py-4 px-6 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        GestãoCurrículos
      </Link>
      <Nav />
    </header>
  )
}