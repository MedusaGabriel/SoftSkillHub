import { useState } from "react";
import "./Cadastro.css";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    name: "",
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

  // Função para enviar os dados ao back-end
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    setMessage(""); 

    try {
      const response = await fetch("/api/cadastro", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), 
      });

      const result = await response.json(); 

      if (response.ok) {
        // Se a resposta for OK, exibe a mensagem de sucesso
        setMessage("Cadastro realizado com sucesso!");
      } else {
        // Caso contrário, exibe a mensagem de erro
        setMessage(result.message || "Erro ao cadastrar.");
      }
    } catch {
      // Caso ocorra algum erro na requisição
      setMessage("Erro na comunicação com o servidor.");
    } finally {
      setLoading(false); // Fim do carregamento
    }
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-form">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
            {loading ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>
        {message && <p className="feedback-message">{message}</p>}
      </div>
    </div>
  );
};

export default Cadastro;
