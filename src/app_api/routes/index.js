/** todo glavne route **/
const router = require('express').Router()

const userRoutes = require('./sub-routes/user')
const oglasRoutes = require('./sub-routes/oglas')
const authRoutes = require('./sub-routes/authentication')

router.use('/user',userRoutes)
router.use('/oglas',oglasRoutes)
router.use('/auth',authRoutes)

module.exports = router
