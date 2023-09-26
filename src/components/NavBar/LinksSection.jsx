import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const LinksSection = () => {
  return (
    <nav className="LinksSection">
      <ul>
        <li>
          <Link to="/blog/art" className="art-link">
            ART
          </Link>
        </li>
        <li>
          <Link to="/blog/photo" className="photo-link">
            PHOTO
          </Link>
        </li>
        <li>
          <Link to="/blog/mode" className="mode-link">
            MODE
          </Link>
        </li>
        <li>
          <Link to="/blog/design" className="design-link">
            DESIGN
          </Link>
        </li>
        <li>
          <Link to="/blog/film" className="film-link">
            FILM
          </Link>
        </li>
        <li>
          <Link to="/blog/musique" className="musique-link">
            MUSIQUE
          </Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default LinksSection;
