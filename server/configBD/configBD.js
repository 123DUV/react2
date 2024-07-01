const mysql= require('mysql2');

const connection = mysql.createConnection({
    host: "sql10.freesqldatabase.com",
    user: "sql10717270",
    password: "qhwkh9GJXp",
    database: "sql10717270",
    port: 3306,
})

connection.connect((error)=>{
    if(!error)
        {console.log("Conexion exitosa")}
    else{
        console.log("Conexion fallida")
    }
})
module.exports = connection