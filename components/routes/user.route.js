const { Router } = require("express");
const { userController } = require('../controllers/user.controller');

const router = Router();

router.post("/users", userController.createUser);
router.post("/login", userController.logIn);
router.get("/users", userController.getUser);

module.exports = router;