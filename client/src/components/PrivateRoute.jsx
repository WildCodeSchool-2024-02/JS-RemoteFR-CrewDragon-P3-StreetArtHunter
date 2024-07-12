import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children, requiredRole }) {
  const { isAuthenticated, person } = useAuth();
  const { user } = person;

  if (!isAuthenticated) {
    return <Navigate to="/connexion" />;
  }

  // Vérifie si l'utilisateur a un rôle qui permet d'accéder à la route
  if (user.role_id !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
  requiredRole: PropTypes.number.isRequired,
};

export default PrivateRoute;
