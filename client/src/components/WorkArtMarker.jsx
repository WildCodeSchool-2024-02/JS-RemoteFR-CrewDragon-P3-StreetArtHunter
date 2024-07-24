import { Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import axios from "axios";
import icon from "./IconWorkArt";

const url = import.meta.env.VITE_API_URL;

function trouve(id, pictures) {
  for (let i = 0; i < pictures.length; i += 1) {
    if (pictures[i].artwork_id === id) {
      return pictures[i].picture;
    }
  }
  return -1;
}

function WorkArtMarker() {
  const [artworks, setArtworks] = useState([]);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/api/pictures`)
      .then((response) => {
        setPictures(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des pictures :", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${url}/api/artworks`)
      .then((response) => {
        setArtworks(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des utilisateurs :",
          error
        );
      });
  }, []);

  return (
    <>
      {artworks.map((art) => (
        <Marker key={art.id} position={[art.lattitude, art.longitude]} icon={icon}>
          <Popup>
            <h2>{art.title}</h2>
            <img
              src={`${import.meta.env.VITE_API_URL}/uploads/${trouve(art.id, pictures)}`}
              alt={`Work Art ${art.desc}`}
              style={{ width: "100%" }}
            />
          </Popup>
        </Marker>
      ))}
    </>
  );
}

export default WorkArtMarker;
