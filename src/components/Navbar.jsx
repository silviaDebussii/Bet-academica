import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
  const { usuario, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  function sair() {
    logout();
    navigate("/");
  }

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">

        <Link
          className="navbar-brand"
          to={usuario?.perfil === "admin" ? "/admin" : "/usuario"}
        >
          Bet Acadêmica
        </Link>

        <div className="navbar-nav ms-auto">

          {usuario?.perfil === "admin" && (
            <>
              <Link
                className="nav-link"
                to="/admin"
              >
                Dashboard
              </Link>

              <Link
                className="nav-link"
                to="/eventos"
              >
                Eventos
              </Link>

              <Link
                className="nav-link"
                to="/criar-evento"
              >
                Novo Evento
              </Link>
            </>
          )}

          {usuario?.perfil === "usuario" && (
            <>
              <Link
                className="nav-link"
                to="/usuario"
              >
                Dashboard
              </Link>

              <Link
                className="nav-link"
                to="/apostar"
              >
                Apostar
              </Link>
            </>
          )}

          <button
            className="btn btn-danger ms-3"
            onClick={sair}
          >
            Sair
          </button>

        </div>

      </div>
    </nav>
  );
}