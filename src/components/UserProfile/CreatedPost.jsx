import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatedPost = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((store) => store.loginState);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const [articleData, setArticleData] = useState({
    category: "art",
    title: "",
    summary: "",
    content: "",
    articleImages: [],
    thumbnail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticleData({
      ...articleData,
      [name]: value,
    });
  };

  const handleThumbnailChange = (e) => {
    const thumbnailFile = e.target.files[0];
    setArticleData({
      ...articleData,
      thumbnail: thumbnailFile,
    });
  };
  const handleArticleImagesChange = (e) => {
    const selectedImages = e.target.files;
    const imageUrls = [];

    for (let i = 0; i < selectedImages.length; i++) {
      const imageUrl = URL.createObjectURL(selectedImages[i]);
      imageUrls.push(imageUrl);
    }

    setArticleData({
      ...articleData,
      articleImages: imageUrls,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8000/Article/createdArticle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(articleData),
        }
      );

      if (response.status === 201) {
        alert("Article crée avec succès");
        console.log("Article créé avec succès !");
      } else {
        console.error("Erreur lors de la création de l'article");
      }
    } catch (error) {
      console.error("Une erreur s'est produite :", error.message);
    }
  };

  return (
    <main className="Created-Post">
      <h2>Création d'un nouvel article</h2>
      <form onSubmit={handleSubmit}>
        <div className="info-box-article">
          <label htmlFor="category">Catégorie :</label>
          <select
            id="category"
            name="category"
            value={articleData.category}
            onChange={handleInputChange}
            required
          >
            <option value="art">Art</option>
            <option value="photo">Photo</option>
            <option value="mode">Mode</option>
            <option value="design">Design</option>
            <option value="film">Film</option>
            <option value="musique">Musique</option>
          </select>
        </div>
        <label htmlFor="title">Titre de l'article :</label>
        <input
          type="text"
          id="title"
          name="title"
          value={articleData.title}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="summary">Résumé de l'article :</label>
        <input
          type="text"
          id="summary"
          name="summary"
          value={articleData.summary}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="thumbnail">Image miniature de l'article :</label>
        <input
          type="file"
          id="thumbnail"
          name="thumbnail"
          // value={articleData.thumbnail}
          onChange={handleInputChange}
          // required
        />

        <label htmlFor="content">Contenu de l'article :</label>
        <ReactQuill
          value={articleData.content}
          onChange={(value) =>
            setArticleData({ ...articleData, content: value })
          }
        />
        <label id="articleImagesLabel" htmlFor="articleImages">
          Images à ajouter dans l'article :
        </label>
        <input
          type="file"
          id="articleImages"
          name="articleImages"
          accept="image/*"
          onChange={handleArticleImagesChange}
          multiple
        />

        <div className="button-new-post">
          <button type="submit">Créer un nouveau post</button>
        </div>
      </form>
    </main>
  );
};

export default CreatedPost;
