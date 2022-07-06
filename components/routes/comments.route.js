const { Router } = require("express")
const { commentsController } = require("../controllers/comments.controller")
const authMiddlewares = require('../middlewares/auth.middlewares')

const router = Router()

router.post('/comments', authMiddlewares, commentsController.postComment),
router.delete('/comments/:id', authMiddlewares, commentsController.delComments)
router.get('comments', commentsController.getCommentsByNews)

module.exports = router