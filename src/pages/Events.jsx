import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

export default function Events() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    carregarEventos();
  }, []);

  async function carregarEventos() {
    const response = await api.get("/eventos");
    setEventos(response.data);
  }

  async function excluir(id) {
    if (!window.confirm("Deseja excluir este evento?")) {
      return;
    }

    await api.delete(`/eventos/${id}`);
    carregarEventos();
  }

  async function encerrar(evento) {
    const resultado = prompt(
      `Digite o vencedor:\n${evento.timeA} ou ${evento.timeB}`
    );

    if (!resultado) return;

    await api.patch(`/eventos/${evento.id}`, {
      status: "encerrado",
      resultado,
    });

    await processarApostas(
      evento.id,
      resultado
    );

    carregarEventos();

    alert("Evento encerrado com sucesso!");
  }

  async function processarApostas(
    eventoId,
    resultado
  ) {
    const response =
      await api.get("/apostas");

    const apostasEvento =
      response.data.filter(
        (aposta) =>
          aposta.eventoId === eventoId
      );

    for (const aposta of apostasEvento) {
      if (
        aposta.palpite.toLowerCase() ===
        resultado.toLowerCase()
      ) {
        const retorno =
          aposta.valor * 2;

        await api.patch(
          `/apostas/${aposta.id}`,
          {
            status: "ganhou",
            retorno,
          }
        );

        const usuario =
          await api.get(
            `/usuarios/${aposta.usuarioId}`
          );

        await api.patch(
          `/usuarios/${aposta.usuarioId}`,
          {
            saldo:
              usuario.data.saldo +
              retorno,
          }
        );
      } else {
        await api.patch(
          `/apostas/${aposta.id}`,
          {
            status: "perdeu",
          }
        );
      }
    }
  }

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2 className="mb-4">
          Eventos Cadastrados
        </h2>

        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Time A</th>
              <th>Time B</th>
              <th>Esporte</th>
              <th>Status</th>
              <th>Resultado</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {eventos.map((evento) => (
              <tr key={evento.id}>
                <td>{evento.id}</td>

                <td>{evento.timeA}</td>

                <td>{evento.timeB}</td>

                <td>{evento.esporte}</td>

                <td>{evento.status}</td>

                <td>
                  {evento.resultado || "-"}
                </td>

                <td>
                  {evento.status ===
                  "aberto" ? (
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() =>
                        encerrar(evento)
                      }
                    >
                      Encerrar
                    </button>
                  ) : (
                    <button
                      className="btn btn-secondary btn-sm me-2"
                      disabled
                    >
                      Encerrado
                    </button>
                  )}

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      excluir(evento.id)
                    }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}