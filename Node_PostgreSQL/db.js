const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: '1111',
    host: "localhost",
    port: 5432,
    data: "postgres"
})

module.exports = pool



// const { Sequelize } = require('sequelize')

// module.exports = new Sequelize(
//     process.env.DB_NAME, // Название БД
//     process.env.DB_USER, // Пользователь
//     process.env.DB_PASSWORD, // ПАРОЛЬ
//     {
//         dialect: 'postgres',
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT
//     }
// )