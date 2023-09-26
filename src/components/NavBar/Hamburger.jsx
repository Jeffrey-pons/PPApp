import React from "react";
import "./NavBar.scss";

const Hamburger = ({ isOpen, onClick }) => {
  return (
    <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={onClick}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default Hamburger;
