const mysql = require('mysql')
require('dotenv').config({ path: '../../.env' });

const dbUser = process.env.MYSQLUSER;
const dbPassword = process.env.MYSQLPASSWORD;

try{
    const pool = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        port: 3307,
        user: dbUser,
        password: dbPassword,
        database: 'nodemysql2'
    });
    console.log('Conectado ao MySQL');
    module.exports = pool;

} catch(error) {
    console.log(error);
}