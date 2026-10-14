const express = require('express');
const exphbs = require('express-handlebars');

//Inicia a conexão com o db e chama o model Task 
const conn = require('./db/conn');
const Task = require('./models/Task');

//Chama as rotas de tasks
const tasksRoutes = require('./routes/tasksRoutes');

const app = express();

//Configuração do template-engine (handlebars)
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

//Permite o acesso ao corpo da requisição
app.use(
    express.urlencoded({
        extended: true
    })
)

//Permite o uso do formato JSON pelo express
app.use(express.json());
//Permite o uso da pasta public pelo express
app.use(express.static('public'));
//Direcionas as rotas de tasks ao tasksRoutes
app.use('/tasks', tasksRoutes);

//Inicia o servidor esperando a conexão com o db ser executada primeiro através do Sync()
conn.sync().then(() => {
    app.listen(3000);
    console.log('Server rodando na porta 3000!');
}) .catch((error) => console.log(error));