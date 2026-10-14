const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn');

// Importa o modelo q será utilizado no db
const User = require('./models/User')
const Address = require('./models/Address')

const app = express();

// Config para ter acesso ao body da req em JSON
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', async (req, res) => {
    //Busca todas as informações da tabela users
    //o (raw: true) transforma os itens da busca em um array de objetos
    const users = await User.findAll({raw: true});

    res.render('home', { users: users });
})

app.get('/users/create', (req, res) => {
    res.render('addUser');
})

app.post('/users/create', async(req, res) => {
    const name = req.body.name;
    const occupation = req.body.occupation;
    let nesLetter = req.body.newsLetter;

    if(nesLetter === 'on') {
        nesLetter = true;
    } else {
        nesLetter = false;
    }

    // Cria os campos com os dados recebidos (a parte de segurança é feita automaticamente pelo sequelize)
    await User.create({name, occupation, nesLetter});
    
    res.redirect('/');
})

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;

    //Realiza o filtro desejado através do WHERE
    const user = await User.findOne({raw: true, where: {id: id}});

    res.render('userview', { user });
})

app.post('/users/delete/:id', async (req, res) => {
    const id = req.params.id;

    await User.destroy({where: {id: id}});

    res.redirect('/');
})

app.get('/users/edit/:id', async (req, res) => {
    const id = req.params.id;

    try{
        // Realiza a busca dos dados de endereço também
        const user = await User.findOne({include: Address, where: {id: id}});

        //Como não usamos o (raw: true) precisamos usar o get() para conseguirmos usá-lo no handlebars
        res.render('useredit', { user: user.get({ plain: true }) });
    } catch(error) {
        console.log(error);
    }
})

app.post('/users/update', async (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const occupation = req.body.occupation;
    let nesLetter = req.body.newsLetter;

    if(nesLetter === 'on') {
        nesLetter = true;
    } else {
        nesLetter = false;
    }

    const userData = {
        id,
        name,
        occupation,
        nesLetter
    }
    await User.update(userData, {where: {id: id}});

    res.redirect('/');
})

app.post('/address/create', async (req, res) => {
    const UserId = req.body.UserId;
    const street = req.body.street;
    const number = req.body.number;
    const city = req.body.city;

    const address = {
        UserId,
        street,
        number,
        city
    }
    await Address.create(address);
    res.redirect(`/users/edit/${UserId}`);
})

//Executa a conexão com o banco logo quando o server é iniciado
//não iniciando se a conexão não acontecer
conn.sync().then(() => {
    app.listen(3000);
    console.log("Server rodando na porta 3000!");
}).catch((error) => console.log(error));

//Quando a conexão é feita com o (force: true) toda vez que o server for iniciado as tabelas serão reiniciadas, perdendo os dados contidos
/*
conn.sync({force: true}).then(() => {
    app.listen(3000);
    console.log("Server rodando na porta 3000!")
}).catch((error) => console.log(error));
*/