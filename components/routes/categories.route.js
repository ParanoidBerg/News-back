const { Router } = require("express")
const { categoryController } = require("../controllers/categories.controller")

const router = Router()

router.post('/categories', categoryController.createCat),
router.get('/categories', categoryController.getCat)

module.exports = router