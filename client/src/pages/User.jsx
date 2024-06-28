/* eslint-disable react/button-has-type */
import  { useEffect, useState } from "react";
import Webcam from "../components/Webcam";


function User() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const storedPhotos = JSON.parse(localStorage.getItem("photos")) || [];
    setPhotos(storedPhotos);
  }, []);

  const addPhoto = (photo) => {
    const updatedPhotos = [...photos, photo];
    setPhotos(updatedPhotos);
    localStorage.setItem("photos", JSON.stringify(updatedPhotos));
  };

  const sendPhotoToGallery = async (photo) => {
    try {
      const response = await fetch("https://your-api-endpoint.com/gallery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ photo }),
      });

      if (response.ok) {
        const updatedPhotos = photos.filter((p) => p !== photo);
        setPhotos(updatedPhotos);
        localStorage.setItem("photos", JSON.stringify(updatedPhotos));
      } else {
        console.error("Failed to send photo to gallery");
      }
    } catch (err) {
      console.error("Error sending photo to gallery:", err);
    }
  };

  const deletePhoto = (photo) => {
    const updatedPhotos = photos.filter((p) => p !== photo);
    setPhotos(updatedPhotos);
    localStorage.setItem("photos", JSON.stringify(updatedPhotos));
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
        <Webcam addPhoto={addPhoto} />
      </div>
      <h3>Photos Capturées</h3>
      <div className="photos-container">
        {photos.map((photo, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="photo-item">
            <img src={photo} alt={`Captured ${index}`} />
            <div className="photo-buttons">
              <button onClick={() => sendPhotoToGallery(photo)}>
                Enregistrer
              </button>
              <button onClick={() => deletePhoto(photo)}>Supprimer</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default User;
