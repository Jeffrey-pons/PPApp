import React, { useState } from "react";
import "./NavBar.scss";
import AuthSection from "./AuthSection";
import SearchSection from "./SearchSection";
import LinksSection from "./LinksSection";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`main-nav ${isMenuOpen ? "menu-open" : "menu-close"}`}>
      <AuthSection />
      <SearchSection toggleMenu={toggleMenu} />
      <LinksSection isOpen={isMenuOpen} />
    </header>
  );
};

export default NavBar;
