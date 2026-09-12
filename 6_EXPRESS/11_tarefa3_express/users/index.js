const express = require('express')
const path = require('path')
const router = express.Router()

const basePath = (path.join(__dirname, '../templates'));

router.get('/create', (req, res) => {
    res.sendFile(`${basePath}/usersform.html`);
})

router.post('/save', (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const age = req.body.age;
    console.log(`O nome do usuário é ${name} e tem ${age} anos`);

    res.sendFile(`${basePath}/usersform.html`);
})

module.exports = router;