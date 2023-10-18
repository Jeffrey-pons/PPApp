import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MusiquePage = () => {
  const [musiqueArticles, setmusiqueArticles] = useState([]);

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
        const musiqueArticles = data
          .filter((article) => article.category === "musique")
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setmusiqueArticles(musiqueArticles);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    };

    fetchArticles();
  }, []);
  return (
    <main className="article-category-form">
      <h2>Musique</h2>
      <p>
        <span className="first-letter-p">D</span>écouvrez l'intégralité de notre
        collection d'articles dédiés à la{" "}
        <span className="underline-1">musique</span> sur notre blog. N'hésitez
        pas à explorer ce contenu captivant et à vous laisser emporter par sa
        diversité ! Nous vous encourageons vivement à{" "}
        <span className="underline-2">partager vos réflexions</span>, à liker, à
        commenter et même à contribuer en rédigeant{" "}
        <span className="underline-3">vos propres articles</span>. Votre
        participation est la bienvenue !
      </p>
      <div className="article-main column-layout">
        {musiqueArticles.map((article) => (
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

export default MusiquePage;
