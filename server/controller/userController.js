// const fs = require('fs').promises;
// const path = require('path');

// const userFilePath = path.join(__dirname,'../../src/componentes/usuariosRegistrados.json'
// );

// const controller = {
//     register: async function(req, res){
//         try{
//             const userData = await fs.readFile(userFilePath, 'utf8');
//             const users = JSON.parse(userData);

//             const ultimo =users.length;..
//             const usuarioNuevo={
//                 id: ultimo +1,
//                 departamento: req.body.departamento,
//                 ciudad: req.body.ciudad,
//                 identificacion: req.body.identificacion,
//                 nombres: req.body.nombres,
//                 apellidos: req.body.apellidos,
//                 email: req.body.email,
//                 direccion: req.body.direccion,
//                 telefono: req.body.telefono,
//                 fechaNacimiento: req.body.fechaNacimiento,
//                 password: req.body.password,
//                 estado: 'activo',
//                 rol: 'usuario',
//                 fecha_Creacion: new Date(),
//             };
//             for(x of users){
//                 if(
//                     x.email==req.body.email ||
//                     x.identificacion==req.body.identificacion
//                 ){
//                     res.status(400).send('el email ya existe');
//                     return;
//                 }
//             }
//             users.push(usuarioNuevo);

//             await fs.writeFile(userFilePath, JSON.stringify(users, null, 4));
//             res.status(200).send('usuario creado con exito');
//         }catch(error){
//             console.error('error al procesar el registro: ',error);
//             res.status(500).send('error interno del servidor',error);
//         }
//     },
//     login: async function(req, res){
//         try {
//             const userData = await fs.readFile(userFilePath, "utf-8");
//             const users = JSON.parse(userData);

//             for (x of users) {
//                 if(
//                     x.email === req.body.email &&
//                     x.password === req.body.password &&
//                     x.rol === req.body.rol
//                 ){
//                     return res.json({
//                         nombres: x.nombres,
//                         apellidos: x.apellidos,
//                         email: x.email,
//                     });
//                 }

//                 }
//                 res.json({ title: "error"})
//         } catch (error){
//             console.error("Error al procesar el registro",error);
//             res.status(500).send("Error interno del servidor");
//         }
//     }


// };

// module.exports = controller;





const axios = require('axios');
const connection = require('../configBD/configBD.js');

const controller = {
    register: function (req, res) {
        const config = {
            method: "GET",
            maxBodyLength: Infinity,
            url: 'https://api.jsonbin.io/v3/b/6654e46bad19ca34f8701ca7',
            headers: {
                'Content-Type': 'application/json',
                "X-Master-Key": "$2a$10$WQluOHcKUZmklnCjHnmOfOant.9JMsOvhj/GMzUvrYQOVf.VDHkhO"
            }
        };

        axios(config)
            .then(result => {
                const records = Array.isArray(result.data.record) ? result.data.record : [];
                const newId = records.length + 1;

                const usuarioNuevo = {
                    id: newId,
                    identificacion: req.body.identificacion,
                    nombre: req.body.nombres,
                    apellidos: req.body.apellidos,
                    email: req.body.email,
                    direccion: req.body.direccion,
                    telefono: req.body.telefono,
                    fechaNacimiento: req.body.fechaNacimiento,
                    password: req.body.password,
                };

                if (records.some(x => x.email === req.body.email)) {
                    return res.status(400).send("Usuario ya existe en la Base de Datos");
                }

                // Verificar identificación en MySQL antes de insertar el nuevo registro
                const sqlCheck = 'SELECT identificacion FROM railway.new_table WHERE identificacion = ?';
                connection.query(sqlCheck, [usuarioNuevo.identificacion], (error, results) => {
                    if (error) {
                        console.error("Error al verificar identificación en MySQL:", error);
                        return res.status(500).send("Error interno al verificar identificación en MySQL");
                    }

                    if (results.length > 0) {
                        return res.status(400).send("Identificación repetida");
                    } else {
                        // Insertar nuevo registro en JSONBin
                        records.push(usuarioNuevo);

                        axios.put(config.url, { record: records }, {
                            headers: config.headers
                        })
                        .then(response => {
                            if (response.status === 200) {
                                const values = [
                                    usuarioNuevo.identificacion,
                                    usuarioNuevo.nombre,
                                    usuarioNuevo.apellidos,
                                    usuarioNuevo.email,
                                    usuarioNuevo.direccion,
                                    usuarioNuevo.telefono,
                                    usuarioNuevo.fechaNacimiento,
                                    usuarioNuevo.password,
                                ];

                                const sqlInsert = 'INSERT INTO railway.new_table (identificacion, nombre, apellidos, email, direccion, telefono, fechaNacimiento, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
                                connection.query(sqlInsert, values, (error, results) => {
                                    if (error) {
                                        console.error("Error al insertar en MySQL:", error);
                                        return res.status(500).send("Error interno al registrar usuario en MySQL");
                                    }
                                    console.log("Usuario registrado en MySQL correctamente");
                                    res.status(200).send('Usuario registrado correctamente');
                                });
                            } else {
                                res.status(400).send("No se pudo actualizar en JSONBin");
                            }
                        })
                        .catch(error => {
                            console.error("Error al actualizar en JSONBin:", error);
                            res.status(500).send("Error interno al actualizar en JSONBin");
                        });
                    }
                });
            })
            .catch(error => {
                console.error("Error al consultar JSONBin:", error);
                res.status(500).send("Error interno al consultar JSONBin");
            });
    },

    login: async function(req, res) {
        try {
            const userData = await fs.readFile(userFilePath, "utf-8");
            const users = JSON.parse(userData);

            for (const x of users) {
                if (
                    x.email === req.body.email &&
                    x.password === req.body.password &&
                    x.rol === req.body.rol
                ) {
                    return res.json({
                        nombres: x.nombres,
                        apellidos: x.apellidos,
                        email: x.email,
                    });
                }
            }
            res.json({ title: "error" });
        } catch (error) {
            console.error("Error al procesar el registro", error);
            res.status(500).send("Error interno del servidor");
        }
    }
};

module.exports = controller;
