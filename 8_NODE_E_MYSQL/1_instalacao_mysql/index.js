const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
require('dotenv').config({ path: '../../.env'});

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view-engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
})

// Setup para conectar o mysql com o Node
const password = process.env.MYSQLPASSWORD;
const user = process.env.MYSQLUSER;

const connection = mysql .createConnection({
    host: 'localhost',
    port: 3307,
    user: user,
    password: password,
    database: "nodemysql2"
})

//Inicia a conexão
connection.connect((error) => {
    if(error){
        console.log(error);
        process.exit();
    } 
    console.log("Conectado ao MySQL!");
})

app.listen(3000, () => console.log(`Server rodando na porta 3000!`));