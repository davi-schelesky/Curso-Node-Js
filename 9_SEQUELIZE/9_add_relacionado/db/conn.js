require('dotenv').config({ path: '../../.env' });
const { Sequelize } = require('sequelize');

const dbUser = process.env.MYSQLUSER;
const dbPassword = process.env.MYSQLPASSWORD;

//Criando a conexão com o sequelize
const sequelize = new Sequelize('nodesequelize1', dbUser, dbPassword, {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
});

try{
    //Executa a conexão criada do sequelize
    sequelize.authenticate();
    console.log('Conectado com sucesso usando o sequelize!');
} catch(error) {
    console.log('Não foi possível conectar: ', error);
}

module.exports = sequelize;