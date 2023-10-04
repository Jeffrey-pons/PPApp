import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const [isFailedMessageVisible, setIsFailedMessageVisible] = useState(false);

  useEffect(() => {
    if (isSuccessMessageVisible) {
      const modal = document.querySelector(".success-message");
      modal.style.display = "block";
      setTimeout(() => {
        modal.style.display = "none";
        setTimeout(() => {
          setRedirect(true);
        }, 1500);
      }, 2000);
    }
  }, [isSuccessMessageVisible]);

  useEffect(() => {
    if (isFailedMessageVisible) {
      const modal = document.querySelector(".failed-message");
      modal.style.display = "block";
      setTimeout(() => {
        modal.style.display = "none";
        setTimeout(() => {
          setRedirect(true);
        }, 1500);
      }, 2500);
    }
  }, [isFailedMessageVisible]);

  const userData = { email, password };
  const login = async (ev) => {
    ev.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/user/login", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        setIsSuccessMessageVisible(true);
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
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }
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
      {isSuccessMessageVisible && (
        <div
          className={`success-message ${
            isSuccessMessageVisible ? "fade-in" : "fade-out"
          }`}
        >
          <div className="box-succes-message">
            <p>Bienvenue, vous êtes maintenant connecté à votre compte !</p>
            <img src="../../assets/img/icon/icon-validator.png" alt="" />
          </div>
        </div>
      )}
      {isFailedMessageVisible && (
        <div
          className={`failed-message ${
            isFailedMessageVisible ? "fade-in" : "fade-out"
          }`}
        >
          <div className="box-failed-message">
            <p>Erreur lors de l'authentification. Veuillez réessayer.</p>
            <img src="../../assets/img/icon/icon-unauthorized.png" alt="" />
          </div>
        </div>
      )}
    </main>
  );
};

export default LoginPage;
