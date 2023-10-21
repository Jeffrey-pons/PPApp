import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ArtPage = () => {
  const [artArticles, setArtArticles] = useState([]);

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
        const artArticles = data
          .filter((article) => article.category === "art")
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setArtArticles(artArticles);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    };

    fetchArticles();
  }, []);
  return (
    <main className="article-category-form">
      <h2>Art</h2>
      <p>
        <span className="first-letter-p">V</span>
        oici la liste exhaustive d'articles dédiés à l'art sur Pinceaux
        Progressifs. Explorez-la avec plaisir et laissez-vous immerger dans une
        richesse de contenu varié. Notre sélection englobe un vaste éventail de
        sujets artistiques, notamment le{" "}
        <span className="underline-3">dessin</span>, l'{" "}
        <span className="underline-5">illustration</span>, la{" "}
        <span className="underline-1">peinture</span> et la{" "}
        <span className="underline-2">sculpture</span>. N'hésitez surtout pas à
        réagir aux articles et à contribuer en rédigeant{" "}
        <span className="underline-4">vos propres articles</span> sur l'art !
      </p>
      <div className="article-main column-layout">
        {artArticles.map((article) => (
          <Link to={`/article/${article._id}`} key={article._id}>
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

export default ArtPage;
