import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthSection = () => {
  const { isLoggedIn } = useSelector((store) => store.loginState);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  useEffect(() => {
    if (isSuccessMessageVisible) {
      const modal = document.querySelector(".success-message");
      modal.style.display = "block";
      setTimeout(() => {
        modal.style.display = "none";

        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }, 2000);
    }
  }, [isSuccessMessageVisible]);

  const handleLogout = (e) => {
    e.preventDefault();
    setIsSuccessMessageVisible(true);
    setTimeout(() => {
      localStorage.removeItem("token");
    }, 1000);
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
              <a href="/" onClick={handleLogout}>
                Se déconnecter
              </a>
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
    </nav>
  );
};

export default AuthSection;
