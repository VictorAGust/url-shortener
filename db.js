const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    Storage: './database.sqlite'
})

module.exports = sequelize;