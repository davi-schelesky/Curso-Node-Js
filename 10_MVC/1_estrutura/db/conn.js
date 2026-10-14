const { Sequelize } = require('sequelize')
require('dotenv').config({ path: '../../.env' });

const dbUser = process.env.MYSQLUSER;
const dbPassword = process.env.MYSQLPASSWORD;

const sequelize = new Sequelize('nodemvc', dbUser, dbPassword, {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
})

try {
    sequelize.authenticate();
    console.log(`Conectado com sucesso ao banco!`);
} catch (error) {
    console.log(`Não foi possível conectar o banco: ${error}`)
}

exports.default = sequelize