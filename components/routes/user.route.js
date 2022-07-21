const { Router } = require("express");
const { userController } = require('../controllers/user.controller');
const authMiddlewares = require('../middlewares/auth.middlewares')

const router = Router();

router.post("/users", userController.createUser);
router.post("/login", userController.logIn);
router.get("/users", userController.getUser);
router.delete("/users/:id", authMiddlewares, userController.delUser);

module.exports = router;