import { Link } from "react-router-dom";
import Map from "../components/Map";
import { useAuth } from "../context/AuthContext"; 

function Home() {
  const { isAuthenticated, logout } = useAuth(); 

  return (
    <>
      <section className="intro-section">
        <h2 className="title-map">
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
        <h2 className="title-rules">
          Suivez les règles afin d'améliorer votre expérience
        </h2>
        <Link to="/instruction" className="home-btn" id="btn_rules">
          Règles
        </Link>
      </section>
      <section>
        <h2 className="title-connect">
          Connectez-vous pour scanner de nouvelles œuvres et gagner des points !
        </h2>
        <div className="log-buttons">
          {!isAuthenticated ? (
            <>
              <Link to="/connexion" className="home-btn" id="btn_log">
                Connexion
              </Link>
              <Link to="/inscription" className="home-btn" id="btn_sign">
                Inscription
              </Link>
            </>
          ) : (
            // eslint-disable-next-line react/button-has-type
            <button onClick={logout} className="home-btn">
              Déconnexion
            </button>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
