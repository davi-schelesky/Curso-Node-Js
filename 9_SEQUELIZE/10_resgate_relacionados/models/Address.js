const { DataTypes } = require('sequelize')
const db = require('../db/conn')
const User = require('./User')

const Address = db.define('Address', {
    street: {
        type: DataTypes.STRING,
        required: true,
    },
    number: {
        type: DataTypes.STRING,
        required: true,
    },
    city: {
        type: DataTypes.STRING,
        required: true,
    }
});

//Cria o relacionamento com a tabela users (pertence a users) 1:N
User.hasMany(Address);
Address.belongsTo(User);

module.exports = Address;