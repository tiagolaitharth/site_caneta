# ARTOOLS — Site de produto em Astro

> Projeto de estudo desenvolvido por um aluno iniciante em Desenvolvimento de Sistemas para praticar criação de interfaces, componentização e interações no front-end.

![Astro](https://img.shields.io/badge/Astro-7.3-BC52EE?style=flat-square&logo=astro&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-semântico-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-responsivo-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-interações-F7DF1E?style=flat-square&logo=javascript&logoColor=111)

![Prévia do projeto ARTOOLS](public/assets/images/artools-pen-studio.png)

## Sobre o projeto

ARTOOLS é uma experiência digital fictícia para apresentar uma caneta de precisão. O projeto reúne uma landing page, um catálogo com diferentes modelos e uma página de detalhes do produto.

O site foi criado para transformar um conceito visual em uma interface navegável, responsiva e organizada em componentes reutilizáveis.

## Objetivo de aprendizado

Este projeto foi desenvolvido para praticar:

- Estruturação de páginas com Astro;
- Criação e reutilização de componentes;
- HTML semântico e organização de conteúdo;
- Layouts responsivos com CSS;
- Animações e transições de interface;
- Manipulação do DOM com JavaScript;
- Navegação entre páginas;
- Organização de arquivos e versionamento com Git.

## O que desenvolvi

- **Landing page:** apresentação imersiva do produto com vídeo controlado pela rolagem, animações de entrada, cards e ficha técnica;
- **Catálogo:** grade responsiva com nove modelos de caneta, informações resumidas e componentes reutilizáveis;
- **Página de produto:** galeria de imagens, seleção visual de acabamento, preço, especificações e detalhes do modelo;
- **Formulário “Avise-me”:** modal com campos de nome, e-mail e telefone, validação nativa e confirmação visual;
- **Navegação global:** cabeçalho compartilhado que conecta as três páginas e indica a rota atual;
- **Design responsivo:** adaptação para computadores, tablets e celulares;
- **Acessibilidade básica:** textos alternativos, labels, estados de foco, atributos ARIA e suporte a redução de movimento.

## Páginas

| Página | Rota | Conteúdo |
| --- | --- | --- |
| Início | `/` | Apresentação da marca, experiência visual e especificações da caneta |
| Catálogo | `/pagina-2` | Nove modelos de produto em cards reutilizáveis |
| Produto | `/pagina-3` | Galeria, detalhes, acabamentos e formulário de interesse |

## Tecnologias e ferramentas

| Tecnologia | Como foi utilizada |
| --- | --- |
| **Astro 7** | Estrutura do projeto, criação das páginas, layouts e componentes `.astro` |
| **HTML5** | Estrutura semântica, formulários, navegação e elementos de mídia |
| **CSS3** | Grid, Flexbox, responsividade, animações, transições e identidade visual |
| **JavaScript / TypeScript** | Galeria, modal, validação do formulário e interações durante rolagem e movimento do ponteiro |
| **Web APIs** | `IntersectionObserver`, `requestAnimationFrame`, `matchMedia` e elemento `<dialog>` |
| **Node.js e npm** | Instalação das dependências e execução dos comandos do projeto |
| **Git e GitHub** | Versionamento e publicação do código-fonte |
| **Google Fonts** | Uso das famílias Inter, Inter Tight, JetBrains Mono e Cormorant Garamond |

## Componentização

Os elementos repetidos foram separados em componentes para facilitar manutenção e reutilização:

```text
src/
├── components/
│   ├── Button.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── PenMarquee.astro
│   ├── ProductCard.astro
│   ├── StoryFeatureCard.astro
│   └── TechnicalSpecs.astro
├── layouts/
│   └── Layout.astro
└── pages/
    ├── index.astro
    ├── pagina-2.astro
    └── pagina-3.astro
```

O `Layout.astro` reúne a estrutura compartilhada do documento, enquanto `Header.astro` e `Footer.astro` mantêm a navegação e a identidade visual consistentes entre as páginas.

## Como executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 22.12 ou superior;
- npm, instalado com o Node.js;
- Git, caso queira clonar o repositório.

### Instalação

Depois de baixar ou clonar o repositório, abra a pasta do projeto e execute:

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:4321` no navegador.

### Build de produção

```bash
npm run build
npm run preview
```

## Principais aprendizados

Durante o desenvolvimento, pratiquei como dividir uma interface em componentes menores, manter um padrão visual entre páginas e criar interações com JavaScript sem perder a adaptação para diferentes tamanhos de tela.

Também trabalhei com hierarquia visual, estados de navegação, feedback de ações e organização do código para facilitar futuras alterações.

## Limitações atuais

- O formulário “Avise-me” possui validação e confirmação na interface, mas ainda não envia os dados para um servidor;
- Os produtos utilizam uma página de detalhes demonstrativa compartilhada;
- O conteúdo, a marca e os valores apresentados são fictícios e foram criados para fins de estudo.

## Próximos passos

- Integrar o formulário a uma API ou banco de dados;
- Criar rotas individuais para cada produto;
- Adicionar máscara e validação aprimorada ao telefone;
- Otimizar imagens e métricas de carregamento;
- Adicionar testes de interface e acessibilidade;
- Publicar uma demonstração atualizada do projeto.

## Sobre mim

Sou estudante iniciante em Desenvolvimento de Sistemas e estou construindo projetos práticos para desenvolver minhas habilidades em front-end, organização de código e criação de experiências para a web.

Este repositório registra parte do meu processo de aprendizado e demonstra o que já consigo desenvolver com as tecnologias apresentadas acima.
