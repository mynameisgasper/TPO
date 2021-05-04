const router = require('express').Router()
const oglasController = require('../../controllers/oglas')

router
    .post('/',oglasController.create)
    .get('/',oglasController.getAll)
    .get('/:id',oglasController.getOne)
    .put('/:id',oglasController.update)
    .delete('/:id',oglasController.delete)

module.exports = router