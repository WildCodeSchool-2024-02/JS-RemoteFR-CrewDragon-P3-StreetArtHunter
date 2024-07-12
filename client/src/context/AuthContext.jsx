import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [person, setPerson] = useState({});
  useEffect(() => {
    console.info("coucou de useEffect", person);
  }, [person]);

  const login = useCallback((someone) => {
    console.info("Ici c'est ce que tu as recup", someone);
    setPerson(someone);
    console.info("after", person);
    
    setIsAuthenticated(true);
    console.info("coucou tu es co", person);
  }, [person]);

  const logout = async () => {
    try {
      await axios.post("/api/auth/logout");
      setIsAuthenticated(false);
      setPerson(null);
    } catch (error) {
      console.error("Logout error:", error);
      throw new Error("Failed to logout.");
    }
  };

  const value = useMemo(
    () => ({ isAuthenticated, person, login, logout }),
    [isAuthenticated, login, person]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
}