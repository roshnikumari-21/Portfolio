
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../pages/AuthContext";

const Protected = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="/protected" />;
};

export default Protected;
