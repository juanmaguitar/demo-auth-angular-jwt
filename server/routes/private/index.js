const express = require('express')
const router = express.Router()

const passport = require(__base + '/config/passport')

const showPrivateData = require('./handlers/showPrivateData')
const showPublicData = require('./handlers/showPublicData')

//router.use(  )

router.get('/private/data', passport.authenticate('jwt', { session: false }), showPrivateData)
router.get('/public/data', showPublicData)

module.exports = router
