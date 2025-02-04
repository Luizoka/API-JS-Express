// Importa o módulo mysql2
const mysql = require('mysql2');

// Cria um pool de conexões com o banco de dados MySQL
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'API',
    port: 3307 // Porta do MySQL
});

// Obtém uma conexão do pool e verifica se há erros
pool.getConnection((err, connection) => {
    if (err) {
        console.log("Deu erro");
    } else {
        console.log("Conexão bem sucedida!!");
    }
});

// Exporta o pool de conexões como uma Promise
module.exports = pool.promise();