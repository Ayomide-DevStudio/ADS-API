const express = require('express')

const createMsg =  require('../controllers/createMsg')
const verifyApiKey = require('../middlewares/verifyMiddleware')


const otpRoute =  express.Router()

otpRoute 
    .post('/send', verifyApiKey, createMsg)