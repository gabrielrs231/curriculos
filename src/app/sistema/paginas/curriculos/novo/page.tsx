"use client"

import { useState } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from "sonner"
import { FiPlus, FiTrash2 } from "react-icons/fi"

const schema = yup.object({
  nome: yup.string().min(3, "Nome muito curto").required("Nome obrigatório"),
  cargo: yup.string().min(2, "Cargo muito curto").required("Cargo obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  telefone: yup.string().min(14, "Telefone inválido").required("Telefone obrigatório"),
  cpf: yup.string().min(14, "CPF inválido").required("CPF obrigatório"),
  resumo: yup.string().min(20, "Resumo muito curto (mín. 20 caracteres)").required("Resumo obrigatório"),
  experiencias: yup.array().of(
    yup.object({
      empresa: yup.string().required("Empresa obrigatória"),
      cargo: yup.string().required("Cargo obrigatório"),
      inicio: yup.string().required("Data de início obrigatória"),
      fim: yup.string().required("Data de fim obrigatória"),
      descricao: yup.string().required("Descrição obrigatória"),
    })
  ),
  formacoes: yup.array().of(
    yup.object({
      instituicao: yup.string().required("Instituição obrigatória"),
      curso: yup.string().required("Curso obrigatório"),
      inicio: yup.string().required("Data de início obrigatória"),
      fim: yup.string().required("Data de fim obrigatória"),
    })
  ),
  habilidades: yup.string().required("Habilidades obrigatórias"),
})

type FormData = yup.InferType<typeof schema>

export default function NovoCurriculo() {
  const [preview, setPreview] = useState<string | null>(null)
  const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      experiencias: [{ empresa: "", cargo: "", inicio: "", fim: "", descricao: "" }],
      formacoes: [{ instituicao: "", curso: "", inicio: "", fim: "" }],
    }
  })

  const { fields: expFields, append: appendExp, remove: removeExp } = useFieldArray({ control, name: "experiencias" })
  const { fields: formFields, append: appendForm, remove: removeForm } = useFieldArray({ control, name: "formacoes" })

  const onSubmit = (data: FormData) => {
    console.log(data)
    toast.success("Currículo cadastrado com sucesso!", {
      description: `${data.nome} foi adicionado ao sistema.`
    })
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Cadastrar Currículo</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Dados pessoais */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <h2 className="font-bold text-slate-700">Dados Pessoais</h2>

          <div>
            <label className="text-sm text-slate-600">Nome</label>
            <input {...register("nome")} className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-slate-400" />
            {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
          </div>

          <div>
            <label className="text-sm text-slate-600">Cargo Desejado</label>
            <input {...register("cargo")} className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-slate-400" />
            {errors.cargo && <p className="text-red-500 text-xs mt-1">{errors.cargo.message}</p>}
          </div>

          <div>
            <label className="text-sm text-slate-600">E-mail</label>
            <input {...register("email")} className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-slate-400" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div>
           <input
             {...register("telefone")}
              placeholder="(00) 00000-0000"
              maxLength={15}
              onChange={(e) => {
              let v = e.target.value.replace(/\D/g, "")
              v = v.replace(/^(\d{2})(\d)/, "($1) $2")
              v = v.replace(/(\d{5})(\d)/, "$1-$2")
              e.target.value = v
              register("telefone").onChange(e)
              }}
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
          </div>

          <div>
           <input
              {...register("cpf")}
                placeholder="000.000.000-00"
                maxLength={14}
                onChange={(e) => {
                let v = e.target.value.replace(/\D/g, "")
                 v = v.replace(/(\d{3})(\d)/, "$1.$2")
                 v = v.replace(/(\d{3})(\d)/, "$1.$2")
                 v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
                 e.target.value = v
                register("cpf").onChange(e)
               }}
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          <div>
          <div>
            <label className="text-sm text-slate-600">Foto</label>
              <input
                type="file"
                accept="image/*"
                 onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    const url = URL.createObjectURL(file)
                    setPreview(url)
                     }
                    }}
                    className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-slate-400"
                     />
                    {preview && (
                  <img
                  src={preview}
                  alt="Preview"
                  className="mt-3 w-24 h-24 rounded-full object-cover border border-slate-200"
                   />
                   )}
                </div>
              <label className="text-sm text-slate-600">Resumo Profissional</label>
            <textarea {...register("resumo")} rows={4} className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-slate-400" />
            {errors.resumo && <p className="text-red-500 text-xs mt-1">{errors.resumo.message}</p>}
          </div>
        </div>

        {/* Experiências */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <h2 className="font-bold text-slate-700">Experiências Profissionais</h2>
          {expFields.map((field, index) => (
            <div key={field.id} className="border border-slate-100 rounded-lg p-4 space-y-3 relative">
              <input {...register(`experiencias.${index}.empresa`)} placeholder="Empresa" className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" />
              <input {...register(`experiencias.${index}.cargo`)} placeholder="Cargo" className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" />
              <div className="flex gap-2">
                <input {...register(`experiencias.${index}.inicio`)} placeholder="Início (mm/aaaa)" className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" />
                <input {...register(`experiencias.${index}.fim`)} placeholder="Fim (mm/aaaa)" className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" />
              </div>
              <textarea {...register(`experiencias.${index}.descricao`)} placeholder="Descrição" rows={2} className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" />
              {index > 0 && (
                <button type="button" onClick={() => removeExp(index)} className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1">
                  <FiTrash2 size={14} /> Remover
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => appendExp({ empresa: "", cargo: "", inicio: "", fim: "", descricao: "" })} className="text-slate-600 hover:text-slate-900 text-sm flex items-center gap-1">
            <FiPlus size={14} /> Adicionar experiência
          </button>
        </div>

        {/* Formações */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <h2 className="font-bold text-slate-700">Formações Acadêmicas</h2>
          {formFields.map((field, index) => (
            <div key={field.id} className="border border-slate-100 rounded-lg p-4 space-y-3">
              <input {...register(`formacoes.${index}.instituicao`)} placeholder="Instituição" className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" />
              <input {...register(`formacoes.${index}.curso`)} placeholder="Curso" className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" />
              <div className="flex gap-2">
                <input {...register(`formacoes.${index}.inicio`)} placeholder="Início (mm/aaaa)" className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" />
                <input {...register(`formacoes.${index}.fim`)} placeholder="Fim (mm/aaaa)" className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" />
              </div>
              {index > 0 && (
                <button type="button" onClick={() => removeForm(index)} className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1">
                  <FiTrash2 size={14} /> Remover
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={() => appendForm({ instituicao: "", curso: "", inicio: "", fim: "" })} className="text-slate-600 hover:text-slate-900 text-sm flex items-center gap-1">
            <FiPlus size={14} /> Adicionar formação
          </button>
        </div>

        {/* Habilidades */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <h2 className="font-bold text-slate-700">Habilidades</h2>
          <input {...register("habilidades")} placeholder="Ex: React, Node.js, Figma" className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400" />
          {errors.habilidades && <p className="text-red-500 text-xs mt-1">{errors.habilidades.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-slate-900 text-white py-3 rounded-md hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Salvando..." : "Cadastrar Currículo"}
        </button>

      </form>
    </div>
  )
}