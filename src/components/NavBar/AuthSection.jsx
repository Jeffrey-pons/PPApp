import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";

const AuthSection = () => {
  return (
    <nav className="AuthSection">
      <ul>
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
      </ul>
    </nav>
  );
};

export default AuthSection;
