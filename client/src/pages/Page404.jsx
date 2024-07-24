import { Link } from "react-router-dom";

function Page404() {
  return (
    <section>
      <h2>Bonjour !</h2>

      <p>Vous vous êtes égaré il me semble ?</p>
      <p>Pas de panique, suivez le guide !</p>

      <p>Pour un retour à l'accueil cliquz sur le lien ci-dessous :</p>
      <Link to="/" className="home-btn">
        Home
      </Link>
    </section>
  );
}

export default Page404;
