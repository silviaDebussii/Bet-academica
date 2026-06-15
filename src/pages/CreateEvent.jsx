import { useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

export default function CreateEvent() {

  const [timeA, setTimeA] = useState("");
  const [timeB, setTimeB] = useState("");
  const [esporte, setEsporte] =
    useState("");

  const [data, setData] =
    useState("");

  async function salvar(e) {
    e.preventDefault();

    await api.post("/eventos", {
      timeA,
      timeB,
      esporte,
      data,
      status: "aberto",
      resultado: ""
    });

    alert("Evento criado!");

    setTimeA("");
    setTimeB("");
    setEsporte("");
    setData("");
  }

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2>
          Novo Evento
        </h2>

        <form onSubmit={salvar}>

          <input
            className="form-control mb-3"
            placeholder="Time A"
            value={timeA}
            onChange={(e)=>
              setTimeA(e.target.value)
            }
          />

          <input
            className="form-control mb-3"
            placeholder="Time B"
            value={timeB}
            onChange={(e)=>
              setTimeB(e.target.value)
            }
          />

          <input
            className="form-control mb-3"
            placeholder="Esporte"
            value={esporte}
            onChange={(e)=>
              setEsporte(e.target.value)
            }
          />

          <input
            type="date"
            className="form-control mb-3"
            value={data}
            onChange={(e)=>
              setData(e.target.value)
            }
          />

          <button
            className="btn btn-success"
          >
            Salvar
          </button>

        </form>

      </div>
    </>
  );
}