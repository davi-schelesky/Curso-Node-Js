const express = require('express')
const path = require('path')
const app = express();
const port = 3000;

//Pasta que ficam os HTMLs
const basePath = path.join(__dirname, 'templates');

const usersRouter = require('./users');

//Config necessária para ler o body da requisição
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json());

app.use(express.static('public'));

app.use('/users', usersRouter);

// Rotas
app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
})


//Método para definir a porta usada
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`);
});