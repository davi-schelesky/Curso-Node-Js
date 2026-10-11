const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn');

// Importa o modelo q será utilizado no db
const User = require('./models/User')

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

//Executa a conexão com o banco logo quando o server é iniciado
//não iniciando se a conexão não acontecer
conn.sync().then(() => {
    app.listen(3000);
    console.log("Server rodando na porta 3000!");
}).catch((error) => console.log(error));