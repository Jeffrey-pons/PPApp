import { Router } from "express";
import {
  getPostMiniature,
  setPost,
  editPost,
  deletePost,
  likePost,
  dislikePost,
  getPostProfile,
} from "../controllers/post.controllers.js";
import upload from "../config/multer.config.js";

const initPostRoutes = (app, sm, jwt) => {
  const router = Router();
  router.get("/getArticle", sm, jwt, getPostMiniature);
  router.get("/getArticleProfile", sm, jwt, getPostProfile);

  router.post(
    "/createdArticle",
    upload.array("articleImages", 10),
    sm,
    jwt,
    setPost
  );
  router.put("/setArticle/:id", editPost);
  router.delete("/setArticle/:id", deletePost);
  router.patch("/:articleId/like", likePost);
  router.patch("/:articleId/comments", dislikePost);
  app.use("/Article", router);
};

export default initPostRoutes;
