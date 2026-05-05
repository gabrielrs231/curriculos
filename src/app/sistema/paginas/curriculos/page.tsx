"use client"

import { useState } from "react"
import { curriculos } from "@/data/curriculos"
import Link from "next/link"
import { FiUser, FiBriefcase, FiSearch } from "react-icons/fi"

export default function ListaCurriculos() {
  const [busca, setBusca] = useState("")

  const filtrados = curriculos.filter(
    (c) =>
      c.nome.toLowerCase().includes(busca.toLowerCase()) ||
      c.cargo.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Currículos</h1>
        <Link
          href="/sistema/paginas/curriculos/novo"
          className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm hover:bg-slate-700 transition-colors"
        >
          + Cadastrar novo
        </Link>
      </div>

      <div className="relative mb-6">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Buscar por nome ou cargo..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
      </div>

      {filtrados.length === 0 ? (
        <p className="text-slate-500 text-center py-12">Nenhum currículo encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtrados.map((curriculo) => (
            <Link
              key={curriculo.id}
              href={`/sistema/paginas/curriculos/${curriculo.id}`}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={curriculo.foto}
                  alt={curriculo.nome}
                  className="w-12 h-12 rounded-full object-cover bg-slate-200"
                />
                <div>
                  <p className="font-semibold text-slate-800 flex items-center gap-1">
                    <FiUser size={14} /> {curriculo.nome}
                  </p>
                  <p className="text-sm text-slate-500 flex items-center gap-1">
                    <FiBriefcase size={14} /> {curriculo.cargo}
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600 line-clamp-3">{curriculo.resumo}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}