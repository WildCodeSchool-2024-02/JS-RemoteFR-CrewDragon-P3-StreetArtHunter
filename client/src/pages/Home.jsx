import { useState } from "react";
import { Link } from "react-router-dom";

import PopupConnexion from "../components/PopupConnexion";
import PopupInscription from "../components/PopupInscription";
import Map from "../components/Map";

function Home() {
  const [showPopupConnexion, setShowPopupConnexion] = useState(false);
  const [showPopupInscription, setShowPopupInscription] = useState(false);

  const inscription = () => {
    setShowPopupInscription(true);
  };

  const connexion = () => {
    setShowPopupConnexion(true);
  };

  return (
    <>
      <h2>
        Partez à l&apos;aventure pour découvrir les œuvres d&apos;art autour de
        chez vous !
      </h2>
      <Map />
      <Link to="/instruction">
        <button type="button"> Regles</button>
      </Link>
      <p>
        Pour se faire, aidez-vous de la carte afin de chercher des Street Art
        dans les rues et vous émerveiller de la créativité d&apos;artistes
        talentueux.
      </p>
      <button type="button" onClick={() => inscription()}>
        {" "}
        S'inscrire
      </button>
      <button type="button" onClick={() => connexion()}>
        {" "}
        Connexion
      </button>
      {showPopupInscription ? (
        <PopupInscription setShowPopupInscription={setShowPopupInscription} />
      ) : (
        ""
      )}
      {showPopupConnexion ? (
        <PopupConnexion setShowPopupConnexion={setShowPopupConnexion} />
      ) : (
        ""
      )}
    </>
  );
}

export default Home;
