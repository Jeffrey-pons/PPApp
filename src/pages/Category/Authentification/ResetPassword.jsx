import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import "./Authentification.scss";
import Loader from "../../../components/Loader/Loader";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const [isFailedMessageVisible, setIsFailedMessageVisible] = useState(false);
  const [redirectToConnexion, setRedirectToConnexion] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useParams();

  useEffect(() => {
    if (isFailedMessageVisible) {
      setTimeout(() => {
        setIsFailedMessageVisible(false);
      }, 4000);
    }
  }, [isFailedMessageVisible]);

  useEffect(() => {
    checkToken();
    return () => {};
  }, []);

  const checkToken = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/user/check-reset-password-token",
        {
          method: "POST",
          body: JSON.stringify({ token }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status !== 202) {
        alert("Cet utilisateur n'existe pas");
        setRedirectToHome(true);
      }
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la réinitialisation du mot de passe: ",
        error.message
      );
    }
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (password !== confirmPassword) {
      setIsFailedMessageVisible(true);
      return;
    }
    try {
      const response = await fetch(
        "http://localhost:8000/user/save-new-password",
        {
          method: "POST",
          body: JSON.stringify({ token, password }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 201) {
        setIsLoading(true);
        showSuccessMessage();
        setTimeout(() => {
          setIsSuccessMessageVisible(false);
          setRedirectToConnexion(true);
          setIsLoading(false);
        }, 3000);
      } else {
        setIsFailedMessageVisible(true);
      }
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la réinitialisation du mot de passe: ",
        error.message
      );
      setIsFailedMessageVisible(true);
    }
  };

  const showSuccessMessage = () => {
    setIsSuccessMessageVisible(true);
  };

  return (
    <main className="reset-password-page">
      <div className="reset-password-container-info">
        <h2>Réinitialisation de votre mot de passe</h2>
        <span>Veuillez saisir votre nouveau mot de passe</span>
      </div>
      <div className="reset-password-container-form">
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="password"
              id="password"
              name=""
              required={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="email">Nouveau mot de passe</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              id="Confirmpassword"
              name=""
              required={true}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="email">Nouveau mot de passe</label>
          </div>
          <div className="button-form">
            <button type="submit">Réinitialiser</button>
          </div>
        </form>
      </div>
      {isLoading && <Loader />}
      {isSuccessMessageVisible && (
        <div className="success-message">
          <div className="box-succes-message">
            <p>
              Votre mot de passe a bien été réinitialiser, vous pouvez désormais
              vous connecter !
            </p>
            <img src="../../assets/img/icon/icon-validator.png" alt="" />
          </div>
        </div>
      )}
      {isFailedMessageVisible && (
        <div className="failed-message">
          <div className="box-failed-message">
            <p>
              Une erreur s'est produite lors de la réinitialisation de votre mot
              de passe. Veuillez ressayer !
            </p>
            <img src="../../assets/img/icon/icon-unauthorized.png" alt="" />
          </div>
        </div>
      )}
      {redirectToConnexion && <Navigate to="/connexion" />}
      {redirectToHome && <Navigate to="/" />}
    </main>
  );
};

export default ResetPassword;
