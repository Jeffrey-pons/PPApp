import React from "react";
import "./UserProfile.scss";

const UserProfile = ({ user }) => {
  return (
    <main className="userProfile-main">
      <div className="information-container">
        <div>
          <h2>Infos utilisateurs</h2>
          <div className="container-profil">
            {/* <p>Nom : {user.lastname}</p> */}
            {/* <p>Prénom : {user.name}</p> */}
          </div>
          <div className="container-profil">
            {/* <p>Job :{user.job}</p> */}
            {/* <p>Email : {user.email}</p> */}
          </div>
          <div className="button-new-post">
            <button>Ecrire un nouvel article</button>
          </div>
        </div>
        <h2>MES DERNIERS POSTS / MODIFIER OU SUPPRIMER</h2>
        <h2>ARTICLES AIM2ES</h2>
        <h2>intitulé faq</h2>
        <h2>se deconnecter</h2>
        <h2>Supprimer son compte</h2>
      </div>
    </main>
  );
};

export default UserProfile;
