import { Navigate } from "react-router-dom";

import PropTypes from "prop-types";
import { useAuth } from "../context/AuthContext";


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // si NO estoy logueado, mandame al login
    return <Navigate to="/login" replace />;
  }

  // si sí estoy logueado, muestro la página privada
  return children;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ProtectedRoute;
