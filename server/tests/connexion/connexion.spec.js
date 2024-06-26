const { app, request } = require("../config");

describe('Test de connexion utilisateur', () => {
  it('doit répondre avec un statut HTTP 200 pour une connexion réussie', async () => {
    const response = await request(app)
      .post('/login') // Remplacez par votre route de connexion
      .send({
        username: 'testuser', // Remplacez par un nom d'utilisateur valide
        password: 'testpassword' // Remplacez par un mot de passe valide
      });
    expect(response.status).toBe(200);
  });

  it('doit répondre avec un statut HTTP 401 pour une connexion échouée', async () => {
    const response = await request(app)
      .post('/login') // Remplacez par votre route de connexion
      .send({
        username: 'wronguser', // Remplacez par un nom d'utilisateur invalide
        password: 'wrongpassword' // Remplacez par un mot de passe invalide
      });
    expect(response.status).toBe(404);
  });
});
