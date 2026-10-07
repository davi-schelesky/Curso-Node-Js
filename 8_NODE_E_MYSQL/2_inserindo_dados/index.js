require('dotenv').config({ path: '../../.env' });

const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express();

// Config para ter acesso ao body da req em JSON
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json());


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title;
    const pageqty = req.body.pageqty;

    const sql =`INSERT INTO books (title, pageqty) VALUES ('${title}', '${pageqty}')`;
    connection.query(sql, (error) => {
        if (error) {
            console.log(error);
            process.exit();
        }
        res.redirect('/');
    });
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