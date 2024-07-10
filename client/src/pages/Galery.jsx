import workArt from "../data/tempGaleryData";

function Galery() {
  return (
    <section className="galery-section">
      <h2>Les oeuvres trouvées par la communauté !</h2>
      <div className="galery">
        {workArt.map((art) => (
          <article key={art.id} className="cardGalery">
            <h3 className="name">{art.name}</h3>
            <img
              src={art.picture}
              alt="oeuvre de street art"
              className="picture"
            />
            <p className="city">{art.city}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Galery;
