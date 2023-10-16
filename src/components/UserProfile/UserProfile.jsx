import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./UserProfile.scss";
import Loader from "../Loader/Loader";

const UserProfile = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((store) => store.loginState);
  const [user, setUser] = useState(null);
  const [isAccountDeleted, setAccountDeleted] = useState(false);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
      return;
    }
    const userInfo = async () => {
      try {
        const response = await fetch("http://localhost:8000/user/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.status === 200) {
          const userData = await response.json();

          setUser(userData);
        } else if (response.status === 401) {
          console.error("Échec de la récupération des infos");
        } else {
          console.log("Échec de la récupération des infos");
        }
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la connexion : ",
          error.message
        );
      }
    };

    userInfo();
  }, [isLoggedIn, navigate]);

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      showSuccessMessage();
      const response = await fetch("http://localhost:8000/user/delete", {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === 200) {
        setAccountDeleted(true);
        setTimeout(() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }, 3500);
      } else {
        console.error("Erreur lors de la suppression du compte utilisateur");
        setLoading(false);
      }
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la suppression du compte :",
        error.message
      );
      setLoading(false);
    }
  };
  const showSuccessMessage = () => {
    setIsSuccessMessageVisible(true);
  };
  
  return (
    <main className="userProfile-main">
      {isLoading && <Loader />}
      <div className="information-container">
        <div>
          <div className="title-info-icon">
            <h2>Informations personnelles</h2>
            <img src="../../assets/img/icon-user/user-icon.png" alt="" />
          </div>
          <div className="container-profil">
            <p>Nom : {user ? user.lastName : ""}</p>
            <p>Prénom : {user ? user.name : ""}</p>
          </div>
          <div className="container-profil">
            <p>Job : {user ? user.job : ""}</p>
            <p>Email : {user ? user.email : ""}</p>
          </div>
        </div>
      </div>
      <div className="information-container">
        <div className="title-info-icon">
          <h2>Mes articles</h2>
          <img src="../../assets/img/icon-user/article-icon.png" alt="" />
        </div>
        <div className="button-new-post">
          <Link to="/ecrire-un-nouvel-article">
            <button>Écrire un nouvel article</button>
          </Link>
        </div>
      </div>
      <div className="information-container">
        <div className="title-info-icon">
          <h2>Articles aimés</h2>
          <img src="../../assets/img/icon-user/article-like-ico.png" alt="" />
        </div>
      </div>
      <div className="information-container">
        <div className="title-info-icon">
          <h2>Supprimer mon compte</h2>
        </div>
        <p>
          Vous avez la liberté de résilier votre compte à tout moment. Par
          exemple, si, après vous êtes inscrits sur notre blog Pinceaux
          Progressifs, vous réalisez que ce n'est pas vraiment ce que vous
          cherchiez, ou si vous ne trouvez plus d'intérêt à conserver un compte
          personnel sur notre blog, vous avez la possibilité de le supprimer
          immédiatement en cliquant sur le bouton situé juste en dessous.
        </p>
        <p>
          Veuillez noter que vous n'aurez pas besoin d'obtenir une validation
          pour supprimer votre compte, mais il est essentiel de comprendre que
          cette décision est définitive et irrévocable. Une fois que vous avez
          supprimé définitivement votre compte, il ne sera pas possible de
          revenir en arrière.
        </p>

        {isAccountDeleted ? (
          <h3>Le compte utilisateur a été supprimé avec succès.</h3>
        ) : (
          <div className="button-new-post">
            <button onClick={handleDeleteAccount}>Supprimer mon compte</button>
          </div>
        )}
      </div>
      {isSuccessMessageVisible && (
        <div className="success-message">
          <div className="box-succes-message">
            <p>Votre compte utilisateur a été supprimé avec succès.</p>
            <img src="../../assets/img/icon/icon-validator.png" alt="" />
          </div>
        </div>
      )}
    </main>
  );
};

export default UserProfile;