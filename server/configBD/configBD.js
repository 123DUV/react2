const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || "sql10.freesqldatabase.com",
    user: process.env.DB_USER || "sql10717270",
    password: process.env.DB_PASSWORD || "qhwkh9GJXp",
    database: process.env.DB_NAME || "sql10717270",
    port: process.env.DB_PORT || 3306,
});

connection.connect((error) => {
    if (!error) {
        console.log("Conexión exitosa");
    } else {
        console.error("Conexión fallida:", error);
    }
});

module.exports = connection;
