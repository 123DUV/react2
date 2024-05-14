const fs = require('fs').promises;
const path = require('path');

const userFilePath = path.join(__dirname,'../../src/componentes/usuariosRegistrados.json'
);

const controller = {
    register: async function(req, res){
        try{
            const userData = await fs.readFile(userFilePath, 'utf8');
            const users = JSON.parse(userData);

            const ultimo =users.length;
            const usuarioNuevo={
                id: ultimo +1,
                departamento: req.body.departamento,
                ciudad: req.body.ciudad,
                identificacion: req.body.identificacion,
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                email: req.body.email,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                fechaNacimiento: req.body.fechaNacimiento,
                password: req.body.password,
                estado: 'activo',
                rol: 'usuario',
                fecha_Creacion: new Date(),
            };
            for(x of users){
                if(
                    x.email==req.body.email ||
                    x.identificacion==req.body.identificacion
                ){
                    res.status(400).send('el email ya existe');
                    return;
                }
            }
            users.push(usuarioNuevo);

            await fs.writeFile(userFilePath, JSON.stringify(users, null, 4));
            res.status(200).send('usuario creado con exito');
        }catch(error){
            console.error('error al procesar el registro: ',error);
            res.status(500).send('error interno del servidor',error);
        }
    },
    login: async function(req, res){
        try {
            const userData = await fs.readFile(userFilePath, "utf-8");
            const users = JSON.parse(userData);

            for (x of users) {
                if(
                    x.email === req.body.email &&
                    x.password === req.body.password &&
                    x.rol === req.body.rol
                ){
                    return res.json({
                        nombres: x.nombres,
                        apellidos: x.apellidos,
                        email: x.email,
                    });
                }

                }
                res.json({ title: "error"})
        } catch (error){
            console.error("Error al procesar el registro",error);
            res.status(500).send("Error interno del servidor");
        }
    }

    
};

module.exports = controller;