import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  usuario,
  perfil,
}) {
  if (!usuario) {
    return <Navigate to="/" />;
  }

  if (perfil && usuario.perfil !== perfil) {
    return <Navigate to="/" />;
  }

  return children;
}