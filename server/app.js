const express = require('express')
const path = require('path')

const app = express()

/* bodyParser */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* Static Path */
const publicPath = path.join(__dirname, '../client')
app.use(express.static(publicPath))

/* Passport Load */
const passport = require('./config/passport/')
app.use(passport.initialize())

/* Routes */
const authRoutes = require('./routes/auth/')
const privateRoutes = require('./routes/private/')
app.use(authRoutes)
app.use(privateRoutes)

module.exports = app
