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
    <main className="article-main-container">
      <section className="Container-Article">
        <span className="category-style">{articleData.category}</span>
        <h2>{articleData.title}</h2>
        <div className="info-user-article">
          <div className="user-article">
            <img src="../../assets/img/icon-user/user-icon.png" alt="" />
            <span>
              Par {articleData.authorFirstName} {articleData.authorLastName}
            </span>
          </div>
          <div className="date-article">
            <img src="../../assets/img/icon/date-icon.png" alt="" />
            <span>
              {" "}
              {new Date(articleData.createdAt)
                .toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
                .replace(/^\w/, (c) => c.toUpperCase())}
            </span>
          </div>
        </div>
        <img src={articleData.thumbnail} alt="Miniature de l'article" />
        <div className="article-content">
          <p>{articleData.content}</p>
        </div>

        {articleData.images &&
          articleData.images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index}`} />
          ))}
      </section>
      <section className="Container-Like">
        <div className="icon-like-comment-section">
          <div className="Like-icon-container">
            <img src="../../assets/img/icon/like-icon.png" alt="" />
            <span className="underline-4">Like</span>
          </div>
          <div className="Comment-icon-container">
            <img src="../../assets/img/icon/comment-icon.png" alt="" />
            <span className="underline-3">Comment</span>
          </div>
        </div>
        <div className="comments-section">
          <p>lol</p>
        </div>
      </section>
      <div
        id="loader"
        className="loader"
        style={{ width: `${loaderRatio}%` }}
      ></div>
    </main>
  );
};

export default ArticleModel;
