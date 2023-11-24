import { web } from "./application/web.js";
import { logger } from "./application/logging.js";

const PORT = process.env.PORT || 8000;
web.listen(8000, () => {
  logger.info("Start at port 8000");
});
