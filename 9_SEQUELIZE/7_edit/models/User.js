// Dá acesso a todos os tipos de dados do banco
const { DataTypes } = require('sequelize')

//Traz a conexão feita com o banco
const db = require('../db/conn')

//Define o model a ser utilizado
const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        required: true
    },
    nesLetter: {
        type: DataTypes.BOOLEAN,
    }
});

module.exports = User;