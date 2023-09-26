import React from "react";
// import "../../../public/assets/logo-pp-512.png";
import "./Contact.scss";

const Contact = () => {
  return (
    <main className="Contact-main">
      <h2>Contact</h2>
      <p>
        <span className="first-letter-p">P</span>our toute question d'ordre
        général, contactez nous à cette adresse :{" "}
        <a
          id="mail"
          href="mailto:pinceauxprogressifs@gmail.com"
          className="underline-4"
        >
          pinceauxprogressifs@gmail.com
        </a>
        . Vous pouvez également consulter notre FAQ. Pour la publicité, les
        partenariats de marque, ou les questions plus techniques, contactez nous
        à{" "}
        <a
          id="mail"
          className="underline-1"
          href="mailto:ponsjeffrey@gmail.com"
        >
          ponsjeffrey@gmail.com
        </a>{" "}
        ou directement par téléphone au{" "}
        <a id="mail" href="tel:0641243823" className="underline-3">
          06.41.24.38.23
        </a>
        . Veuillez ne pas soumettre d'œuvres d'art ici, ni inscrire votre
        adresse électronique à une liste de diffusion.
      </p>
      <p>
        Nous serions ravis de{" "}
        <span className="underline-2">recevoir vos commentaires</span> sur notre
        travail ou de répondre à vos questions.
      </p>
      <div className="Adresse-container">
        <div>
          {" "}
          <h3>Adresse </h3>
          <p id="mail">
            47 rue Sainte Catherine,
            <br />
            33000 Bordeaux, France
          </p>
        </div>
        <div className="social-media">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="underline-2"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="underline-3"
          >
            Instagram
          </a>
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            className="underline-5"
          >
            Pinterest
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="underline-1"
          >
            Linkedin
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
