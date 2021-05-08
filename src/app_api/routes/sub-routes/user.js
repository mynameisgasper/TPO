const router = require('express').Router()
const userController = require('../../controllers/user')

const jwt = require('express-jwt');
const authentication = jwt({
    secret: process.env.JWT_GESLO,
    userProperty: 'payload',
    algorithms: ['HS256']
});

router
    .get('/comment',userController.getComments)
    .delete('/comment',authentication,userController.deleteComment)
    .post('/comment',authentication,userController.addComment)
    .post('/rating',authentication,userController.addRating)
    .put('/:id', authentication, userController.update)
    .delete('/:id', authentication, userController.deleteOne)
    .post('/', authentication, userController.create)
    .get('/', authentication, userController.getAll)
    .get('/:id',userController.getOne)

module.exports = router
