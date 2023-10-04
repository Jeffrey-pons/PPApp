import { Router } from "express";
import { userController } from "../controllers/user.controllers.js";

const initUserRoutes = (app, sm, jwt) => {
  const router = Router();
  router.post("/register", sm, userController.register);
  router.post("/login", sm, userController.login);
  router.post("/lost-password", sm, userController.lostPassword);
  app.use("/user", router);
};

export default initUserRoutes;
