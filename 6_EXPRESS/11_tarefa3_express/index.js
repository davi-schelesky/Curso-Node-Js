const express = require('express')
const path = require('path')
const app = express();
const port = 5000;
const usersRoutes = require('./users')


app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

app.use('/users', usersRoutes);
app.use(express.static('public'));

const basePath = path.join(__dirname, 'templates');


app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
})

app.listen(port, () => {
    console.log(`Server rodando na porta ${port}!`);
})