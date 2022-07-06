const { Router } = require("express")

const router = Router()

router.use(require('./news.route'))
router.use(require('./user.route'))
router.use(require('./comments.route'))
router.use(require('./categories.route'))

module.exports = router