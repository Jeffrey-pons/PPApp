import { sanitizeMiddleware } from "../middlewares/sanitize.middleware.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";
import initPostRoutes from "./post.routes.js";

import initUserRoutes from "./user.routes.js";

const initRoutes = (app) => {
  initUserRoutes(app, sanitizeMiddleware, verifyToken);
  initPostRoutes(app, sanitizeMiddleware, verifyToken);
};

export default initRoutes;
