import React from "react";

const ResetPassword = () => {
  return (
    <main className="reset-password-page">
      <div className="reset-password-container-info">
        <h2>Réinitialisation de votre mot de passe</h2>
        <span>Veuillez saisir votre nouveau mot de passe</span>
      </div>
      <div className="reset-password-container-form">
        <form onSubmit={""}>
          <div className="user-box">
            <input
              type="password"
              id="password"
              name=""
              required={true}
              value={""}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Nouveau mot de passe</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              id="password"
              name=""
              required={true}
              value={""}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Nouveau mot de passe</label>
          </div>
          <div className="button-form">
            <button type="submit">Réinitialisater</button>
          </div>
        </form>
        {<div className="message">{""}</div>}
      </div>
    </main>
  );
};

export default ResetPassword;
