const initialState = {
  faqItems: [
    {
      question: "Qu'est ce que Pinceaux progressifs ?",
      answer:
        "Pinceaux Progressifs est un blog dédié à l'art moderne, réalisé par Jeffrey Pons dans le cadre du bootcamp de Développeur Full Stack de la 3W Academy. Ce blog se concentre principalement sur l'art la musique, la photo, le design, la mode et les films. C'est un espace dédié aux amateurs d'art moderne, visant à fournir aux plus passionnées une plateforme riche en contenu et en interaction. ",
      isOpen: false,
    },
    {
      question: "Vendez-vous des magazines sur l'art contemporain ?",
      answer:
        "Non, notre blog sur l'art contemporain ne vend pas de magazines. Notre principal objectif est de fournir une plateforme informative et inspirante pour les amateurs d'art contemporain. Bien que nous ne proposions pas de vente de magazines, nous offrons une variété de ressources, d'articles et de contenu créatif pour enrichir votre expérience artistique sur notre plateforme. ",
      isOpen: false,
    },
    {
      question: " Comment puis-je rédiger un article sur le blog ?",
      answer:
        "Pour écrire un article, connectez-vous à votre compte, puis cliquez sur le bouton 'Ecrire un nouvel article' dans votre espace 'mon profil'. Vous pourrez ensuite rédiger votre article en utilisant notre éditeur de texte convivial.",
      isOpen: false,
    },
    {
      question:
        "Puis-je modifier ou supprimer mes articles une fois qu'ils sont publiés ?",
      answer:
        "Oui, vous pouvez modifier ou supprimer vos articles à tout moment en vous connectant à votre compte, en accédant à la liste de vos articles, puis en cliquant sur l'option 'Modifier' ou 'Supprimer' à côté de l'article que vous souhaitez modifier ou supprimer.",
      isOpen: false,
    },
    {
      question:
        "Comment puis-je signaler un contenu qui me semble inapproprié ou abusif sur la plateforme ?",
      answer:
        "Si vous trouvez un contenu inapproprié ou abusif sur notre plateforme, veuillez directement nous envoyer un mail avec le lien direct vers le contenu inapproprié. Notre équipe examinera votre signalement.",
      isOpen: false,
    },
    {
      question:
        "Y a-t-il des directives spécifiques pour la rédaction des articles ?",
      answer:
        "Oui, nous avons des directives spécifiques pour la rédaction des articles sur notre plateforme de blog dédiée à l'art contemporain. Ces directives ont été créées pour garantir la qualité et la cohérence du contenu artistique que nous présentons. Voici quelques points clés à prendre en compte lors de la rédaction de vos articles : Respect de la thématique : Assurez-vous que votre article est en lien avec l'art contemporain et qu'il correspond à la mission de notre plateforme. Contenu original : Nous encourageons la création de contenu original. Évitez de copier du contenu d'autres sources sans autorisation appropriée. Crédits et droits d'auteur : Si vous utilisez des images, des œuvres d'art ou d'autres éléments créatifs appartenant à d'autres artistes, assurez-vous d'obtenir les autorisations nécessaires et de donner crédit aux créateurs.",
      isOpen: false,
    },

    {
      question: "Comment supprimer complétement mes données de votre site ?",
      answer:
        "Pour supprimer complètement vos données de notre site, suivez ces étapes : connectez-vous à votre compte, accédez à votre profil, puis cherchez l'option de suppression de compte situé tout en bas de la page. Suivez les instructions pour confirmer votre demande",
      isOpen: false,
    },
  ],
};

const faqReducer = (state = initialState, action) => {
  return state;
};

export default faqReducer;
