import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FilmPage = () => {
  const [filmArticles, setfilmArticles] = useState([]);

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
        const filmArticles = data
          .filter((article) => article.category === "film")
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setfilmArticles(filmArticles);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    };

    fetchArticles();
  }, []);
  return (
    <main className="article-category-form">
      <h2>Film</h2>
      <p>
        <span className="first-letter-p">V</span>oici l'archive complète des
        articles sur le <span className="underline-6">cinéma</span> de notre
        blog. Jetez-y un coup d'œil, et amusez-vous à vous perdre et à découvrir
        dans tout ce nouveau contenu.
      </p>
      <div className="article-main column-layout">
        {filmArticles.map((article) => (
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

export default FilmPage;
