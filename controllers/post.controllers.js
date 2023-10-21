import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getPostMiniature = async (req, res) => {
  const postId = req.body.postId;
  try {
    const articles = await Post.find(postId);
    return res.status(200).json(articles);
  } catch (error) {
    console.error("Erreur lors de la récupération des articles :", error);
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des articles" });
  }
};

export const setPost = async (req, res) => {
  try {
    const { title, content, category, articleImages, thumbnail, userId } =
      req.body;
    const user = await User.findById(userId);
    //post daos
    const newPost = new Post({
      title,
      content,
      category,
      articleImages,
      authorFirstName: user.name,
      authorLastName: user.lastname,
      userId: userId,
    });
    newPost.articleImages = articleImages; // Assurez-vous que articleImages est un tableau de chemins d'accès
    newPost.thumbnail = thumbnail;

    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l'article" });
  }
};
//

export const getPostProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userArticles = await Post.find({ userId: user._id });

    res.status(200).json({ user, userArticles });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ error: "Error fetching user profile" });
  }
};
///////

export const getArticleDetails = async (req, res) => {
  const articleId = req.params.articleId;

  try {
    // Recherchez l'article par son ID dans la base de données
    const article = await Post.findById(articleId);

    if (!article) {
      // Si l'article n'est pas trouvé, renvoyez une réponse d'erreur
      return res.status(404).json({ message: "Article not found" });
    }

    // Si l'article est trouvé, renvoyez les détails de l'article
    res.status(200).json(article);
  } catch (error) {
    console.error("Error while fetching article details:", error);
    res.status(500).json({ error: "Error while fetching article details" });
  }
};

//////////

export const searchArticle = async (req, res) => {
  const { searchText } = req.query;

  try {
    const articles = await Post.find({
      title: { $regex: searchText, $options: "i" }, // Effectue une recherche insensible à la casse
    });
    res.status(200).json(articles);
  } catch (error) {
    console.error("Erreur lors de la recherche d'articles :", error);
    res.status(500).json({ error: "Erreur lors de la recherche d'articles" });
  }
};

///////////////////// TEST =>
export const editPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findByIdAndUpdate(postId, req.body, {
      new: true,
    });

    if (!post) {
      return res.status(404).json({ message: "Ce post n'existe pas" });
    }

    res.status(200).json({ message: "Post modifié avec succès", data: post });
  } catch (error) {
    console.error("Erreur lors de la modification du post :", error);
    res.status(500).json({ error: "Erreur lors de la modification du post" });
  }
};
export const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ message: "Ce post n'existe pas" });
    }

    res
      .status(200)
      .json({ message: "Post supprimé avec succès", data: deletedPost });
  } catch (error) {
    console.error("Erreur lors de la suppression du post :", error);
    res.status(500).json({ error: "Erreur lors de la suppression du post" });
  }
};
export const likePost = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (error) {
    res.status(400).json(error);
  }
};
export const dislikePost = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(
      req.params.id,
      { $pull: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (error) {
    res.status(400).json(error);
  }
};
