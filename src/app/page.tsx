import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FiUsers, FiFileText, FiSearch } from "react-icons/fi"

export default function Home() {
  return (
    <div className="space-y-16">

      {/* Hero */}
      <section className="text-center py-16">
        <Badge className="mb-4" variant="secondary">Sistema de RH</Badge>
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Gerencie currículos com facilidade
        </h1>
        <p className="text-slate-500 text-lg mb-8 max-w-xl mx-auto">
          Cadastre, visualize e organize candidatos em um só lugar. Simples, rápido e eficiente.
        </p>
        <Button asChild size="lg">
          <Link href="/sistema/paginas/curriculos">
            Acessar o sistema
          </Link>
        </Button>
      </section>

      {/* Benefícios */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center">
            <FiUsers size={32} className="mx-auto text-slate-700 mb-2" />
            <CardTitle className="text-base">Gestão Centralizada</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-500 text-sm text-center">Todos os candidatos em um único painel organizado.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <FiFileText size={32} className="mx-auto text-slate-700 mb-2" />
            <CardTitle className="text-base">Cadastro Completo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-500 text-sm text-center">Registre experiências, formações e habilidades detalhadas.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <FiSearch size={32} className="mx-auto text-slate-700 mb-2" />
            <CardTitle className="text-base">Busca em Tempo Real</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-500 text-sm text-center">Encontre candidatos por nome ou cargo instantaneamente.</p>
          </CardContent>
        </Card>
      </section>

    </div>
  )
}