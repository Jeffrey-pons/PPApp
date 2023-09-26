import React from "react";
import "./PageNotFound.scss";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main className="page404">
      <div className="h2-page404">
        <div className="number">400</div>
        <div className="number">000</div>
        <div className="number">004</div>
      </div>

      <span>La page demandée est introuvable.</span>
      <Link to="/">
        {" "}
        <button>Revenir à l'accueil</button>
      </Link>
    </main>
  );
};

export default PageNotFound;
