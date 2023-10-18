import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DesignPage = () => {
  const [designArticles, setDesignArticles] = useState([]);

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
        const designArticles = data
          .filter((article) => article.category === "design")
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setDesignArticles(designArticles);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    };

    fetchArticles();
  }, []);
  return (
    <main className="article-category-form">
      <h2>Design</h2>
      <p>
        <span className="first-letter-p">V</span>oici la collection complète
        d'articles dédiés au <span className="underline-2">design</span>. Nous
        vous invitons à l'explorer avec enthousiasme et découvrir de nouveaux
        artistes. Notre sélection couvre une variété de sujets, notamment le{" "}
        <span className="underline-1">graphisme</span>, l'{" "}
        <span className="underline-6">interactif</span> et la{" "}
        <span className="underline-5"> typographie</span>.
      </p>
      <div className="article-main column-layout">
        {designArticles.map((article) => (
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

export default DesignPage;
