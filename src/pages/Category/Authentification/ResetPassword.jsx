import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import "./Authentification.scss";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const [isFailedMessageVisible, setIsFailedMessageVisible] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccessMessageVisible) {
      const modal = document.querySelector(".success-message");
      modal.style.display = "block";
      setTimeout(() => {
        modal.style.display = "none";
        setTimeout(() => {
          setRedirect(true);
        }, 1500);
      }, 2500);
    }
  }, [isSuccessMessageVisible]);

  useEffect(() => {
    if (isFailedMessageVisible) {
      const modal = document.querySelector(".failed-message");
      modal.style.display = "block";
      setTimeout(() => {
        modal.style.display = "none";
        setTimeout(() => {
          setRedirect(false);
        }, 1500);
      }, 2500);
    }
  }, [isFailedMessageVisible]);

  const checkToken = async () => {
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
      navigate("/");
    }
  };

  useEffect(() => {
    checkToken();
    return () => {};
  }, []);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (password !== confirmPassword) {
      setIsFailedMessageVisible(true);
      return;
    }
    const response = await fetch(
      "http://localhost:8000/user/save-new-password",
      {
        method: "POST",
        body: JSON.stringify({ token, password }),
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status === 201) {
      setIsSuccessMessageVisible(true);
    } else {
      setIsFailedMessageVisible(true);
    }
  };

  if (redirect) {
    return <Navigate to={"/connexion"} />;
  }
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
            <button type="submit">Réinitialisater</button>
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
              Votre mot de passe a bien été modifié. Vous pouvez maintenant vous
              connecter !
            </p>
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
            <p>Erreur lors de la modification de votre mot de passe</p>
            <img src="../../assets/img/icon/icon-unauthorized.png" alt="" />
          </div>
        </div>
      )}
    </main>
  );
};

export default ResetPassword;
