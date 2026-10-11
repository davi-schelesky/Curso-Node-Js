const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn');

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

app.listen(3000, () => console.log(`Server rodando na porta 3000!`));