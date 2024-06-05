function PopupConnexion() {
  return (
    <>
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

      <input type="submit" value="Connexion" />
    </>
  );
}

export default PopupConnexion;
