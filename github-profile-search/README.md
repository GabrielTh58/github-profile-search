# GitHub User Finder 🔍

Este projeto é uma aplicação web que permite buscar e visualizar informações públicas de qualquer usuário do GitHub, como nome, bio e avatar, consumindo a API oficial do GitHub.

## ✅ Funcionalidades

- Buscar usuários do GitHub por nome de usuário
- Exibir avatar, nome, login e biografia do usuário
- Tratamento de erro para usuários não encontrados
  
##  🛠 Tecnologias Utilizadas

- **React** com Vite
- **TypeScript**
- **Tailwind CSS v4**
- **Context API** para gerenciamento de estado
- **Fetch API** para requisições HTTP

## 📂 Estrutura do Projeto

```
src/
├── assets/                 # Imagens e ícones
├── components/             # Componentes reutilizáveis (Header, SearchInput, UserProfile, etc)
├── context/                # Contexto global do perfil
├── interfaces/             # Tipagens TypeScript (IUser, Context)
├── services/               # Requisições à API do GitHub
├── App.tsx                 # Estrutura principal da aplicação
├── main.tsx                # Ponto de entrada da aplicação
└── index.css               # Estilos globais e customizações do Tailwind
```

## 📸 Demonstração

![Demonstração do projeto](./public/preview.png) 

## ✅ Como Executar Localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/github-user-finder.git
cd github-user-finder
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

4. **Acesse no navegador:**

```
http://localhost:5173
```

## 🌟 Considerações Finais
Este projeto foi desenvolvido com foco em boas práticas de código, clareza e responsividade. Foi uma ótima oportunidade para aplicar conhecimentos em React, TypeScript, Context API e integração com APIs externas.

