const express = require('express')
const cookieParser = require('cookie-parser')
const createMsg = require('./controllers/createMsg')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Health check route (fixes Cannot GET /)
app.get('/', (req, res) => {
  res.send('ADS API is running 🚀')
})

// API routes (DO NOT COMMENT THIS OUT)
app.use('/api', createMsg)

module.exports = app
