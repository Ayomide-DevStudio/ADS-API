const express = require('express')

require('dotenv').config()
const cookieParser = require('cookie-parser')
const createMsg = require('./controllers/createMsg')






const app = express()
const port = process.env.PORT || 9000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

//router
app.use('/api', createMsg)


app.listen(port, () => {
    console.log(`Server is listening on ${port} successfully `)
})
