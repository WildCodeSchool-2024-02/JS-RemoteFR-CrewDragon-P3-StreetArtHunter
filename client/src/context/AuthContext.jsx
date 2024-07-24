import {
  createContext,
  useContext,
  useState,
 
  useMemo,
  useCallback,
} from "react";
import PropTypes from "prop-types";


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [person, setPerson] = useState({});
  

  const login = useCallback((someone) => {
    setPerson(someone);
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    setPerson({});
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(
    () => ({ isAuthenticated, person, login, logout }),
    [isAuthenticated, login, logout, person]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
