import Webcam from "../components/Webcam";

function User() {
  return (
    <section>
      <h2>Bienvenu dans votre espace !</h2>
      <p>
        Vous pouvez participer à faire grandir la collection en proposant les
        oeuvres de street art que vous rencontrez, en envoyant une photo de
        celle-ci.{" "}
      </p>
      <h3>Prendre une photo</h3>
      {/* Condition pour afficher Webcam uniquement en version mobile */}
      <div className="webcam-container">
        <Webcam />
      </div>
    </section>
  );
}

export default User;
