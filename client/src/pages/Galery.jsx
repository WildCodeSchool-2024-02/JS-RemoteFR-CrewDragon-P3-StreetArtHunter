import workArt from "../data/tempGaleryData";

function Galery() {
  return (
    <>
      <p>Les oeuvres trouvées par la communauté !</p>
      <section className="galery">
        {workArt.map((art) => (
          <div key={art.id} className="cardGalery">
            <p className="name">{art.name}</p>
            <img
              src={art.picture}
              alt="oeuvre de street art"
              className="picture"
            />
            <p className="city">{art.city}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Galery;
