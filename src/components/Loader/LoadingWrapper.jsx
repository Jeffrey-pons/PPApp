import React, { useState } from "react";
import Loader from "./Loader";

const LoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000); // Mettez le délai que vous souhaitez

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        // Si le chargement est terminé, affichez les enfants (contenu de la page)
        children
      )}
    </>
  );
};

export default LoadingWrapper;
