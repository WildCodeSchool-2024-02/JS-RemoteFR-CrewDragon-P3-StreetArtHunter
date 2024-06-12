import PropTypes from "prop-types";

function PopupConnexion({ setShowPopupConnexion }) {
  const close = () => {
    setShowPopupConnexion(false);
  };
  return (
    <section className="popup">
      <h2>Vous voulez vous connecter?</h2>
      <label htmlFor="pseudo">Choissisez un pseudo:</label>
      <input
        type="text"
        id="pseudo"
        name="name"
        required
        minLength="4"
        maxLength="15"
      />
      <label htmlFor="pass">Password (8 characters minimum):</label>
      <input type="password" id="pass" name="password" required />

      <input type="submit" value="Connexion" onClick={() => close()} />
    </section>
  );
}

export default PopupConnexion;

PopupConnexion.propTypes = {
  setShowPopupConnexion: PropTypes.bool.isRequired,
};
