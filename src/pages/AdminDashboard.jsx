import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const { usuario, logout } =
    useContext(AuthContext);

  const navigate = useNavigate();

  function sair() {
    logout();
    navigate("/");
  }

  return (
    <div className="container mt-4">

      <h1>
        Bem-vindo Admin
      </h1>

      <p>
        {usuario?.nome}
      </p>

      <button
        className="btn btn-danger"
        onClick={sair}
      >
        Sair
      </button>

    </div>
  );
}