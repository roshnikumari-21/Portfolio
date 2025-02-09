import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("adminAuthenticated") === "true"
  );

  useEffect(() => {
    
    const auth = sessionStorage.getItem("adminAuthenticated");
    setIsAuthenticated(auth === "true");
  }, []);

  const login = () => {
    sessionStorage.setItem("adminAuthenticated", "true");
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem("adminAuthenticated");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
