const express = require('express')
const exphbs = require('express-handlebars')

const app = express();
const port = 3000;

// Setup para iniciar o handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    const user = {
        name: 'Matheus',
        surname: 'Battisti',
        age: 30
    }

    const palavra = 'Teste';

    res.render('home', { user: user, palavra });
})

app.listen(port, () => console.log(`Server rodando na porta ${port}`));