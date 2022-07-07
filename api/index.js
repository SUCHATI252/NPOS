import express from 'express'
import body from 'body-parser'
// import mysql from 'mysql'
// import db from '../models/connection.js'
const app = express()
app.use(body.urlencoded({ extended: true }))
app.use(express.json())
app.use(body.json())

app.post('/users', (_req, res) => {
  res.json({ username: 'neeb' })
})
// const bool = mysql.createPool({
//   connectTimeout: 10,
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'npos'
// })

// app.post('/users', (_req, res) => {
//   const sql = 'SELECT * FROM users'
//   db.query(sql, (err, rows) => {
//     if (!err) {
//       res.json(rows)
//     } else {
//       res.send(err)
//     }
//   })
// bool.getConnection((err, connection) => {
//   if (err) { return res.json(err) }
//   connection.query('select * from sales', (err, rows) => {
//     connection.release()
//     if (!err) {
//       res.send(rows)
//     } else {
//       res.send(err)
//     }
//   })
// })
// })
export default app
