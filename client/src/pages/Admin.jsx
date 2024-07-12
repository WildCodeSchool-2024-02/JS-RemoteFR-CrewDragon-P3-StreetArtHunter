import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const url = import.meta.env.VITE_API_URL;
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios.get(`${url}/api/persons`)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
      });
  }, [url]);

  console.info(users);

  return (
    <div>
      <h1>Admin Page</h1>
      {users && users.map((user) => <p key={user.id}>{user.pseudo}</p>)}
    </div>
  );
}

export default Admin;
