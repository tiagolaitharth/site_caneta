<div align="center">

# ARTOOLS — Experiência digital de produto

Projeto de estudo desenvolvido em **Astro** para apresentar uma caneta de precisão por meio de uma experiência visual responsiva, componentizada e interativa.

[![Astro](https://img.shields.io/badge/Astro-7.3-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
![HTML5](https://img.shields.io/badge/HTML5-semântico-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-responsivo-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-interações-F7DF1E?style=flat-square&logo=javascript&logoColor=111)

### [Acessar demonstração na Vercel →](https://site-caneta-chi.vercel.app)

[Início](https://site-caneta-chi.vercel.app) · [Catálogo](https://site-caneta-chi.vercel.app/pagina-2) · [Detalhes do produto](https://site-caneta-chi.vercel.app/pagina-3)

</div>

![Caneta ARTOOLS fotografada em estúdio](public/assets/images/artools-pen-studio.png)

## Visão geral

ARTOOLS é um site fictício de apresentação e catálogo de canetas premium. O projeto começou como um exercício de landing page e evoluiu para uma experiência completa com três páginas conectadas, componentes reutilizáveis e interações desenvolvidas no front-end.

Sou estudante iniciante em **Desenvolvimento de Sistemas** e construí este projeto para aplicar conhecimentos de estruturação de páginas, responsividade, componentização, manipulação do DOM e organização de código.

## Minha contribuição

Neste projeto, desenvolvi:

- A estrutura completa das três páginas em Astro;
- O sistema visual e os layouts responsivos;
- Componentes compartilhados de cabeçalho, rodapé, botões, cards e ficha técnica;
- A navegação global com indicação automática da página atual;
- As animações de entrada, rolagem e interação com o ponteiro;
- O catálogo com nove modelos de caneta;
- A galeria e a seleção visual de acabamento na página de produto;
- O modal “Avise-me” com nome, e-mail, telefone e validação de campos;
- A organização dos assets, rotas e conteúdo do projeto;
- A publicação do site na Vercel.

## Projeto em números

| Entrega | Resultado |
| --- | --- |
| Páginas publicadas | 3 |
| Produtos no catálogo | 9 |
| Componentes principais reutilizáveis | 7 |
| Layout compartilhado | 1 |
| Ambientes disponíveis | Desenvolvimento e produção |

## Funcionalidades

### Página inicial

- Apresentação imersiva do produto;
- Vídeo sincronizado com a rolagem;
- Seções editoriais com animações de entrada;
- Cards com microinterações;
- Marquee contínuo e ficha técnica;
- Navegação responsiva para as demais páginas.

### Catálogo

- Grade responsiva com nove produtos;
- Cards gerados por um componente reutilizável;
- Imagem, nome, descrição e especificação de cada modelo;
- Botões que direcionam para a página de detalhes.

### Detalhes do produto

- Galeria com miniaturas selecionáveis;
- Informações de preço, acabamento e especificações;
- Seleção visual de modelos;
- Modal de interesse aberto pelo botão “Avise-me”;
- Formulário com validação nativa e confirmação visual.

## Tecnologias e ferramentas

| Tecnologia | Aplicação no projeto |
| --- | --- |
| **Astro 7** | Páginas, layouts, componentes e geração do site estático |
| **HTML5** | Estrutura semântica, navegação, mídia e formulários |
| **CSS3** | Grid, Flexbox, responsividade, animações e identidade visual |
| **JavaScript / TypeScript** | Galeria, modal, formulário e interações com rolagem e ponteiro |
| **Web APIs** | `IntersectionObserver`, `requestAnimationFrame`, `matchMedia` e `<dialog>` |
| **Node.js e npm** | Ambiente de desenvolvimento e gerenciamento de dependências |
| **Git e GitHub** | Versionamento e publicação do código-fonte |
| **Vercel** | Build e hospedagem da versão pública |

## Organização do código

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

O `Layout.astro` concentra a estrutura comum do documento. O cabeçalho e o rodapé são compartilhados entre as páginas, enquanto cards e botões recebem conteúdo por propriedades para reduzir repetição de marcação.

## Desafios e soluções

| Desafio | Solução aplicada |
| --- | --- |
| Sincronizar vídeo e rolagem sem bloquear a interface | Atualização dos quadros com `requestAnimationFrame` e controle progressivo do tempo do vídeo |
| Manter o mesmo padrão visual nas três páginas | Criação de `Layout`, cabeçalho, rodapé e botões compartilhados |
| Evitar repetição nos nove produtos do catálogo | Componente `ProductCard.astro` alimentado por uma lista de dados |
| Exibir produtos completos em diferentes telas | Grid responsivo, proporção controlada e imagens com `object-fit` adequado |
| Indicar a página atual no cabeçalho | Leitura da rota com `Astro.url.pathname` e aplicação automática do estado ativo |
| Oferecer animações com mais acessibilidade | Alternativa para usuários com `prefers-reduced-motion` e foco visível nos controles |

## Competências praticadas

- Desenvolvimento front-end;
- Construção de interfaces responsivas;
- Componentização com Astro;
- Organização e manutenção de CSS;
- Manipulação do DOM;
- Animações e microinterações;
- Navegação entre páginas;
- Controle de versão com Git;
- Deploy contínuo com GitHub e Vercel.

## Status e limitações

O projeto está publicado e disponível para navegação. A experiência visual e as interações principais estão funcionais.

O formulário “Avise-me” representa o fluxo de interface e realiza validação no navegador. Os dados ainda não são enviados para uma API ou banco de dados. Os produtos, a marca e os valores apresentados são fictícios e foram criados exclusivamente para estudo.

## Próximas melhorias

- Integrar o formulário a uma API e banco de dados;
- Criar uma rota de detalhes individual para cada produto;
- Adicionar máscara e validação aprimorada ao telefone;
- Otimizar as imagens e as métricas de carregamento;
- Adicionar testes de interface e acessibilidade;
- Implementar monitoramento de desempenho e navegação.

## Sobre mim

Sou estudante de Desenvolvimento de Sistemas em início de carreira. Utilizo projetos práticos para transformar o conteúdo estudado em experiências funcionais e fortalecer meus conhecimentos em desenvolvimento web.

Este projeto demonstra minha evolução em front-end, minha atenção à organização do código e minha capacidade de desenvolver uma interface completa a partir de uma proposta visual.
