import { Router } from "express";
import { userController } from "../controllers/user.controllers.js";

const initUserRoutes = (app, sm, jwt) => {
  const router = Router();
  router.post("/register", sm, userController.register);
  router.post("/login", sm, userController.login);
  router.post("/lost-password", sm, userController.lostPassword);
  router.post("/check-reset-password-token", sm, userController.getUserbyToken);
  router.post("/save-new-password", sm, userController.saveNewPassword);
  router.get("/profile", jwt, userController.getUserProfile);
  router.delete("/delete", jwt, userController.deleteUser);
  app.use("/user", router);
};

export default initUserRoutes;
