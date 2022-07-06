const { Router } = require("express")
const { newsController } = require("../controllers/news.controller")

const router = Router()

router.get("/news", newsController.getNews)
router.get("/news/:id", newsController.getNewsByCat)
router.post("news", newsController.postNews)

module.exports = router
