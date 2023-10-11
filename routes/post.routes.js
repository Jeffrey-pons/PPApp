import { Router } from "express";
import {
  getPost,
  setPost,
  editPost,
  deletePost,
  likePost,
  dislikePost,
} from "../controllers/post.controllers.js";

const initPostRoutes = (app, sm, jwt) => {
  const router = Router();
  router.get("/setArticle", sm, jwt, getPost);
  router.post("/createdArticle", sm, jwt, setPost);
  router.put("/setArticle/:id", editPost);
  router.delete("/setArticle/:id", deletePost);
  router.patch("/:articleId/like", likePost);
  router.patch("/:articleId/comments", dislikePost);
  app.use("/Article", router);
};

export default initPostRoutes;
