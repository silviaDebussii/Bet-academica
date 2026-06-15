import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import Login from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import UserDashboard from "../pages/UserDashboard";
import Events from "../pages/Events";
import CreateEvent from "../pages/CreateEvent";
import BetPage from "../pages/BetPage";
import History from "../pages/History";
import Ranking from "../pages/Ranking";

import ProtectedRoute from "../components/ProtectedRoute";
import { AuthContext } from "../contexts/AuthContext";

export default function AppRoutes() {
  const { usuario } = useContext(AuthContext);

  return (
    <Routes>
     
      <Route path="/" element={<Login />} />

  
      <Route
        path="/admin"
        element={
          <ProtectedRoute usuario={usuario} perfil="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/eventos"
        element={
          <ProtectedRoute usuario={usuario} perfil="admin">
            <Events />
          </ProtectedRoute>
        }
      />

      <Route
        path="/criar-evento"
        element={
          <ProtectedRoute usuario={usuario} perfil="admin">
            <CreateEvent />
          </ProtectedRoute>
        }
      />

  
      <Route
        path="/usuario"
        element={
          <ProtectedRoute usuario={usuario} perfil="usuario">
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/apostar"
        element={
          <ProtectedRoute usuario={usuario} perfil="usuario">
            <BetPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/historico"
        element={
          <ProtectedRoute usuario={usuario} perfil="usuario">
            <History />
          </ProtectedRoute>
        }
      />

      <Route path="/ranking" element={<Ranking />} />
    </Routes>
  );
}