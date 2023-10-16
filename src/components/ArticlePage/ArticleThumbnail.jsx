import React from "react";
import { Link } from "react-router-dom"; // Importez Link pour gérer la navigation vers la page de l'article complet

const ArticleThumbnail = ({
  title,
  category,
  content,
  image,
  author,
  articleId,
}) => {
  // Extrait les deux premières phrases du contenu de l'article
  const previewContent = content.split(".").slice(0, 2).join(".").concat(".");

  return (
    <div className="article-card">
      <Link to={`/article/${articleId}`}>
        {" "}
        {/* Utilisez Link pour créer un lien vers la page de l'article complet */}
        <img src={image} alt={title} />
        <div>
          <span>{category}</span>
          <h5>{title}</h5>
          <p>{previewContent}</p>
          <span className="author">{author}</span>
        </div>
      </Link>
    </div>
  );
};

export default ArticleThumbnail;
