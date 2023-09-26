import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const AboutSection = () => {
  return (
    <footer className="AboutSection">
      <ul>
        <li>
          <Link to="/a-propos">A propos</Link>
        </li>
        <li>
          <Link to="/politique-de-confidentialité">
            Politique de confidentialité
          </Link>
        </li>
        <li>
          <Link to="/termes-conditions">Termes & conditions</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div>
        <Link to="/">
          <h4>© Pinceaux Progressifs Design INC</h4>
        </Link>
      </div>
    </footer>
  );
};

export default AboutSection;
