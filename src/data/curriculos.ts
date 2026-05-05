export type Curriculo = {
  id: string
  nome: string
  cargo: string
  email: string
  telefone: string
  cpf: string
  resumo: string
  foto: string
  experiencias: {
    empresa: string
    cargo: string
    inicio: string
    fim: string
    descricao: string
  }[]
  formacoes: {
    instituicao: string
    curso: string
    inicio: string
    fim: string
  }[]
  habilidades: string[]
}

export const curriculos: Curriculo[] = [
  {
    id: "1",
    nome: "Ana Paula Silva",
    cargo: "Desenvolvedora Frontend",
    email: "ana.silva@email.com",
    telefone: "(47) 99999-1111",
    cpf: "123.456.789-00",
    resumo: "Desenvolvedora com 3 anos de experiência em React e Next.js.",
    foto: "/fotos/ana.jpg",
    experiencias: [
      {
        empresa: "Tech Solutions",
        cargo: "Desenvolvedora Junior",
        inicio: "01/2022",
        fim: "12/2023",
        descricao: "Desenvolvimento de interfaces web responsivas."
      }
    ],
    formacoes: [
      {
        instituicao: "FURB",
        curso: "Sistemas de Informação",
        inicio: "01/2019",
        fim: "12/2022"
      }
    ],
    habilidades: ["React", "Next.js", "Tailwind CSS", "TypeScript"]
  },
  {
    id: "2",
    nome: "Carlos Eduardo Souza",
    cargo: "Designer UX/UI",
    email: "carlos.souza@email.com",
    telefone: "(47) 99999-2222",
    cpf: "987.654.321-00",
    resumo: "Designer focado em experiência do usuário com 4 anos de mercado.",
    foto: "/fotos/carlos.jpg",
    experiencias: [
      {
        empresa: "Agência Criativa",
        cargo: "Designer Pleno",
        inicio: "03/2020",
        fim: "atualmente",
        descricao: "Criação de interfaces e prototipagem em Figma."
      }
    ],
    formacoes: [
      {
        instituicao: "UNIVALI",
        curso: "Design Digital",
        inicio: "01/2018",
        fim: "12/2021"
      }
    ],
    habilidades: ["Figma", "Adobe XD", "Prototipagem", "Design System"]
  },
  {
    id: "3",
    nome: "Mariana Costa",
    cargo: "Analista de Dados",
    email: "mariana.costa@email.com",
    telefone: "(47) 99999-3333",
    cpf: "456.789.123-00",
    resumo: "Analista com experiência em Python, SQL e visualização de dados.",
    foto: "/fotos/mariana.jpg",
    experiencias: [
      {
        empresa: "DataCorp",
        cargo: "Analista Junior",
        inicio: "06/2021",
        fim: "atualmente",
        descricao: "Análise e tratamento de dados para relatórios gerenciais."
      }
    ],
    formacoes: [
      {
        instituicao: "UFSC",
        curso: "Ciência da Computação",
        inicio: "01/2017",
        fim: "12/2021"
      }
    ],
    habilidades: ["Python", "SQL", "Power BI", "Excel"]
  }
]