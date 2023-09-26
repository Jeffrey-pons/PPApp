// FAQ.js
import React, { useState } from "react";
import { connect } from "react-redux";
import "./Faq.scss";

const FAQ = ({ faqItems, dispatch }) => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index) => {
    if (index === openIndex) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <main className="faq-container">
      <h2> Foire aux Questions</h2>
      <p>
        <span className="first-letter-p">B</span>ienvenue sur notre{" "}
        <span className="underline-5">Foire aux Questions</span> dédiée à
        Pinceaux Progressifs ! Nous sommes ravis de vous accueillir dans notre
        communauté artistique en ligne, où les esprits créatifs se réunissent
        pour partager leurs idées, inspirations et créations. Cette FAQ a été
        conçue pour vous fournir toutes les informations dont{" "}
        <span className="underline-1">vous avez besoin</span> pour naviguer et
        profiter pleinement de notre plateforme. Que vous soyez un artiste
        émergent, un amateur d'art ou simplement curieux de découvrir le monde
        de l'art contemporain, vous trouverez ici des{" "}
        <span className="underline-3">réponses à vos questions</span> les plus
        fréquentes sur la création de compte, la rédaction d'articles, les
        interactions avec d'autres membres, et bien plus encore. Parcourez les
        questions ci-dessous pour commencer votre voyage artistique en toute
        confiance et{" "}
        <span className="underline-4">n'hésitez pas à nous contacter</span> si
        vous avez besoin d'une assistance supplémentaire. Plongeons ensemble
        dans l'univers fascinant de l'art contemporain !
      </p>
      <h2 className="h2-faq">Questions fréquentes</h2>
      <div className="faq-carousel">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <span
              className={`faq-question ${
                index === openIndex ? "expanded" : ""
              }`}
              tabIndex="0"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
            </span>
            {index === openIndex && (
              <span className="faq-answer">{item.answer}</span>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  faqItems: state.faq.faqItems,
});

export default connect(mapStateToProps)(FAQ);
