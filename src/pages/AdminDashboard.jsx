import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

export default function AdminDashboard() {
  const [usuarios, setUsuarios] = useState(0);
  const [eventos, setEventos] = useState(0);
  const [eventosAbertos, setEventosAbertos] = useState(0);
  const [apostas, setApostas] = useState(0);

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    try {
      const usuariosRes =
        await api.get("/usuarios");

      const eventosRes =
        await api.get("/eventos");

      const apostasRes =
        await api.get("/apostas");

      setUsuarios(
        usuariosRes.data.filter(
          u => u.perfil === "usuario"
        ).length
      );

      setEventos(
        eventosRes.data.length
      );

      setEventosAbertos(
        eventosRes.data.filter(
          e => e.status === "aberto"
        ).length
      );

      setApostas(
        apostasRes.data.length
      );

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2>
          Dashboard do Administrador
        </h2>

        <div className="row mt-4">

          <div className="col-md-3">
            <div className="card shadow text-center">
              <div className="card-body">
                <h5>Usuários</h5>
                <h2>{usuarios}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow text-center">
              <div className="card-body">
                <h5>Eventos</h5>
                <h2>{eventos}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow text-center">
              <div className="card-body">
                <h5>Eventos Abertos</h5>
                <h2>{eventosAbertos}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow text-center">
              <div className="card-body">
                <h5>Apostas</h5>
                <h2>{apostas}</h2>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-5">

          <div className="alert alert-info">
            Bem-vindo ao painel administrativo da Bet Acadêmica.
          </div>

        </div>

      </div>
    </>
  );
}