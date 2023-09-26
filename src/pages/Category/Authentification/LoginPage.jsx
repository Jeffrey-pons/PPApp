import React from "react";
import { Link } from "react-router-dom";
import "./Authentification.scss";

const LoginPage = () => {
  return (
    <main className="login-page">
      <div className="login-container-info">
        <h2>Connexion</h2>
        <span>Veuillez indiquer votre email et mot de passe :</span>
      </div>
      <div className="login-container-form">
        <form>
          <div className="user-box">
            <input type="email" id="email" name="" required={true} />
            <label htmlFor="email">Email</label>
          </div>
          <div className="user-box">
            <input type="password" id="password" name="" required={true} />
            <label htmlFor="password">Mot de passe</label>
          </div>
          <Link className="link-lost-password" to="/mot-de-passe-oublie">
            Mot de passe oublié ?
          </Link>
          <div className="button-form">
            <div className="button-login-form">
              <Link className="link-register" to="/devenir-membre">
                Devenir membre
              </Link>
              <button>Se connecter</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
