const userController = require("../controller/user-controller.js");
const express = require("express");
const { authMiddleware } = require("../middleware/auth-middleware.js");

const userRouter = express.Router();
userRouter.use(authMiddleware);

userRouter.get("/api/users/current", userController.get);
userRouter.patch("/api/users/current", userController.update);
userRouter.delete("/api/users/logout", userController.logout);

module.exports = { userRouter };
