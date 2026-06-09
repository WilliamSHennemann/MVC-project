# Aula 05 - API MVC de Produtos

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express&logoColor=white)
![License](https://img.shields.io/badge/license-ISC-blue?style=for-the-badge)

API e aplicação MVC desenvolvida em Node.js para gerenciar produtos em um ambiente didático.
O projeto organiza rotas, controllers, models, views e middlewares seguindo a separação de responsabilidades.
A documentação interna foi estruturada com JSDoc para melhorar manutenção, leitura do código e suporte ao IntelliSense no VS Code.

## Stack Tecnológica

- Node.js
- Express
- Express Session
- Body Parser
- EJS
- JavaScript
- MongoDB/Mongoose como referência de configuração em `Config/db.js`

## Estrutura do Projeto

```text
├── Config/
│   └── db.js
├── Controller/
│   ├── authController.js
│   └── UserController.js
├── middlewares/
│   └── auth.js
├── Model/
│   ├── ProdutoModel.js
│   └── User.js
├── Routes/
│   ├── authRoutes.js
│   └── Routes.js
├── View/
│   ├── contato.ejs
│   ├── index.ejs
│   ├── login.ejs
│   ├── produto.ejs
│   ├── produtoDetalhes.ejs
│   ├── produtoEditar.ejs
│   └── sobre.ejs
├── Public/Css
│   └── Style.css
└── server.js
```

## Instalação e Execução

Clone o repositório:

```bash
git clone https://github.com/WilliamSHennemann/MVC-project.git
```

Acesse a pasta do projeto:

```bash
cd MVC-project
```

Instale as dependências:

```bash
npm install
```

Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

Acesse no navegador:

```text
http://localhost:3000
```

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto seguindo o modelo abaixo. Não publique senhas reais no GitHub.

```env
PORT=3000
SESSION_SECRET=sua_chave_secreta_aqui
DB_URI=mongodb://localhost:27017/aula05
NODE_ENV=development
```

## Rotas Principais

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/login` | Exibe o formulário de login |
| POST | `/login` | Processa autenticação |
| GET | `/logout` | Encerra a sessão |
| GET | `/` | Exibe a página inicial |
| GET | `/produtos` | Lista produtos |
| POST | `/produtos` | Cria um produto |
| GET | `/produtos/:id` | Exibe detalhes de um produto |
| GET | `/produtos/:id/editar` | Exibe formulário de edição |
| POST | `/produtos/:id/editar` | Atualiza produto |
| GET | `/produtos/:id/deletar` | Remove produto |

## Documentação Interna

Os arquivos `Model/ProdutoModel.js`, `Model/User.js`, `Controller/UserController.js` e `Controller/authController.js` usam JSDoc para documentar classes, funções, parâmetros, retornos e exceções.

No VS Code, passe o mouse sobre métodos como `findProductById`, `createProduct` ou `postLogin` para validar a exibição dos tipos e descrições.
