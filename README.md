# API-JS-Express

Este projeto implementa uma API RESTful utilizando Node.js, Express e MySQL, permitindo operações CRUD em produtos.

## Pré-requisitos

- Node.js (v14 ou superior)
- MySQL (v5.7 ou superior)

## Instalação

### 1. Instale o Node.js

Baixe o Node.js [aqui](https://nodejs.org/) e siga as instruções para o seu sistema operacional.

### 2. Clone o repositório

```bash
git clone https://github.com/Luizoka/API-JS-Express.git
cd API-JS-Express
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure o Banco de Dados MySQL

Baixe e instale o MySQL [aqui](https://dev.mysql.com/downloads/installer/). Crie um banco de dados chamado "API" e ajuste as credenciais no arquivo database.js:

```js
// Exemplo de configuração no arquivo database.js
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'API',
    port: 3307 // Atualize se necessário
});
```

### 5. Execute a API

Para iniciar o servidor, use:

```bash
npm start
```

ou

```bash
npm run dev
```