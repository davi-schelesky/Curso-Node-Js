const express = require('express')
const path = require('path')
const app = express();
const port = 3000;

const basePath = path.join(__dirname, 'templates');

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;

    // Como se fosse a leitura da tabela users e resgatar um user
    console.log(`Estamos buscando pelo usuário: ${id}`);

    res.sendFile(`${basePath}/users.html`);
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`);
});