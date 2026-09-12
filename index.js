const express = require('express')
const cookieParser = require('cookie-parser')

const createMsg = require('./controllers/createMsg')
const msgCreator = require('./controllers/msgCreator')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Health check
app.get('/', (req, res) => {
    res.send('ADS API is running 🚀')
})

// API routes
app.use('/api', createMsg)
app.use('/api', msgCreator)

module.exports = app