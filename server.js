const express = require('express')

const cookieParser = require('cookie-parser')
const createMsg = require('./controllers/createMsg')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// routes
app.use('/api', createMsg)

// IMPORTANT: export app for Vercel
module.exports = app
