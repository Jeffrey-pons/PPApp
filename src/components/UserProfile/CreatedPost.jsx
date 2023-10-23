import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ReactQuill from "react-quill";
import Loader from "../Loader/Loader";
import "react-quill/dist/quill.snow.css";

const CreatedPost = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((store) => store.loginState);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [thumbnailFile, setThumbnailFile] = useState(null);

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
    const file = e.target.files[0];
    setThumbnailFile(file);
  };

  const handleArticleImagesChange = (e) => {
    const files = e.target.files;
    const imageBase64Array = [];

    for (let i = 0; i < files.length; i++) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        imageBase64Array.push(e.target.result);
      };
      fileReader.readAsDataURL(files[i]);
    }

    setArticleData({
      ...articleData,
      articleImages: imageBase64Array,
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
        const responseData = await response.json();
        setIsLoading(true);
        showSuccessMessage();
        setTimeout(() => {
          setIsSuccessMessageVisible(false);

          setIsLoading(false);
          window.location.href = `/Article/${responseData._id}`;
        }, 2500);

        console.log("Article créé avec succès !");
      } else {
        console.error("Erreur lors de la création de l'article");
      }
    } catch (error) {
      console.error("Une erreur s'est produite :", error.message);
    }
  };

  const showSuccessMessage = () => {
    setIsSuccessMessageVisible(true);
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
          accept="image/*"
          onChange={handleThumbnailChange}
          required
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
      {isLoading && <Loader />}
      {isSuccessMessageVisible && (
        <div className="success-message">
          <div className="box-succes-message">
            <p>Votre article a bien été créer. Vous pouvez le consulter</p>
            <img src="../../assets/img/icon/icon-validator.png" alt="" />
          </div>
        </div>
      )}
    </main>
  );
};

export default CreatedPost;
