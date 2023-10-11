import React, { useState, useEffect } from "react";

import "./Authentification.scss";

const LostPassword = () => {
  const [email, setEmail] = useState("");

  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  useEffect(() => {
    if (isSuccessMessageVisible) {
      const modal = document.querySelector(".success-message");
      modal.style.display = "block";
      setTimeout(() => {
        modal.style.display = "none";
        setTimeout(() => {}, 1500);
      }, 2500);
    }
  }, [isSuccessMessageVisible]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/user/lost-password", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      });
      if (response) {
        setIsSuccessMessageVisible(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        <form onSubmit={handleSubmit}>
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
      {isSuccessMessageVisible && (
        <div
          className={`success-message ${
            isSuccessMessageVisible ? "fade-in" : "fade-out"
          }`}
        >
          <div className="box-succes-message">
            <p>
              Un lien pour créer un nouveau mot de passe vous a été envoyé sur
              votre adresse mail
            </p>
            <img src="../../assets/img/icon/icon-validator.png" alt="" />
          </div>
        </div>
      )}
    </main>
  );
};

export default LostPassword;
