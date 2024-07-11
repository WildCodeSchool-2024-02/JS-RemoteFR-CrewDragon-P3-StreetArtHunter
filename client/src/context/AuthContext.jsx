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
  const [user, setUser] = useState({});
  useEffect(() => {
    console.info("coucou de useEffect", user);
  }, [user]);

  const login = useCallback((person) => {
    console.info("Ici c'est ce que tu as recup", person);
    setUser(person);
    console.info("after", user);
    
    setIsAuthenticated(true);
    console.info("coucou tu es co", user);
  }, [user]);

  const logout = async () => {
    try {
      await axios.post("/api/auth/logout");
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
      throw new Error("Failed to logout.");
    }
  };

  const value = useMemo(
    () => ({ isAuthenticated, user, login, logout }),
    [isAuthenticated, login, user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
}