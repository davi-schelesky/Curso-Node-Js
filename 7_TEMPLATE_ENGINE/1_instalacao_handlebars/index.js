const express = require('express')
const exphbs = require('express-handlebars')

const app = express();
const port = 3000;

// Setup para iniciar o handlebars
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    // Forma de mostrar um HTML com handlebars
    res.render('home', {layout: false});
})

app.listen(port, () => console.log(`Server rodando na porta ${port}`));