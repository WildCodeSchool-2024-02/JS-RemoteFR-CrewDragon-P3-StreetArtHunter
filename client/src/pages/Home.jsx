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
      <section
        className={
          showPopupConnexion || showPopupInscription
            ? "hide-home"
            : "intro-section"
        }
      >
        <h2>
          Partez à l&apos;aventure pour découvrir les œuvres d&apos;art autour
          de chez vous !
        </h2>
        <p className="desktop-intro">
          Pour se faire, aidez-vous de la carte afin de chercher des Street Art
          dans les rues et vous émerveiller de la créativité d&apos;artistes
          talentueux.
          <br />
          En effet, le paysage urbain regorge de sublimes créations qui
          n'attendent que d'être admirées ! Les œuvres déjà trouvées par la
          communauté sont indiquées sur la carte et exposées dans la page
          galerie du site. Pour vous aussi participer à cette aventure et gagner
          des points pour vos découvertes, vous pouvez vous connecter et les
          prendre en photo !
        </p>
        <Map />
        <p className="mobile-intro">
          Pour se faire, aidez-vous de la carte afin de chercher des Street Art
          dans les rues et vous émerveiller de la créativité d&apos;artistes
          talentueux.
        </p>
        <Link to="/instruction" className="home-btn">
          Règles
        </Link>
      </section>
      <section
        className={
          showPopupConnexion || showPopupInscription ? "hide-home" : "show-home"
        }
      >
        <h2>
          Connectez-vous pour scanner de nouvelles œuvres et gagner des points !
        </h2>
        <div className="log-buttons">
          <a href="#log-in" className="home-btn" onClick={() => connexion()}>
            {" "}
            Connexion
          </a>
          <a href="#sign-in" className="home-btn" onClick={() => inscription()}>
            {" "}
            S'inscrire
          </a>
        </div>
      </section>
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
