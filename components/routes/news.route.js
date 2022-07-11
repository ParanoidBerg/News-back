const { Router } = require("express")
const { newsController } = require("../controllers/news.controller")

const router = Router()

router.get("/news", newsController.getNews)
router.get("/news/:id", newsController.getNewsByCat)
router.post("/news", newsController.postNews)
router.delete("/news/:id", newsController.delNews)
router.patch("/news/:id", newsController.patchNews)

module.exports = router
