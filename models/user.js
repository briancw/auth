const Sequelize = require('sequelize')
const sequelize = require('./db.js')

const Model = sequelize.define('user', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    passwordHash: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = Model
