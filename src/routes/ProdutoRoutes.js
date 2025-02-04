// Importa o módulo express
const express = require('express');
// Importa o controlador de produtos
const ProdutoController = require("../controllers/ProdutoController");

// Cria um roteador do Express
const router = express.Router();

// Define a rota para listar produtos
router.get('/produtos', ProdutoController.listar);
// Define a rota para criar um novo produto
router.post('/produtos', ProdutoController.criar);
// Define a rota para atualizar um produto existente
router.put('/produtos/:id', ProdutoController.atualizar);
// Define a rota para deletar um produto
router.delete('/produtos/:id', ProdutoController.deletar);

// Exporta o roteador
module.exports = router;