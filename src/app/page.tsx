import Link from "next/link"
import { FiUsers, FiFileText, FiSearch } from "react-icons/fi"

export default function Home() {
  return (
    <div className="space-y-16">

      {/* Hero */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Gerencie currículos com facilidade
        </h1>
        <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto">
          Cadastre, visualize e organize candidatos em um só lugar. Simples, rápido e eficiente.
        </p>
        <Link
          href="/sistema/paginas/curriculos"
          className="bg-slate-900 text-white px-6 py-3 rounded-md hover:bg-slate-700 transition-colors text-sm"
        >
          Acessar o sistema
        </Link>
      </section>

      {/* Benefícios */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
          <FiUsers size={32} className="mx-auto text-slate-700 mb-3" />
          <h3 className="font-bold text-slate-800 mb-2">Gestão Centralizada</h3>
          <p className="text-slate-500 text-sm">Todos os candidatos em um único painel organizado.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
          <FiFileText size={32} className="mx-auto text-slate-700 mb-3" />
          <h3 className="font-bold text-slate-800 mb-2">Cadastro Completo</h3>
          <p className="text-slate-500 text-sm">Registre experiências, formações e habilidades detalhadas.</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
          <FiSearch size={32} className="mx-auto text-slate-700 mb-3" />
          <h3 className="font-bold text-slate-800 mb-2">Busca em Tempo Real</h3>
          <p className="text-slate-500 text-sm">Encontre candidatos por nome ou cargo instantaneamente.</p>
        </div>
      </section>

    </div>
  )
}