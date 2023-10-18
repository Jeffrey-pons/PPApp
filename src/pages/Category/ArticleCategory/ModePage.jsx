import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ModePage = () => {
  const [modeArticles, setmodeArticles] = useState([]);

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
        const modeArticles = data
          .filter((article) => article.category === "mode")
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setmodeArticles(modeArticles);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    };

    fetchArticles();
  }, []);
  return (
    <main className="article-category-form">
      <h2>Mode</h2>
      <p>
        <span className="first-letter-p">B</span>ienvenue sur la collection
        complète d'articles dédiés à l'univers de la{" "}
        <span className="underline-1">mode</span>. Nous vous invitons à
        l'explorer avec enthousiasme et découvrir de nouveaux artistes.
        N'hésitez pas à contribuer en rédigeant{" "}
        <span className="underline-3">vos propres articles</span>. Votre
        participation est la bienvenue !
      </p>
      <div className="article-main column-layout">
        {modeArticles.map((article) => (
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

export default ModePage;
