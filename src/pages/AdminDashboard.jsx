import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h1>
          Painel do Administrador
        </h1>

        <div className="row mt-4">

          <div className="col-md-4">

            <div className="card p-3">

              <h5>
                Gerenciar Eventos
              </h5>

              <Link
                className="btn btn-primary"
                to="/eventos"
              >
                Ver Eventos
              </Link>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card p-3">

              <h5>
                Novo Evento
              </h5>

              <Link
                className="btn btn-success"
                to="/criar-evento"
              >
                Criar
              </Link>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}