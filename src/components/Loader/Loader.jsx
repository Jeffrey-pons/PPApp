import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
