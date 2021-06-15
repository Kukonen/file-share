const {Client} = require('pg')
require('dotenv').config()

const client = new Client({
    host: process.env.HOST_BD,
    port: process.env.PORT_BD,
    user: process.env.USER_BD,
    password: process.env.PASSWORD_BD,
    database: process.env.DATABASE_BD
  })
  
  client.connect(err => {
      if (err) {
        console.error('connection error', err.stack)
      } else {
        console.log('connected')
      }
    })
  
    module.exports = client;