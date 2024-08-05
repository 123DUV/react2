const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const conexion = require('./configBD/configBD.js')


app.get('/', (req, res) => {
    let config = {
        method: "GET",
        maxBodylength: Infinity,
        url: "https://api.jsonbin.io/v3/b/6654e46bad19ca34f8701ca7",
        headers: {
            'Content-Type': 'application/json',
            "X-Master-Key": "$2a$10$WQluOHcKUZmklnCjHnmOfOant.9JMsOvhj/GMzUvrYQOVf.VDHkhO"

        }
    }
    axios(config)
        .then(result => {
            res.send(result.data.record);
        })
})

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));



const user = require('./controller/userController');
app.use("/registro-usuario", upload.single("foto"),user.register);
 app.use('/login', user.login);


const PORT = 3001;
app.listen(PORT, () => {

    console.log('servidor corriendo en el puerto', PORT);
});



app.get("/todos-los-usuarios", (req, res) => {
    conexion.connect(function (err) {
        if (err) throw err;
                                      //bdreactlocal
        conexion.query("SELECT * FROM railway", function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        })
    })

})

const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, './public/images'))
    },
    filename: function (req, file, cb){
        cb(null, `${Date.now()}`)
    }
})

const upload = multer({storage})