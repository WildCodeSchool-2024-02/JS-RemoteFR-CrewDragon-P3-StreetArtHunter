/* eslint-disable react/button-has-type */
import { useState } from "react";
import axios from "axios";

import { useAuth } from "../context/AuthContext";

function User() {
  const { person } = useAuth();
  const { user } = person;
  const [photos, setPhotos] = useState("");
  const [address, setAddress] = useState("");
  const [coord, setCoord] = useState({
    lat: 0,
    lon: 0,
  });

  const sendPhotoToGallery = async (e) => {
    e.preventDefault();
    const fd = new FormData();

    console.info({ coord });

    fd.append("picture", photos);
    fd.append("longitude", coord.lon);
    fd.append("lattitude", coord.lat);
    fd.append("person_id", user.id);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/review`, fd, {
        withCredentials: true,
      });
    } catch (err) {
      console.error("Error sending photo to gallery:", err);
    }
  };

  const handleChange = (e) => {
    setPhotos(e.target.files[0]);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmitAddress = async (e) => {
    e.preventDefault();
    try {
      const responses = await axios.get(
        `https://us1.locationiq.com/v1/search?key=pk.3d499c46c739d29273c60d554f2ab451&q=${address}&format=json`
      );
      setCoord({ lat: responses.data[0].lat, lon: responses.data[0].lon });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <h2>Bienvenue dans votre espace !</h2>
      <p>
        Vous pouvez participer à faire grandir la collection en proposant les
        oeuvres de street art que vous rencontrez, en envoyant une photo de
        celle-ci.
      </p>
      <h3>Prendre une photo</h3>
      <div className="webcam-container">
        <form onSubmit={handleSubmitAddress}>
          <input type="text" value={address} onChange={handleAddress} />
          <p>Les coordonnées GPS : lat : {coord.lat}, lon: {coord.lon}</p>
          <button type="submit"> Search</button>
        </form>
      </div>
      <h3>Photos Capturées</h3>
      <div className="photos-container">
        <form onSubmit={sendPhotoToGallery}>
          <input type="file" name="picture" onChange={handleChange} />
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default User;
