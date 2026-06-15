import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function Events() {
  const [eventos, setEventos] = useState([]);

  async function carregarEventos() {
    const response =
      await api.get("/eventos");

    setEventos(response.data);
  }

  async function excluir(id) {
    await api.delete(`/eventos/${id}`);

    carregarEventos();
  }

  useEffect(() => {
    carregarEventos();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2>
          Eventos Cadastrados
        </h2>

        <table className="table table-striped">

          <thead>
            <tr>
              <th>ID</th>
              <th>Time A</th>
              <th>Time B</th>
              <th>Esporte</th>
              <th>Status</th>
              <th></th>
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