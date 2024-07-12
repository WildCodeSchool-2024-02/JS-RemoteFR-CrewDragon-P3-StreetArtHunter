import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children, requiredRole }) {
  const { isAuthenticated, person } = useAuth();
  const {user}= person; // Je destructure person pour ne plus avoir le token

  if (!isAuthenticated) {
    return <Navigate to="/connexion" />;
  }
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
