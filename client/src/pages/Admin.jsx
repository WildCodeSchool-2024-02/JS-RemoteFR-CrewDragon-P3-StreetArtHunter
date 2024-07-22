/* eslint-disable camelcase */

import { useEffect, useState } from "react";
import axios from "axios";

function findArtwork(lat, long, artworks) {
  for (let i = 0; i < artworks.length; i += 1) {
    if (lat === artworks[i].lattitude && long === artworks[i].longitude) {
      return artworks[i].id;
    }
  }

  return -1;
}

function trouve(id, pictures) {
  for (let i = 0; i < pictures.length; i += 1) {
    if (pictures[i].artwork_id === id) {
      console.info( pictures[i].picture );
      return pictures[i].picture;
    }
  }
  console.info("je n'ai rien trouve: ", -1);
  return -1;
}

function Admin() {
  const url = import.meta.env.VITE_API_URL;
  const [users, setUsers] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [artworks, setArtworks] = useState([]);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/api/pictures`)
      .then((response) => {
        setPictures(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des pictures :",
          error
        );
      });
  }, [url]);

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
  }, [url]);

  useEffect(() => {
    axios
      .get(`${url}/api/persons`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des utilisateurs :",
          error
        );
      });
  }, [url]);

  useEffect(() => {
    axios
      .get(`${url}/api/review`, { withCredentials: true })
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des reviews :", error);
      });
  }, [url]);

  const handleModifyUser = () => alert("En cours de developpement");

  const handleDelete = (endpoint) => {
    axios
      .delete(`${url}/api/${endpoint}`, { withCredentials: true })
      .then((response) => {
        console.info({ REPONSE: response });
      })
      .catch((error) => {
        console.error("une erreur est survenu lors du delete", error);
      });
  };

  const handleAccept = async (review) => {
    const artwork_id = findArtwork(
      review.lattitude,
      review.longitude,
      artworks
    );

    console.info({ review });

    if (artwork_id === -1) {
      const idCreate = async () =>
        axios.post(
          `${url}/api/artworks`,
          {
            title: "",
            lattitude: review.lattitude,
            longitude: review.longitude,
            desc: null,
          },
          {
            withCredentials: true,
          }
        );

      const idPicture = await idCreate();

      axios.post(
        `${url}/api/pictures`,
        {
          picture: review.picture,
          person_id: review.person_id,
          artwork_id: idPicture.data.insertId,
        },
        {
          withCredentials: true,
        }
      );
    } else {
      axios.post(
        `${url}/api/pictures`,
        {
          picture: review.picture,
          person_id: review.person_id,
          artwork_id,
        },
        {
          withCredentials: true,
        }
      );
    }
    handleDelete(`review/${review.id}`);
  };

  return (
    <>
      <h1>Admin Page</h1>
      <div className="block">
        <table>
          <thead>
            <tr>
              <th>pseudo</th>
              <th>modifier</th>
              <th>supprimer</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.pseudo}</td>
                  <td>
                    <button
                      type="button"
                      className="adminButton"
                      onClick={() => handleModifyUser()}
                    >
                      Modify
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="adminButton"
                      onClick={() => handleDelete(`persons/${user.id}`)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th>image</th>
              <th>modifier</th>
              <th>supprimer</th>
            </tr>
          </thead>
          <tbody>
            {reviews &&
              reviews.map((review) => (
                <tr key={review.id}>
                  <td>
                    <img
                      key={review.id}
                      src={`${import.meta.env.VITE_API_URL}/uploads/${review.picture}`}
                      alt="img"
                      className="imgAdmin"
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="adminButton"
                      onClick={() => handleAccept(review)}
                    >
                      Accept
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="adminButton"
                      onClick={() => handleDelete(`review/${review.id}`)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th>Name</th>

              <th>supprimer</th>
            </tr>
          </thead>
          <tbody>
            {artworks &&
              artworks.map((artwork) => (
                <tr key={artwork.id}>
                  <td>
                    <img
                      src={`${import.meta.env.VITE_API_URL}/uploads/${trouve(artwork.id, pictures)}`}
                      alt="artwork visuel"
                      className="imgAdmin"
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="adminButton"
                      onClick={() => handleDelete(`artworks/${artwork.id}`)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin;

// 