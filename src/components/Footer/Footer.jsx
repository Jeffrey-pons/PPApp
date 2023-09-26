import React from "react";
import AboutSection from "./AboutSection";
import SupportedSection from "./SupportedSection";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="main-footer">
      <SupportedSection />
      <AboutSection />
    </footer>
  );
};

export default Footer;
