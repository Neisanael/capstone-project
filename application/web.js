const express = require("express");
const { publicRouter } = require("../route/public-api.js");
const { errorMiddleware } = require("../middleware/error-middleware.js");
const { userRouter } = require("../route/user-api.js");

const web = express();
web.use(express.json());
web.use(publicRouter);
web.use(userRouter);
web.use(errorMiddleware);

module.exports = web;
