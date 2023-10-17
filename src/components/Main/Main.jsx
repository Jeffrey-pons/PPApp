import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Main.scss";
import MachineHallucinationVideo from "../VideoComponents/MachineHallucinationVideo";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/reducers/login.reducer";

const Main = () => {
  const [currentImage, setCurrentImage] = useState(
    "../../assets/img/artist-img/fabienne-verdier-expo.PNG"
  );
  const [activeTitleIndex, setActiveTitleIndex] = useState(0);
  const [articles, setArticles] = useState([]);

  const dispatch = useDispatch();

  const handleTitleHover = (newImage, index) => {
    setCurrentImage(newImage);
    setActiveTitleIndex(index);
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    // Vérifiez si l'utilisateur est connecté en fonction du jeton
    const token = localStorage.getItem("token");
    dispatch(
      setLogin({
        login: !!token,
      })
    );
  }, [dispatch]);

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
        data.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA;
        });
        setArticles(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const articleCards = document.querySelectorAll(".article-card");
    articleCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="main-page">
      <div className="container">
        <div className="container-picture-main">
          <img src={currentImage} alt="" />
        </div>
        <div className="container-author-main">
          <div
            className={`verdier-title ${
              activeTitleIndex === 0 ? "active" : ""
            }`}
          >
            <span>ART</span>
            <h2
              onMouseEnter={() =>
                handleTitleHover(
                  "../../assets/img/artist-img/fabienne-verdier-expo.PNG",
                  0
                )
              }
            >
              ENTRE LIGNE SONORE ET LIGNE PICTURALE
            </h2>
            <p>
              Projection des films de Fabienne Verdier au Philharmonie de Paris
            </p>
          </div>

          <div
            className={`orgephill-title ${
              activeTitleIndex === 2 ? "active" : ""
            }`}
          >
            <span>DESIGN</span>
            <h2
              onMouseEnter={() =>
                handleTitleHover(
                  "../../assets/img/artist-img/typographic-dangeorgehill.PNG",
                  2
                )
              }
            >
              Pixelation effects
            </h2>
            <p>Project typographic by Dange Orgehill</p>
          </div>
          <div
            className={`geogaldi-title ${
              activeTitleIndex === 3 ? "active" : ""
            }`}
          >
            <span>MUSIQUE</span>
            <h2
              onMouseEnter={() =>
                handleTitleHover(
                  "../../assets/img/artist-img/boards-of-canada-geogaldi.jpg",
                  3
                )
              }
            >
              A IS TO B AS B IS TO C
            </h2>
            <p>GEOGALDI: une intensification, par Boards of Canada</p>
          </div>
          <div
            className={`Platzker-title ${
              activeTitleIndex === 4 ? "active" : ""
            }`}
          >
            <span>PHOTO</span>
            <h2
              onMouseEnter={() =>
                handleTitleHover(
                  "../../assets/img/artist-img/STATION TO STATION.jpg",
                  4
                )
              }
            >
              STATION TO STATION
            </h2>
            <p>David Platzker à propos de l'art d'Ed Ruscha</p>
          </div>
          <div
            className={`osiris-title ${activeTitleIndex === 1 ? "active" : ""}`}
          >
            <span>MODE</span>
            <h2
              onMouseEnter={() =>
                handleTitleHover(
                  "../../assets/img/artist-img/globe-osiris-mode.jpg",
                  1
                )
              }
            >
              L'influence de Brian Reid sur Osiris
            </h2>
            <p>Brian Reid, designer d'Osiris shoes</p>
          </div>
        </div>
      </div>

      <h2 className="h2-main">DERNIÈRES ACTUALITÉS</h2>

      <div className="article-main column-layout">
        {articles.map((article, index) => (
          <Link to={`/article/${article.id}`}>
            <div className="article-card" key={index}>
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

      <h2 className="h2-main">MACHINE HALLUCINATION - Refik Anadol Studio</h2>
      <div className="article-main-youtube">
        <div className="article-card-secondary">
          <div>
            <span>ART</span>
            {"/"}
            <span>DESIGN</span>
            <h5>MACHINE HALLUCINATION par Refik Anadol Studio</h5>
            <p>
              La question de savoir pourquoi nous collectionnons, enregistrons
              et partageons nos expériences quotidiennes a toujours été liée aux
              préoccupations formelles et esthétiques concernant la
              représentation de la réalité, de la totalité et de la profondeur
              de l'imagination humaine. Stéphane Mallarmé, poète et critique du
              XIXe siècle, a dit que tout ce qui existe dans le monde existe
              pour finir dans un livre....
            </p>

            <button className="animated-button"> Lire l'article</button>
          </div>
          <MachineHallucinationVideo />
        </div>
      </div>
      <div className="article-main">
        <div className="article-card">
          <img src="../../assets/img/artist-img/georges braques.jpg" alt="" />
          <div>
            <span>ART</span>
            <h5>L'Ordre des Oiseaux de Georges Braques</h5>
            <span className="author">22.09.2023 - STAFF</span>
          </div>
        </div>
        <div className="article-card">
          <video loop autoPlay muted>
            <source
              src="../../video/artist-video/Tim-Rodenbrooker-one.mp4"
              type="video/mp4"
            />
          </video>
          <div>
            <span>DESIGN</span>
            <h5> Un week-end à Barcelone avec Tim Rodenbröker</h5>
            <span className="author">22.09.2023 - Julien Hancel</span>
          </div>
        </div>

        <div className="article-card">
          <img src="../../assets/img/artist-img/voyage-de-chihiro.jpg" alt="" />
          <div>
            <span>FILM</span>
            <h5>Le voyage de Chihiro - un film poétique</h5>
            <span className="author">22.09.2023 - Laura Adoue</span>
          </div>
        </div>
      </div>
      <h2 className="h2-main">
        Comment faire de l'art avec du noir - Pierre Soulages
      </h2>

      <div className="article-main-youtube">
        <div className="article-card-secondary">
          <img
            id="soulages-img"
            src="../../assets/img/artist-img/soulages.jpg"
            alt=""
          />
          <div>
            <span>ART</span>

            <h5>Pourquoi le noir ? Et pour quoi faire ?</h5>
            <p>
              Génie de la rencontre du noir et de la lumière, le peintre
              français Pierre Soulages est mort, à 102 ans, le 26 octobre.
              Pourquoi le noir ? Et pour quoi faire ? Explication et plongée au
              cœur de l’« outrenoir », en vidéo. Des œuvres noires, toutes
              noires ? Pierre Soulages sublimait cette couleur. Pour y arriver,
              il disait peindre des « relations » : celles qui unissent la
              couleur noire, la matière et la lumière. Résultat : des reflets et
              des contrastes plus ou moins prononcés, sur la surface accidentée
              de tableaux souvent imposants.
            </p>
            <button>Lire l'article</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
