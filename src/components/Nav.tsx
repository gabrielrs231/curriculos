"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/sistema/paginas/curriculos", label: "Currículos" },
    { href: "/sistema/paginas/curriculos/novo", label: "Cadastrar" },
  ]

  return (
    <nav className="flex gap-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-sm hover:text-slate-300 transition-colors ${
            pathname === link.href
              ? "text-white font-bold underline underline-offset-4"
              : "text-slate-400"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}