import React from "react";

const LostPassword = () => {
  return (
    <main className="lost-password-page">
      <div className="lost-password-container-info">
        <h2>Mot de passe oublié</h2>
        <span>
          Veuillez saisir votre adresse électronique pour recevoir un lien pour
          créer un nouveau mot de passe.
        </span>
      </div>
      <div className="lost-password-container-form">
        <form>
          <div className="user-box">
            <input type="email" id="email" name="" required={true} />
            <label htmlFor="email">Email</label>
          </div>
          <div className="button-form">
            <button>Obtenir</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LostPassword;
