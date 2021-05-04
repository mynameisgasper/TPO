const router = require('express').Router()
const authController = require('../../controllers/authentication')

router
    .post('/login',authController.login)
    .post('/register',authController.register)

module.exports = router
