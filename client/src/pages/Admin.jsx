/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const url = import.meta.env.VITE_API_URL;
  const [users, setUsers] = useState(null);
  const [review, setReview] = useState(null);

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
        setReview(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des utilisateurs :",
          error
        );
      });
  }, [url]);

  const handleModifyUser = () =>
    // eslint-disable-next-line no-alert
    alert('En cours de developpement');

  const handleDelete = ( endpoint) => {
    console.info("Delete", `${url}/api/${endpoint}`);
    axios
      .delete(`${url}/api/${endpoint}`, { withCredentials: true })
      .then((response) => {console.info({REPONSE : response})})
      .catch((error) => {
        console.error("une erreur est survenu lors du delete", error);
      });
  };

  const handleModify = () => {}

  const handleAccept = (tac) =>{
    console.info(tac);
   /* axios
    .post(`${url}/api/picture`) */
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
            {review &&
              review.map((tac, index) => (
                <tr key={index}>
                  <td>
                    <img
                      key={index}
                      src={`${import.meta.env.VITE_API_URL}/uploads/${tac.picture}`}
                      alt="img"
                      className="imgAdmin"
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="adminButton"
                      onClick={() => handleAccept(tac)}
                    >
                      Accept
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="adminButton"
                      onClick={() => handleDelete(`review/${tac.id}`)}
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
