const router = require('express').Router()
const oglasController = require('../../controllers/oglas')

const jwt = require('express-jwt');
const authentication = jwt({
    secret: process.env.JWT_GESLO,
    userProperty: 'payload',
    algorithms: ['HS256']
});

router
    .post('/', authentication, oglasController.create)
    .get('/',oglasController.getAll)
    .get('/:id',oglasController.getOne)
    .put('/:id', authentication, oglasController.update)
    .delete('/:id', authentication, oglasController.deleteOne)

module.exports = router