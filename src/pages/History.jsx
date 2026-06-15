import { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

export default function History() {
  const [apostas, setApostas] = useState([]);
  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    carregarHistorico();
  }, []);

  async function carregarHistorico() {
    const response = await api.get("/apostas");

    const minhas = response.data.filter(
      (aposta) => aposta.usuarioId === usuario.id
    );

    setApostas(minhas);
  }

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2>Histórico de Apostas</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Evento</th>
              <th>Palpite</th>
              <th>Valor</th>
              <th>Status</th>
              <th>Retorno</th>
            </tr>
          </thead>

          <tbody>
            {apostas.map((aposta) => (
              <tr key={aposta.id}>
                <td>{aposta.eventoId}</td>
                <td>{aposta.palpite}</td>
                <td>R$ {aposta.valor}</td>
                <td>{aposta.status}</td>
                <td>R$ {aposta.retorno}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}