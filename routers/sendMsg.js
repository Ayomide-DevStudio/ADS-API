const express = require('express')


const verifyApiKey = require('../middlewares/verifyMiddleware')
const createMsg = require('../controllers/createMsg')


const otpRoute =  express.Router()

otpRoute 
    .post('/send', verifyApiKey, createMsg)

module.exports = otpRoute