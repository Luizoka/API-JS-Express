// Importa o módulo express
const express = require('express');
// Importa as rotas de produtos
const ProdutoRoutes = require('./routes/ProdutoRoutes');

// Cria uma aplicação Express
const app = express();

// Middleware para parsear JSON no corpo das requisições
app.use(express.json());
// Usa as rotas de produtos na aplicação
app.use(ProdutoRoutes);

// Inicia o servidor na porta 3000
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));