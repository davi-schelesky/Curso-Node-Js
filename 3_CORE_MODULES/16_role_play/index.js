import express from 'express';

const app = express();
const port = 3000;

app.get('/message', (req, res) => {
    res.send("Bem vindo ao meu primeiro projeto em Node Js");
})

app.listen(port, () => {
    console.log(`Sevido rodando na porta ${port}`)
})