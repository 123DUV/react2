const mysql= require('mysql2');

const connection = mysql.createConnection({
    host: "sql10.freesqldatabase.com",
    user: "sql10715861",
    password: "Gwqq1fIpXc",
    database: "sql10715861",
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