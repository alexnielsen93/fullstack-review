const express = require('express')
require('dotenv').config()
const app = express()
const massive = require('massive')
const session = require('express-session')
const controller = require('./controller')

app.use(express.json())

const { SESSION_SECRET, SERVER_PORT, CONNECTION_STRING } = process.env
app.use(session({
  secret:SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie:{
    maxAge: 1000*60*60*24
  }
}))

massive(CONNECTION_STRING).then((database)=>{
  app.set('db',database)
  console.log('database set')
  console.log(database.listTables())

  app.listen(SERVER_PORT, ()=>{console.log(`listening on ${SERVER_PORT}`)})
})

app.get('/api/users', controller.getUsers)
app.post('/auth/register', controller.register)
app.post('/auth/login', controller.login)