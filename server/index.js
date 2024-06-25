const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');




app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());



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





const user = require('./controller/userController');
app.use("/registro-usuario", user.registerBD);
 //app.use('/login', user.login);


const PORT = 3001;
app.listen(PORT, () => {

    console.log('servidor corriendo en el puerto', PORT);
});

const connection = require('./configBD/configBD.js');

app.get("/todos-los-usuarios", (req, res) => {
  const sql = "SELECT * FROM new_table";
  
  connection.query(sql, function (err, result, fields) {
    if (err) {
      console.error("Error al obtener usuarios:", err);
      res.status(500).send("Error al obtener usuarios");
    } else {
      res.send(result);
    }
  });
});
