import workArt from "../data/tempGaleryData";

function Galery() {
  return (
    <>
      <p>Les oeuvres trouvées par la communauté !</p>
      <section>
        {workArt.map((art) => (
          <div key={art.id}>
            <p>{art.name}</p>
            <img src={art.picture} alt="oeuvre de street art" />
            <p>{art.artist}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Galery;
