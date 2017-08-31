const express = require('express')
const bodyParser = require('body-parser')

const passport = require('./config/passport/')

const authRoutes = require('./routes/auth/')
const privateRoutes = require('./routes/private/')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(passport.initialize())

app.use(authRoutes)
app.use(privateRoutes)

module.exports = app

