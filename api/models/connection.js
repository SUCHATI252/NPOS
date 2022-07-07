import mysql from 'mysql'
// import consola from 'consola'
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'npos'
})

connection.connect((err) => {
  if (err) { return err }
})

export default connection
