import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatedPost = () => {
  const [articleData, setArticleData] = useState({
    category: "art",
    title: "",
    summary: "",
    content: "",
    images: "",
    videos: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArticleData({
      ...articleData,
      [name]: value,
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
        {/* Ajoutez d'autres champs ici */}
        <label htmlFor="content">Contenu de l'article :</label>
        <ReactQuill
          value={articleData.content}
          onChange={(value) =>
            setArticleData({ ...articleData, content: value })
          }
        />
        <div className="button-new-post">
          <button type="submit">Créer un nouveau post</button>
        </div>
      </form>
    </main>
  );
};

export default CreatedPost;
