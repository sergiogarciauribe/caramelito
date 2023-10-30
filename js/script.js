let sql = require("mysql");

let conexion = sql.createConnection({
    host: "localhost",
    database: "supermercado",
    user: "root",
    password: ""
})

conexion.connect(function(error){
    if (error){
        throw error;
        conexion.end();
    }else {
        console.log('Conexión Exitosa');
        conexion.end();
    }
})