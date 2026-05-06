

import { curriculos } from "@/data/curriculos"
import Link from "next/link"
import { FiMail, FiPhone, FiUser, FiBriefcase, FiBook, FiStar, FiArrowLeft } from "react-icons/fi"

export default async function DetalhesCurriculo({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const curriculo = curriculos.find((c) => c.id === id)

  if (!curriculo) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500 text-lg">Currículo não encontrado.</p>
        <Link href="/sistema/paginas/curriculos" className="text-slate-800 underline mt-4 inline-block">
          Voltar para a lista
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        href="/sistema/paginas/curriculos"
        className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors mb-6 text-sm"
      >
        <FiArrowLeft /> Voltar
      </Link>

      {/* Cabeçalho */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center gap-6 mb-4">
        <img
          src={curriculo.foto}
          alt={curriculo.nome}
          className="w-24 h-24 rounded-full object-cover bg-slate-200"
        />
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <FiUser /> {curriculo.nome}
          </h1>
          <p className="text-slate-500 flex items-center gap-2 mt-1">
            <FiBriefcase /> {curriculo.cargo}
          </p>
          <p className="text-slate-500 flex items-center gap-2 mt-1">
            <FiMail /> {curriculo.email}
          </p>
          <p className="text-slate-500 flex items-center gap-2 mt-1">
            <FiPhone /> {curriculo.telefone}
          </p>
          <p className="text-slate-500 flex items-center gap-2 mt-1">
            <FiUser /> CPF: {curriculo.cpf}
          </p>
        </div>
      </div>

      {/* Resumo */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-4">
        <h2 className="font-bold text-slate-800 mb-2">Resumo Profissional</h2>
        <p className="text-slate-600 text-sm">{curriculo.resumo}</p>
      </div>

      {/* Experiências */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-4">
        <h2 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
          <FiBriefcase /> Experiências Profissionais
        </h2>
        {curriculo.experiencias.map((exp, i) => (
          <div key={i} className="mb-4 border-l-2 border-slate-200 pl-4">
            <p className="font-semibold text-slate-800">{exp.cargo}</p>
            <p className="text-sm text-slate-500">{exp.empresa} · {exp.inicio} – {exp.fim}</p>
            <p className="text-sm text-slate-600 mt-1">{exp.descricao}</p>
          </div>
        ))}
      </div>

      {/* Formações */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-4">
        <h2 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
          <FiBook /> Formações Acadêmicas
        </h2>
        {curriculo.formacoes.map((form, i) => (
          <div key={i} className="mb-4 border-l-2 border-slate-200 pl-4">
            <p className="font-semibold text-slate-800">{form.curso}</p>
            <p className="text-sm text-slate-500">{form.instituicao} · {form.inicio} – {form.fim}</p>
          </div>
        ))}
      </div>

      {/* Habilidades */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <h2 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
          <FiStar /> Habilidades
        </h2>
        <div className="flex flex-wrap gap-2">
          {curriculo.habilidades.map((hab, i) => (
            <span key={i} className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full">
              {hab}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}