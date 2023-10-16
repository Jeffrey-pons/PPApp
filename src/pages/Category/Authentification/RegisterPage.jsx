import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./Authentification.scss";
import Loader from "../../../components/Loader/Loader";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [job, setJob] = useState("");
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
      }, 3000);
    }
  }, [isFailedMessageVisible]);

  const register = async (ev) => {
    ev.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/user/register", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          lastname: lastname,
          job: job,
          email: email,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 201) {
        setIsLoading(true);
        showSuccessMessage();
        setTimeout(() => {
          setIsSuccessMessageVisible(false);
          setRedirectToHome(true);
          setIsLoading(false);
        }, 2000);
      } else {
        setIsFailedMessageVisible(true);
      }
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de l'inscription' : ",
        error.message
      );
      setIsFailedMessageVisible(true);
    }
  };

  const showSuccessMessage = () => {
    setIsSuccessMessageVisible(true);
  };

  return (
    <main className="register-page">
      <div className="register-container-info">
        <h2>Inscription</h2>
        <span>Veuillez remplir les champs suivants :</span>
      </div>

      <div className="register-container-form">
        <form onSubmit={register}>
          <div className="user-box">
            <input
              type="text"
              id="username"
              name=""
              required={true}
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <label htmlFor="username">Prénom</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              id="last-name"
              name=""
              required={true}
              value={lastname}
              onChange={(ev) => setLastname(ev.target.value)}
            />
            <label htmlFor="last-name">Nom</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              name=""
              id="job"
              required={true}
              value={job}
              onChange={(ev) => setJob(ev.target.value)}
            />
            <label htmlFor="job">Profession</label>
          </div>
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
          <div className="button-form">
            <button type="submit">Devenir membre</button>
          </div>
        </form>
      </div>
      {isLoading && <Loader />}
      {isSuccessMessageVisible && (
        <div className="success-message">
          <div className="box-succes-message">
            <p>
              Votre compte a bien été créé, vous pouvez maintenant vous
              connecter.
            </p>
            <img src="../../assets/img/icon/icon-validator.png" alt="" />
          </div>
        </div>
      )}

      {isFailedMessageVisible && (
        <div className="failed-message">
          <div className="box-failed-message">
            <p>
              Erreur lors de la création de votre compte. Veuillez réessayer.
            </p>
            <img src="../../assets/img/icon/icon-unauthorized.png" alt="" />
          </div>
        </div>
      )}
      {redirectToHome && <Navigate to="/connexion" />}
    </main>
  );
};

export default RegisterPage;
