import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const AuthSection = () => {
  const { isLoggedIn } = useSelector((store) => store.loginState);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  useEffect(() => {
    if (isSuccessMessageVisible) {
      const modal = document.querySelector(".success-message");
      modal.style.display = "block";
      setTimeout(() => {
        modal.style.display = "none";

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }, 2000);
    }
  }, [isSuccessMessageVisible]);

  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggingOut(true);
    setIsSuccessMessageVisible(true);
    setTimeout(() => {
      localStorage.removeItem("token");
      window.location.href = "/";
    }, 2000);
  };

  return (
    <nav className="AuthSection">
      <ul>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/mon-profil">Mon profil</Link>
            </li>
            <li>
              <Link to="/" onClick={handleLogout}>
                Se déconnecter
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/devenir-membre" className="sign-up">
                Devenir membre
              </Link>
            </li>
            <li>
              <Link to="/connexion" className="log-in">
                Se connecter
              </Link>
            </li>
          </>
        )}
      </ul>
      {isSuccessMessageVisible && (
        <div
          className={`success-message ${
            isSuccessMessageVisible ? "fade-in" : "fade-out"
          }`}
        >
          <div className="box-succes-message">
            <p>Votre compte a bien été déconnecté</p>
            <img src="../../assets/img/icon/icon-validator.png" alt="" />
          </div>
        </div>
      )}
      {isLoggingOut && <Loader />}
    </nav>
  );
};

export default AuthSection;
