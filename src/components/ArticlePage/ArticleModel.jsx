import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ArticleModel.scss";

const ArticleModel = () => {
  const { articleId } = useParams();
  const [articleData, setArticleData] = useState({});
  const [loaderRatio, setLoaderRatio] = useState(0);

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/Article/${articleId}`
        );
        if (response.status === 200) {
          const data = await response.json();
          setArticleData(data);
          setLoaderRatio(100);
        } else {
          console.error("Erreur lors de la récupération de l'article");
        }
      } catch (error) {
        console.error("Une erreur s'est produite :", error.message);
      }
    };

    fetchArticleData();
  }, [articleId]);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.scrollHeight;
    const scrollableHeight = bodyHeight - windowHeight;
    const ratio = (scrollTop / scrollableHeight) * 100;

    setLoaderRatio(ratio);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="article-main">
      <h2>{articleData.title}</h2>
      <img src={articleData.thumbnail} alt="Miniature de l'article" />
      <p>{articleData.content}</p>
      {articleData.images &&
        articleData.images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      <p>
        Auteur : {articleData.authorFirstName} {articleData.authorLastName}
      </p>
      <p>
        Date de création : {new Date(articleData.createdAt).toLocaleString()}
      </p>
      <div className="comments-section">
        <p>lol</p>
      </div>
      <div
        id="loader"
        className="loader"
        style={{ width: `${loaderRatio}%` }}
      ></div>
    </main>
  );
};

export default ArticleModel;
