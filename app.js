const web = require("./application/web.js");
const logger = require("./application/logging.js");
const express = require('express')

const app = express()

const PORT = process.env.PORT || 8000;
web.listen(PORT, () => {
  logger.info(`Start at port ${PORT}`);
});
