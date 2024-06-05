import PropTypes from "prop-types";

function PopupInscription({ setShowPopupInscription }) {
  const close = () => {
    setShowPopupInscription(false);
  };
  return (
    <>
      <h2>Vous voulez vous inscrire?</h2>

      <label htmlFor="firstname">Entrer votre prenom:</label>
      <input type="text" id="firstname" name="name" required />

      <label htmlFor="lastname">Entrer votre nom de famille:</label>
      <input type="text" id="lastname" name="name" required />

      <label htmlFor="pseudo">Choissisez un pseudo:</label>
      <input
        type="text"
        id="pseudo"
        name="name"
        required
        minLength="4"
        maxLength="15"
      />

      <label htmlFor="email">Entrer votre email:</label>
      <input type="email" id="email" pattern=".+@example\.com" required />

      <label htmlFor="postalcode">Code postal:</label>
      <input type="number" id="postalcode" name="name" required />

      <label htmlFor="city">Ville:</label>
      <input type="text" id="city" name="name" required />

      <label htmlFor="pass">Password (8 characters minimum):</label>
      <input type="password" id="pass" name="password" required />

      <input type="submit" value="Inscription" onClick={() => close()} />
    </>
  );
}

export default PopupInscription;

PopupInscription.propTypes = {
  setShowPopupInscription: PropTypes.bool.isRequired,
};
