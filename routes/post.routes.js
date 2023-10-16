import { Router } from "express";
import {
  getPostMiniature,
  setPost,
  editPost,
  deletePost,
  likePost,
  dislikePost,
} from "../controllers/post.controllers.js";

const initPostRoutes = (app, sm, jwt) => {
  const router = Router();
  router.get("/getArticle", sm, jwt, getPostMiniature);
  router.get("/:article", sm, jwt);
  router.post("/createdArticle", sm, jwt, setPost);
  router.put("/setArticle/:id", editPost);
  router.delete("/setArticle/:id", deletePost);
  router.patch("/:articleId/like", likePost);
  router.patch("/:articleId/comments", dislikePost);
  app.use("/Article", router);
};

export default initPostRoutes;
