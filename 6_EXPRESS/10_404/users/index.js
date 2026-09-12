const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '../templates');


router.get('/create', (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
})

router.post('/save', (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    res.sendFile(`${basePath}/userform.html`);
    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    
    // Como se fosse a leitura da tabela users e resgatar um user
    console.log(`Estamos buscando pelo usuário: ${id}`);

    res.sendFile(`${basePath}/users.html`);
})

module.exports = router;