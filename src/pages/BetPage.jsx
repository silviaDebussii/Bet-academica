import { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

export default function BetPage() {

  const [eventos, setEventos] =
    useState([]);

  const [valor, setValor] =
    useState("");

  const [palpite, setPalpite] =
    useState("");

  const { usuario, login } =
    useContext(AuthContext);

  useEffect(() => {
    carregarEventos();
  }, []);

  async function carregarEventos() {

    const response =
      await api.get("/eventos");

    const abertos =
      response.data.filter(
        e => e.status === "aberto"
      );

    setEventos(abertos);
  }

  async function apostar(evento) {

    if (!valor || !palpite) {
      alert("Preencha tudo");
      return;
    }

    if (Number(valor) > usuario.saldo) {
      alert("Saldo insuficiente");
      return;
    }

    await api.post("/apostas", {
      usuarioId: usuario.id,
      eventoId: evento.id,
      palpite,
      valor: Number(valor),
      status: "pendente",
      retorno: 0
    });

    const novoSaldo =
      usuario.saldo - Number(valor);

    await api.patch(
      `/usuarios/${usuario.id}`,
      {
        saldo: novoSaldo
      }
    );

    const usuarioAtualizado = {
      ...usuario,
      saldo: novoSaldo
    };

    login(usuarioAtualizado);

    alert("Aposta realizada");

    setValor("");
    setPalpite("");
  }

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2>
          Eventos Disponíveis
        </h2>

        {eventos.map(evento => (

          <div
            key={evento.id}
            className="card mb-3 p-3"
          >

            <h4>
              {evento.timeA}
              {" x "}
              {evento.timeB}
            </h4>

            <p>
              {evento.esporte}
            </p>

            <input
              className="form-control mb-2"
              placeholder="Seu palpite"
              onChange={(e)=>
                setPalpite(e.target.value)
              }
            />

            <input
              type="number"
              className="form-control mb-2"
              placeholder="Valor"
              onChange={(e)=>
                setValor(e.target.value)
              }
            />

            <button
              className="btn btn-success"
              onClick={() =>
                apostar(evento)
              }
            >
              Apostar
            </button>

          </div>

        ))}

      </div>
    </>
  );
}