import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../login/Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Coloquei o useNavigate aqui dentro do componente

  // Lidar com transição de fechamento
  useEffect(() => {
    if (!isOpen) {
      setIsClosing(true); // Ativa o estado de fechamento
      const timeout = setTimeout(() => setIsClosing(false), 1000); // Tempo para animação terminar
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isOpen && !isClosing) return null; // Só renderiza se o modal está abrindo/fechando

  const handleModalClick = (e) => {
    e.stopPropagation(); // Evita fechar o modal ao clicar dentro dele
  };

  const handleSwitchToRegister = () => setIsRegister(true);

  const handleSwitchToLogin = () => setIsRegister(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Cadastro realizado com sucesso!");
        setFormData({ name: "", email: "", password: "" });
      } else {
        setMessage(result.message || "Erro ao cadastrar.");
      }
    } catch {
      setMessage("Erro na comunicação com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        `http://localhost:5000/usuarios?email=${formData.email}&password=${formData.password}`
      );

      const result = await response.json();

      if (result.length > 0) {
        localStorage.setItem("userName", result[0].name);
        setMessage("Login bem-sucedido! Entrando...");
        
        // Fechar o modal, resetar o formulário e aguardar alguns segundos antes de redirecionar
        setTimeout(() => {
          onClose(); // Fechar o modal
          setFormData({ name: "", email: "", password: "" }); // Resetar os dados do formulário
          navigate('/habilidades'); // Redirecionar para a página de habilidades
        }, 2000); // Aguardar 2 segundos antes de redirecionar
      } else {
        setMessage("Email ou senha inválidos.");
      }
    } catch {
      setMessage("Erro na comunicação com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`wrapper-container ${isClosing ? "fade-out" : "fade-in"}`}
      onClick={onClose}
    >
      <div
        className={`wrapper ${isRegister ? "active" : ""} ${
          isClosing ? "fade-out" : "fade-in"
        }`}
        onClick={handleModalClick}
      >
        <span className="icon-close" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </span>

        {!isRegister ? (
          <div className="form-box login">
            <h2>Login</h2>
            <form onSubmit={handleSubmitLogin}>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label>Email</label>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <label>Senha</label>
              </div>
              <button id="btn-entrar" type="submit" className="btn" disabled={loading}>
                {loading ? "Entrando..." : "Entrar"}
              </button>
              <div className="login-register">
                <p>
                  Não tem uma conta?{" "}
                  <button id="btn-modalLogin" onClick={handleSwitchToRegister}>Registre-se</button>
                </p>
              </div>
            </form>
            {message && <p className="feedback-message">{message}</p>}
          </div>
        ) : (
          <div className="form-box register">
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmitRegister}>
              <div className="input-box">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label>Nome</label>
              </div>
              <div className="input-box">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label>Email</label>
              </div>
              <div className="input-box">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <label>Senha</label>
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" /> Eu concordo com os termos
                </label>
              </div>
              <button id="btn-entrar" type="submit" className="btn" disabled={loading}>
                {loading ? "Cadastrando..." : "Cadastrar"}
              </button>
              <div className="login-register">
                <p>
                  Já tem uma conta?{" "}
                  <button id="btn-modalLogin" onClick={handleSwitchToLogin}>Login</button>
                </p>
              </div>
            </form>
            {message && <p className="feedback-message">{message}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
