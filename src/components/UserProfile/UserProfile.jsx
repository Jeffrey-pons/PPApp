import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserProfile.scss";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
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
  }, []);

  return (
    <main className="userProfile-main">
      <div className="information-container">
        <div>
          <h2>Informations personnelles</h2>
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
        <h2>Mes articles</h2>
        <div className="button-new-post">
          <Link to="/ecrire-un-nouvel-article">
            <button>Écrire un nouvel article</button>
          </Link>
        </div>
      </div>
      <div className="information-container">
        <h2>Articles aimés</h2>
      </div>
      <div className="button-new-post">
        <Link to="">
          <button>Supprimer mon compte</button>
        </Link>
      </div>
    </main>
  );
};

export default UserProfile;
