const mysql = require('mysql2');

const connection = mysql.createConnection({

    host: process.env.DB_HOST || "127.0.0.1",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "bdreactlocal",

   

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
