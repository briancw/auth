const Sequelize = require('sequelize')
const {dbUsername, dbPassword, dbName} = require('../keys.js')

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: dbName,
    username: dbUsername,
    host: 'localhost',
    port: '5432',
    password: dbPassword,
    logging: false,
    // operatorsAliases: false,
})

module.exports = sequelize
