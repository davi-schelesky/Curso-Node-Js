const express = require('express')
const path = require('path')
const app = express();
const port = 3000;

//Pasta que ficam os HTMLs
const basePath = path.join(__dirname, 'templates');


//Config necessária para ler o body da requisição
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json());


// Rotas
app.get('/users/create', (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
})

app.post('/users/save', (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    res.sendFile(`${basePath}/userform.html`);
    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`);
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    
    // Como se fosse a leitura da tabela users e resgatar um user
    console.log(`Estamos buscando pelo usuário: ${id}`);

    res.sendFile(`${basePath}/users.html`);
})

//Método para definir a porta usada
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`);
});