import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import UserDashboard from "../pages/UserDashboard";

import ProtectedRoute from "../components/ProtectedRoute";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function AppRoutes() {
  const { usuario } =
    useContext(AuthContext);

  return (
    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute
            usuario={usuario}
            perfil="admin"
          >
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/usuario"
        element={
          <ProtectedRoute
            usuario={usuario}
            perfil="usuario"
          >
            <UserDashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}