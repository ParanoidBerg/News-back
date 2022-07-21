const { Router } = require("express");
const { newsController } = require("../controllers/news.controller");
const authMiddlewares = require("../middlewares/auth.middlewares");
const multerMiddlewares = require("../middlewares/multer.middlewares");

const router = Router();

router.get("/news", newsController.getNews);
router.get("/news/:id", newsController.getNewsByCat);
router.post("/news", multerMiddlewares.single("assets"), authMiddlewares, newsController.postNews);
router.delete("/news/:id", authMiddlewares, newsController.delNews);
router.patch("/news/:id", authMiddlewares, newsController.patchNews);

module.exports = router;    
