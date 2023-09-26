import React from "react";
import "./PrivacyPolicy.scss";

const Privacy = () => {
  return (
    <main className="Privacy">
      <h2>Politique de confidentialité</h2>
      <p>
        <span className="first-letter-p">B</span>ienvenue sur Pinceaux
        Progressifs, un blog d'art contemporain dédié à{" "}
        <span className="underline-4">l'exploration de l'art</span> sous toutes
        ses formes. Nous nous engageons à protéger votre vie privée et à
        garantir la sécurité de vos données personnelles. Cette politique de
        confidentialité explique comment nous{" "}
        <span className="underline-6">
          collectons, utilisons et protégeons vos informations
        </span>
        . En utilisant Pinceaux Progressifs, vous acceptez les termes de cette
        politique.
      </p>
      <h3>1. Collecte de Données Personnelles</h3>
      <p>
        Nous pouvons collecter les types de données suivants lorsque vous
        utilisez notre site :
      </p>
      <ul>
        <li>
          - Informations de compte : Lors de la création d'un compte, nous
          collectons votre nom, votre adresse e-mail et vos préférences de
          compte.
        </li>
        <li>
          - Contenu généré par l'utilisateur : Tout contenu que vous publiez sur
          Pinceaux Progressifs, y compris les articles, les commentaires, les
          images, et les vidéos.
        </li>
        <li>
          - Informations de profil : Vous pouvez choisir de fournir des
          informations supplémentaires sur votre profil, telles qu'une
          biographie et une photo de profil.
        </li>
        <li>
          - Informations de navigation : Nous collectons automatiquement des
          informations sur votre utilisation du site, y compris votre adresse
          IP, le type de navigateur que vous utilisez, les pages que vous
          visitez, et les temps de session.
        </li>
      </ul>
      <h3>2. Utilisation des Données Personnelles</h3>
      <p>Nous utilisons vos données personnelles aux fins suivantes : </p>
      <ul>
        <li>
          - Fourniture de services : Pour vous permettre de créer un compte, de
          publier du contenu, de participer à des discussions, et de
          personnaliser votre expérience sur Pinceaux Progressifs.
        </li>
        <li>
          - Communication : Pour vous informer des dernières actualités
          artistiques, des commentaires sur vos articles, et des nouvelles
          fonctionnalités de notre site.
        </li>
        <li>
          - Sécurité : Pour protéger Pinceaux Progressifs contre les activités
          frauduleuses et garantir la sécurité de notre communauté.
        </li>
        <li>
          {" "}
          - Amélioration de l'expérience utilisateur : Pour analyser et
          améliorer notre site, y compris l'optimisation de la convivialité et
          la personnalisation du contenu.
        </li>
      </ul>
      <h3>3. Partage des Données Personnelles</h3>
      <p>
        Nous ne vendons ni ne louons vos données personnelles à des tiers.
        Cependant, nous pouvons partager vos informations dans les cas suivants
        :{" "}
      </p>
      <ul>
        <li>
          - Autorisation : Lorsque vous publiez du contenu sur Pinceaux
          Progressifs, il peut être visible par d'autres utilisateurs.
        </li>
        <li>
          - Partenaires de confiance : Nous pouvons partager des données avec
          des partenaires de confiance qui nous aident à fournir des services,
          mais uniquement dans le but de vous offrir une expérience améliorée.
        </li>
        <li>
          - Conformité légale : Si nécessaire, nous pouvons partager des données
          pour respecter la loi, les réglementations, ou pour répondre à des
          demandes gouvernementales.
        </li>
      </ul>
      <h3>4. Contrôle de vos Données Personnelles</h3>
      <p>
        Vous avez le contrôle de vos données personnelles sur Pinceaux
        Progressifs :
      </p>{" "}
      <ul>
        <li>
          - Accès et Modification : Vous pouvez accéder à vos informations de
          compte et les modifier à tout moment dans les paramètres de votre
          profil.
        </li>
        <li>
          - Suppression : Vous pouvez supprimer votre compte à tout moment, ce
          qui entraînera la suppression de vos données personnelles de notre
          système.
        </li>
      </ul>
      <h3>5. Sécurité des Données</h3>
      <p>
        Nous prenons des mesures pour protéger vos données personnelles, y
        compris le cryptage des informations sensibles, l'accès limité aux
        données, et la surveillance régulière de notre sécurité.
      </p>
      <h3>6. Conformité à la Protection des Données</h3>
      <p>
        Nous nous conformons aux lois et réglementations applicables en matière
        de protection des données, y compris les dispositions du Règlement
        Général sur la Protection des Données (RGPD) de l'Union européenne.
      </p>
      <h3>Contrôle de la Conformité</h3>
      <p>
        Pinceaux Progressifs s'engage à respecter les normes de protection des
        données en vigueur, notamment le Règlement Général sur la Protection des
        Données (RGPD) de l'Union européenne. Nous nous engageons à :{" "}
      </p>{" "}
      <ul>
        <li>
          - Collecter et traiter les données personnelles de manière
          transparente, équitable et légale.
        </li>
        <li>
          - Utiliser les données personnelles uniquement aux fins spécifiées et
          avec le consentement de l'utilisateur lorsque cela est nécessaire.
        </li>
        <li>
          - Protéger les données personnelles en mettant en place des mesures de
          sécurité appropriées pour prévenir les violations de données.
        </li>
        <li>
          - Permettre aux utilisateurs d'accéder à leurs données personnelles,
          de les modifier ou de les supprimer selon leurs préférences.
        </li>
        <li>
          - Répondre rapidement aux demandes des utilisateurs concernant leurs
          données personnelles et la confidentialité.
        </li>
      </ul>
      <p>
        Nous sommes déterminés à maintenir la confidentialité et{" "}
        <span className="underline-2">
          la sécurité de vos données personnelles
        </span>{" "}
        et à nous conformer à toutes les lois et réglementations en matière de
        protection des données. Si vous avez des préoccupations ou des questions
        concernant la conformité ou la confidentialité des données, veuillez
        nous contacter à{" "}
        <span className="underline-5">ponsjeffrey@gmail.com.</span>
      </p>
    </main>
  );
};

export default Privacy;
