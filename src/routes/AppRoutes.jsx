import { Routes, Route } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Login</h1>} />
      <Route path="/admin" element={<h1>Admin</h1>} />
      <Route path="/usuario" element={<h1>Usuário</h1>} />
    </Routes>
  );
}