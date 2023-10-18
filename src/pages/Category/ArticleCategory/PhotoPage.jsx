import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../components/Main/Main.scss";

const PhotoPage = () => {
  const [photoArticles, setPhotoArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/Article/getArticle",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.status !== 200) {
          throw new Error("Erreur lors de la récupération des articles");
        }

        const data = await response.json();
        const photoArticles = data
          .filter((article) => article.category === "photo")
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setPhotoArticles(photoArticles);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    };

    fetchArticles();
  }, []);
  return (
    <main className="article-category-form">
      <h2>Photo</h2>
      <p>
        <span className="first-letter-p">C</span>'est ici que tu trouveras tous
        les articles relatifs à la{" "}
        <span className="underline-4">photographie</span> sur Pinceaux
        Progressifs. Prends ton temps, il y a beaucoup de contenu à découvrir.
        N'oubliez pas de consulter nos séries en cours! N'hésitez pas à partager
        vos réflexions, à <span className="underline-1">liker</span>, à{" "}
        <span className="underline-2">commenter</span> et même à contribuer en
        rédigeant vos propres articles. Votre participation est la bienvenue !
      </p>
      <div className="article-main column-layout">
        {photoArticles.map((article) => (
          <Link to={`/article/${article.id}`} key={article._id}>
            <div className="article-card">
              <img src={article.images} alt="" />
              <div>
                <span id="article-category">{article.category}</span>
                <h5>{article.title}</h5>
                <span className="author">
                  {article.createdAt} - {article.authorFirstName}{" "}
                  {article.authorLastName}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default PhotoPage;
