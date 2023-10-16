import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import "./Authentification.scss";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const [isFailedMessageVisible, setIsFailedMessageVisible] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isFailedMessageVisible) {
      setTimeout(() => {
        setIsFailedMessageVisible(false);
      }, 4000);
    }
  }, [isFailedMessageVisible]);

  const login = async (ev) => {
    ev.preventDefault();
    try {
      const userData = { email, password };
      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        setIsLoading(true);
        showSuccessMessage();
        setTimeout(() => {
          setIsSuccessMessageVisible(false);
          setRedirectToHome(true);
          setIsLoading(false);
        }, 2000);
      } else if (response.status === 401) {
        setIsFailedMessageVisible(true);
      } else {
        setIsFailedMessageVisible(true);
      }
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la connexion : ",
        error.message
      );
      setIsFailedMessageVisible(true);
    }
  };

  const showSuccessMessage = () => {
    setIsSuccessMessageVisible(true);
  };

  return (
    <main className="login-page">
      <div className="login-container-info">
        <h2>Connexion</h2>
        <span>Veuillez indiquer votre email et mot de passe :</span>
      </div>
      <div className="login-container-form">
        <form onSubmit={login}>
          <div className="user-box">
            <input
              type="email"
              id="email"
              name=""
              required={true}
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              id="password"
              name=""
              required={true}
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
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
              <button type="submit">Se connecter</button>
            </div>
          </div>
        </form>
      </div>
      {isLoading && <Loader />}
      {isSuccessMessageVisible && (
        <div className="success-message">
          <div className="box-succes-message">
            <p>Bienvenue, vous êtes maintenant connecté à votre compte !</p>
            <img src="../../assets/img/icon/icon-validator.png" alt="" />
          </div>
        </div>
      )}
      {isFailedMessageVisible && (
        <div className="failed-message">
          <div className="box-failed-message">
            <p>Vos identifiants sont incorrects. Veuillez réessayer..</p>
            <img src="../../assets/img/icon/icon-unauthorized.png" alt="" />
          </div>
        </div>
      )}
      {redirectToHome && <Navigate to="/" />}
    </main>
  );
};

export default LoginPage;
