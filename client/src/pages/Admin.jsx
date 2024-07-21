/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from "react";
import axios from "axios";

function findArtwork(lat, long, artworks){
  // eslint-disable-next-line no-plusplus
  for(let i=0; i<artworks.length; i++){
    if(lat===artworks[i].lattitude && long===artworks[i].longitude){
      return artworks[i].id;
    }
  }
  return -1;
}

function Admin() {
  const url = import.meta.env.VITE_API_URL;
  const [users, setUsers] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [artworks, setArtworks] = useState([]);

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
        console.error(
          "Erreur lors de la récupération des reviews :",
          error
        );
      });
  }, [url]);

  const handleModifyUser = () =>
    // eslint-disable-next-line no-alert
    alert('En cours de developpement');

  const handleDelete = ( endpoint) => {
    axios
      .delete(`${url}/api/${endpoint}`, { withCredentials: true })
      .then((response) => {console.info({REPONSE : response})})
      .catch((error) => {
        console.error("une erreur est survenu lors du delete", error);
      });
  };

  const handleModify = () => {}

  const handleAccept = (review) =>{
    const artwork_id = findArtwork(review.lattitude, review.longitude, artworks);
    
    if(artwork_id===-1){
      const idCreate = async() => axios.post(`${url}/api/artworks`, {
        title: "",
        city: "",
        lattitude: review.lattitude,
        longitude: review.longitude,
        desc: null,
      }, {
        withCredentials: true
      });

      const temp = async () => axios.post(`${url}/api/pictures`, {
        picture: review.picture,
        person_id: review.person_id,
        artwork_id: idCreate,
      }, {
        withCredentials: true
      });
      console.info({temp});
    }else{
      const temp = async () => axios.post(`${url}/api/pictures`, {
        picture: review.picture,
        person_id: review.person_id,
        artwork_id,
      }, {
        withCredentials: true
      });
      console.info({temp});
    }
   
}
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
              users.map((user, index) => (
                <tr key={index}>
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
                      onClick={() => handleDelete( `persons/${user.id}`)}
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
              reviews.map((review, index) => (
                <tr key={index}>
                  <td>
                    <img
                      key={index}
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
              <th>modifier</th>
              <th>supprimer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <button
                  type="button"
                  className="adminButton"
                  onClick={() => handleModify}
                >
                  Modify
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="adminButton"
                  onClick={() => handleDelete}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Admin;

/*

{review &&
          review.map((tac, index) => (
            <img
              key={index}
              src={`${import.meta.env.VITE_API_URL}/uploads/${tac.picture}`}
              alt="img"
            />
          ))}

          */
