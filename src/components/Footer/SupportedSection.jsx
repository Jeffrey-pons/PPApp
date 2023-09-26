import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const SupportedSection = () => {
  return (
    <footer className="SupportedSection">
      <Link to="/">
        <h3>(JP)</h3>
      </Link>
      <h6>Pinceaux Progressifs - réalisé par (JP)</h6>
      <h6>VPS Hosting by OVH Cloud</h6>
    </footer>
  );
};

export default SupportedSection;
