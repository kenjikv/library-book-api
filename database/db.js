const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'mysql-database',
    // host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
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