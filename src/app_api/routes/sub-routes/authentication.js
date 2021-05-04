const router = require('express').Router()
const authController = require('../../controllers/authentication')

router
    .get('/login',authController.login)
    .get('/register',authController.register)

module.exports = router
