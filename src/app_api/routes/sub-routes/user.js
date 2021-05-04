const router = require('express').Router()
const userController = require('../../controllers/user')

router
    .post('/',userController.create)
    .get('/',userController.getAll)
    .get('/:id',userController.getOne)
    .put('/:id',userController.update)
    .delete('/:id',userController.delete)

module.exports = router
