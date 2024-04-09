const express =require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('saludando desde el backend')  

})

const user = require('./controller/userController');
app.use("/registro-usuario", user.register);
app.use('/login', user.login);


const PORT = 3001;
app.listen(PORT,()=>{

    console.log('servidor corriendo en el puerto', PORT);
});