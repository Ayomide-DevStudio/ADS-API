
const express = require('express')

const msgCreator =  require('../controllers/msgCreator')
const verifyApiKey = require('../middlewares/verifyMiddleware')


const mailRoute =  express.Router()

mailRoute 
    .post('/send', verifyApiKey, createMsg)
