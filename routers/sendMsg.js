const express = require('express')

const adsmailSender =  require('../controllers/msgCreator')
const verifyApiKey = require('../middlewares/verifyMiddleware')


const otpRoute =  express.Router()

otpRoute 
    .post('/send', verifyApiKey, adsmailSender)
