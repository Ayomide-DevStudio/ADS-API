const express = require('express')
const cookieParser = require('cookie-parser')


const otpRoute = require('./routers/sendMsg')
const mailRoute = require('./routers/adsmsgSender')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Health check
app.get('/', (req, res) => {
    res.send('ADS API is running 🚀')
})

// API routes
app.use('/api', otpRoute)
app.use('/api', mailRoute)

module.exports = app