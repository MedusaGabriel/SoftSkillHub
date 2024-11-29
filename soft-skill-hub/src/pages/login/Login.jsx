import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para enviar os dados ao back-end (ou JSON Server)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Resetando a mensagem de erro

    try {
      // Fazendo uma requisição GET para simular o login
      const response = await fetch(`http://localhost:5000/usuarios?email=${formData.email}&senha=${formData.password}`);

      const result = await response.json(); // Recebe os dados de resposta

      if (response.ok && result.length > 0) {
        // Se o usuário existir e a resposta for OK, login bem-sucedido
        setMessage("Login realizado com sucesso!");
        localStorage.setItem("user", JSON.stringify(result[0])); // Simulando o login com o localStorage
        // Redireciona para a página de Habilidades
        window.location.href = "/habilidades";
      } else {
        // Caso contrário, exibe a mensagem de erro
        setMessage("Usuário ou senha inválidos.");
      }
    } catch (error) {
      console.error(error); // Log the error to the console
      // Caso ocorra algum erro na requisição
      setMessage("Erro na comunicação com o servidor.");
    } finally {
      setLoading(false); // Fim do carregamento
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
        {message && <p className="feedback-message">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
