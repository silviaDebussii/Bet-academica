import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

export default function Ranking() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    carregarRanking();
  }, []);

  async function carregarRanking() {
    const response = await api.get("/usuarios");

    const ranking = response.data
      .filter((u) => u.perfil === "usuario")
      .sort((a, b) => b.saldo - a.saldo);

    setUsuarios(ranking);
  }

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2>Ranking</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Posição</th>
              <th>Nome</th>
              <th>Saldo</th>
            </tr>
          </thead>

          <tbody>
            {usuarios.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}º</td>
                <td>{user.nome}</td>
                <td>R$ {user.saldo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}