import { useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../contexts/AuthContext";

export default function UserDashboard() {

  const { usuario } =
    useContext(AuthContext);

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h1>
          Área do Jogador
        </h1>

        <div className="card p-4">

          <h3>
            {usuario?.nome}
          </h3>

          <h4>
            Saldo Atual:
          </h4>

          <h2 className="text-success">
            R$ {usuario?.saldo}
          </h2>

        </div>

      </div>
    </>
  );
}