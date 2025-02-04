// Importa a configuração do banco de dados
const db = require('../config/database');

// Função para listar todos os produtos
async function listar(req, res) {
    // Executa a consulta SQL para selecionar todos os produtos
    const [rows] = await db.query('SELECT * FROM produtos');
    // Retorna os produtos em formato JSON
    res.json(rows);
}

// Função para criar um novo produto
async function criar(req, res) {
    // Extrai nome e preço do corpo da requisição
    const { nome, preco } = req.body;
    // Executa a consulta SQL para inserir um novo produto
    await db.query('INSERT INTO produtos (nome, preco) VALUES (?, ?)', [nome, preco]);
    // Retorna uma mensagem de sucesso
    res.status(201).json({ message: 'Produto criado com sucesso!!' });
}

// Função para atualizar um produto existente
async function atualizar(req, res) {
    // Extrai o ID do produto dos parâmetros da URL
    const { id } = req.params;
    // Extrai nome e preço do corpo da requisição
    const { nome, preco } = req.body;
    // Executa a consulta SQL para atualizar o produto
    await db.query("UPDATE produtos SET nome = ?, preco = ? WHERE id = ?", [nome, preco, id]);
    // Retorna uma mensagem de sucesso
    res.json({ message: "Produto atualizado com sucesso!!" });
}

// Função para deletar um produto
async function deletar(req, res) {
    // Extrai o ID do produto dos parâmetros da URL
    const { id } = req.params;
    // Executa a consulta SQL para deletar o produto
    await db.query('DELETE FROM produtos WHERE id = ?', [id]);
    // Retorna uma mensagem de sucesso
    res.json({ message: "Produto deletado com sucesso!!" });
}

// Exporta as funções do controlador
module.exports = {
    listar,
    criar,
    atualizar,
    deletar
};

// Códigos de status HTTP
// 200 - OK
// 201 - Created
// 400 - Bad Request
// 404 - Not Found
// 500 - Internal Server Error