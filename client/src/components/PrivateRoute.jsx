import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children, requiredRole }) {
  const { isAuthenticated, person } = useAuth();
  const user = person?.user;

  if (!isAuthenticated) {
    return <Navigate to="/connexion" />;
  }

  if (requiredRole && user.role_id !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired,
  // eslint-disable-next-line react/require-default-props
  requiredRole: PropTypes.number,
};

export default PrivateRoute;
