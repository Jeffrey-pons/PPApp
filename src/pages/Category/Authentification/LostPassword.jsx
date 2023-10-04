import React, { useState } from "react";

const LostPassword = () => {
  const [email, setEmail] = useState("");

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
        <form onSubmit={""}>
          <div className="user-box">
            <input
              type="email"
              id="email"
              name=""
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="button-form">
            <button type="submit">Obtenir</button>
          </div>
        </form>
        {<div className="message">{""}</div>}
      </div>
    </main>
  );
};

export default LostPassword;
