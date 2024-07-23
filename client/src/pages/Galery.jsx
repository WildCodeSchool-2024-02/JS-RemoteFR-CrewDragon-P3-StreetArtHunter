import axios from "axios";
import { useState, useEffect } from "react";

const url = import.meta.env.VITE_API_URL;

function trouve(id, pictures) {
  for (let i = 0; i < pictures.length; i += 1) {
    if (pictures[i].artwork_id === id) {
      return pictures[i].picture;
    }
  }
  return -1;
}

function Galery() {
  const [artworks, setArtworks] = useState([]);
  const [pictures, setPictures] = useState([]);

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

  useEffect(() => {
    const getPictures = async () => {
      try {
        const res = await axios.get(`${url}/api/pictures`);

        setPictures(res.data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    getPictures();
  }, []);

  return (
    <section className="galery-section">
      <h2>Les oeuvres trouvées par la communauté !</h2>
      <div className="galery">
        {artworks.map((artwork) => (
          <article key={artwork.id} className="cardGalery">
            <h3 className="name">{artwork.title}</h3>
            <img
              src={`${import.meta.env.VITE_API_URL}/uploads/${trouve(artwork.id, pictures)}`}
              alt="L'artwork"
              className="picture"
            />
            <p>{artwork.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Galery;
