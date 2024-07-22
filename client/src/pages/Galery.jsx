import axios from "axios";
import { useState, useEffect } from "react";

import workArt from "../data/tempGaleryData";

const url = import.meta.env.VITE_API_URL;

function Galery() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const getArtworks = async () => {
      try {
        const res = await axios.get(`${url}/api/artworks`);

        setArtworks(res.data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    getArtworks();
  }, []);

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
        {artworks.map((artwork) => (
          <article key={artwork.id} className="cardGalery">
            <h3 className="name">{artwork.title}</h3>
            <p>{artwork.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Galery;
