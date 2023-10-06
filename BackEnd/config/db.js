//base de datos para pruebas unitarias
const mysql = require('mysql2')

const mysqlConnection = mysql.createConnection({
    host: 'database-1.cnxc83q1b3zd.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'MysqlAws23',
    database: 'ayd2_fase2_test',
    charset: 'utf8mb4', // 
})

mysqlConnection.connect(function(err) {
    if(err) return console.error('mysqlConnection - ', err)
    console.log('Database AWS is connected')
})

module.exports = mysqlConnection