require('dotenv').config()

// Get an instance of mysql we can use in the app
const mysql = require('mysql')

const HOST = process.env.HOST
const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
const DATABASE = process.env.DATABASE

// Create a 'connection pool' using the provided credentials
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : HOST,
    user            : USER,
    password        : PASSWORD,
    database        : DATABASE
})

// Export it for use in our application
module.exports.pool = pool;