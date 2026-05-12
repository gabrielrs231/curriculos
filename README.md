# Sistema de Gestão de Currículos

Aplicação web desenvolvida com Next.js para gerenciamento de currículos de candidatos. Permite cadastrar, visualizar, buscar e detalhar currículos de forma simples e organizada.

## Tecnologias Utilizadas

- **Next.js 15** (App Router) — framework principal
- **TypeScript** — tipagem estática
- **Tailwind CSS** — estilização e responsividade
- **shadcn/ui** — componentes de interface (Button, Card, Badge)
- **React Hook Form** — gerenciamento de formulários
- **Yup** — validação de esquemas
- **Sonner** — notificações toast
- **React Icons** — ícones da interface

## Funcionalidades

- Landing Page com apresentação dos benefícios do sistema
- Lista de Currículos com cards exibindo nome, cargo e resumo profissional
- Busca em tempo real filtrando por nome ou cargo enquanto o usuário digita
- Detalhes do Currículo com todas as informações do candidato em rota dinâmica
- Formulário de Cadastro completo com validação
- Campos dinâmicos para adicionar ou remover experiências e formações
- Máscaras de entrada em CPF, telefone e datas
- Upload fake de foto com prévia da imagem
- Feedback visual com toasts de sucesso e erro
- Dados mockados armazenados em constantes com imagens na pasta public

## Páginas

- `/` — Home (landing page com shadcn/ui)
- `/sistema/paginas/curriculos` — Lista de currículos com busca
- `/sistema/paginas/curriculos/[id]` — Detalhes do currículo
- `/sistema/paginas/curriculos/novo` — Formulário de cadastro

## Formulário de Cadastro

O formulário contém os seguintes campos com validação via Yup:

- Nome (mínimo 3 caracteres)
- Cargo desejado
- E-mail (formato válido)
- Telefone com máscara (99) 99999-9999
- CPF com máscara 999.999.999-99
- Foto (upload fake com prévia em círculo)
- Resumo profissional (mínimo 20 caracteres)
- Experiências profissionais (campos dinâmicos com useFieldArray)
- Formações acadêmicas (campos dinâmicos com useFieldArray)
- Habilidades

## Arquitetura do Projeto

```
src/
├── app/
│   ├── page.tsx                         # Home (/)
│   └── sistema/paginas/curriculos/
│       ├── page.tsx                     # Lista de currículos
│       ├── novo/page.tsx                # Formulário de cadastro
│       └── [id]/page.tsx               # Detalhes do currículo
├── components/
│   ├── Header.tsx                       # Cabeçalho com logo e navegação
│   ├── Nav.tsx                          # Menu com link ativo por rota
│   └── Footer.tsx                       # Rodapé com copyright e links
└── data/
    └── curriculos.ts                    # Dados mockados e tipos TypeScript
```

## Componentes Globais

- **Header** — exibe o nome do sistema e o menu de navegação
- **Nav** — destaca visualmente a página atual com link ativo
- **Footer** — exibe copyright e links para redes sociais

## Desafios Técnicos Implementados

- **useFieldArray** do React Hook Form para campos dinâmicos de experiências e formações, com validação individual de cada item pelo Yup
- **Busca em tempo real** filtrando a lista de currículos por nome ou cargo sem necessidade de botão
- **Toast de erro específico** exibindo a mensagem exata do campo inválido retornada pelo Yup
- **Link ativo no Nav** usando usePathname do Next.js para destacar a página atual
- **Estados de botão** com hover, focus-visible e disabled quando o formulário está inválido ou enviando

## Como rodar

```bash
git clone https://github.com/gabrielrs231/curriculos
cd curriculos
npm install
npm run dev
```

Acesse http://localhost:3000
```

Seleciona tudo no editor do GitHub com **Ctrl+A**, apaga e cola esse conteúdo. Depois clica em **Commit changes**!
