import {
  Routes as ReactDomRoutes,
  Route,
  Navigate,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

// páginas privadas:

import { Conocenos } from "../pages/Conocenos/Conocenos";
import { Productos } from "../pages/Productos/Productos";

import Checkout from "../pages/CheckOut/CheckOut.jsx";

// páginas públicas:


import LoginPage from "../pages/loginRegister/LoginPage.jsx";
import RegisterPage from "../pages/loginRegister/RegisterPage.jsx";
import Home from "../pages/Home/Home.jsx";


function AppRoutes() {
  return (
    <ReactDomRoutes>
      {/* Públicas (sin navbar/footer) */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Privadas (solo si estoy logueado) */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/conocenos"
        element={
          <ProtectedRoute>
            <Conocenos />
          </ProtectedRoute>
        }
      />

      <Route
        path="/productos"
        element={
          <ProtectedRoute>
            <Productos />
          </ProtectedRoute>
        }
      />



      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />

      {/* fallback: cualquier ruta rara manda a "/" */}
      <Route path="*" element={<Navigate to="/Home" replace />} />
    </ReactDomRoutes>
  );
}

export default AppRoutes;
