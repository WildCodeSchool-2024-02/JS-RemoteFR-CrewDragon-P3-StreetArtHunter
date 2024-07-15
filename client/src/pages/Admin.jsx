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

  console.info("review", review);

  return (
    <>
    <div>
      <h1>Admin Page</h1>
      {users && users.map((user) => <p key={user.id}>{user.pseudo}</p>)}
    </div>
    <div>
      {review && review.map((tac, index) => <img key={index} src={`${import.meta.env.VITE_API_URL}/uploads/${tac.picture}`} alt="img"/>)}    
      </div>
    </>
  );
}

export default Admin;
