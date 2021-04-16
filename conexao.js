const mysql = require('mysql')
const conn = mysql.createConnection({
    host : 'bir3tzd8mza4wsacdoaq-mysql.services.clever-cloud.com',
    user : 'u2bs5kn0q5uxhqci',
    password : '6rdXeQKMf33kkOJTX3QT',
    database : 'bir3tzd8mza4wsacdoaq'
})

module.exports = conn