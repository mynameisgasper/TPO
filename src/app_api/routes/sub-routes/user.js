const router = require('express').Router()
const userController = require('../../controllers/user/user')
const userAdvancedController = require('../../controllers/user/user.advanced')

const jwt = require('express-jwt');
const authentication = jwt({
    secret: process.env.JWT_GESLO,
    userProperty: 'payload',
    algorithms: ['HS256']
});

router
    .get('/comment',userAdvancedController.getComments)
    .delete('/comment',authentication,userAdvancedController.deleteComment)
    .post('/comment',authentication,userAdvancedController.addComment)
    .post('/rating',authentication,userAdvancedController.addRating)


router
    .get('/oglasi', authentication, userAdvancedController.getAllOglasi)

router
    .post('/contact', authentication, userAdvancedController.addContact)
    .delete('/contact', authentication, userAdvancedController.deleteContact)

router
    .put('/:id', authentication, userController.update)
    .delete('/:id', authentication, userController.deleteOne)
    .get('/:id',userController.getOne)
    .post('/', authentication, userController.create)
    .get('/', authentication, userController.getAll)




module.exports = router
