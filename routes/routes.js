import { jwtMiddleware } from "../middlewares/jwt.middleware.js";
import { sanitizeMiddleware } from "../middlewares/sanitize.middleware.js";

import initUserRoutes from "./user.routes.js";

const initRoutes = (app) => {
  initUserRoutes(app, sanitizeMiddleware, jwtMiddleware);
};

export default initRoutes;
