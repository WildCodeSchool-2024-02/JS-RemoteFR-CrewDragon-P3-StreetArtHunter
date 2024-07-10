const { app, request } = require("../config");

describe("Test de creation d'un nouvel Artwork)", () => {
    it("Doit répondre avec un statut HTTP 201 pour une creation réussie", async () =>{
        const response = await request(app)
        .post('/api/artworks/')
        .send({
            title: 'New Art', 
            lattitude: 30.258 ,
            longitude: 36.158,
            description: ""
          });
        expect(response.status).toBe(201);
    });

    it('Doit répondre avec un statut HTTP 404 pour une creation échouée', async () => {
        const response = await request(app)
      .post('/api/artworks/') 
      .send({
        title: 'wrong', 
        lattitude: 'need decimal' ,
        longitude: 3586,
        description: ""
      });
    expect(response.status).toBe(404);
    });
});