const router = require('express').Router()
const authController = require('../../controllers/authentication')

const jwt = require('express-jwt');
const authentication = jwt({
    secret: process.env.JWT_GESLO,
    userProperty: 'payload',
    algorithms: ['HS256']
});

router
    .post('/login',authController.login)
    .post('/register',authController.register)
    .put('/pass',authentication,authController.updatePassword)

module.exports = router
