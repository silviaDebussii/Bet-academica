import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.get("/usuarios");

      const usuario = response.data.find(
        (u) => u.email === email && u.senha === senha
      );

      if (!usuario) {
        setErro("Email ou senha inválidos");
        return;
      }

      login(usuario);

      if (usuario.perfil === "admin") {
        navigate("/admin");
      } else {
        navigate("/usuario");
      }
    } catch (error) {
      setErro("Erro ao conectar com servidor");
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow">

            <div className="card-body">

              <h2 className="text-center mb-4">
                Bet Acadêmica
              </h2>

              {erro && (
                <div className="alert alert-danger">
                  {erro}
                </div>
              )}

              <form onSubmit={handleLogin}>

                <div className="mb-3">
                  <label>Email</label>

                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />
                </div>

                <div className="mb-3">
                  <label>Senha</label>

                  <input
                    type="password"
                    className="form-control"
                    value={senha}
                    onChange={(e) =>
                      setSenha(e.target.value)
                    }
                  />
                </div>

                <button
                  className="btn btn-primary w-100"
                >
                  Entrar
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}