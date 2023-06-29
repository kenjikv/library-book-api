const mysql = require('mysql');

const db = mysql.createConnection({
    // host: 'mysql-database',
    // host: 'localhost',
    host: 'db-mysql-garbage.mysql.database.azure.com',
    port: '3306',
    user: 'library',
    password: 'Garbage15963*',
    database: 'db-library-book'
});

db.connect((err) => {
    if (err) {
        console.log('Conexión a la base de datos no esta establecida');
        // throw err;
    } else {
        console.log('Conexión a la base de datos establecida');
    }
});

module.exports = db;