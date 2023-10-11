import Comment from "../models/comment.model";

exports.addCommentToArticle = async (req, res) => {
  try {
    const { articleId } = req.params;
    const { text } = req.body;

    const newComment = new Comment({
      article: articleId,
      text,
      author: req.user._id,
    });

    const savedComment = await newComment.save();

    res.status(201).json(savedComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de l'ajout du commentaire" });
  }
};
