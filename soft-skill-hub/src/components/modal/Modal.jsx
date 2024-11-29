import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "../modal/Modal.css"; // Certifique-se de que o CSS está correto
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';  // Importando o ícone "fa-xmark"

const Modal = ({ isOpen, onClose }) => {
  const [isRegister, setIsRegister] = useState(false); // Controla se está no formulário de cadastro
  const [isClosing, setIsClosing] = useState(false); // Controla animações
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSwitchToRegister = () => {
    setIsRegister(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegister(false);
  };

  React.useEffect(() => {
    if (!isOpen) {
      setIsClosing(false); 
      setTimeout(() => {
        setIsClosing(false);
      }, 500); 
    }
  }, [isOpen]);

  if (!isOpen && !isClosing) return null; 

  const handleModalClick = (e) => {
    e.stopPropagation(); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); 

    try {
      const response = await fetch("http://localhost:5000/usuarios", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), 
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Cadastro realizado com sucesso!");
        setFormData({
          name: "",
          email: "",
          password: "",
        });
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
      const response = await fetch(`http://localhost:5000/usuarios?email=${formData.email}&password=${formData.password}`, {
        method: "GET",  
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const result = await response.json();
  
      if (result.length > 0) {
        // Armazenando o nome do usuário no localStorage
        localStorage.setItem("userName", result[0].name);  // Armazenando o nome do primeiro usuário encontrado
        
        setMessage("Login bem-sucedido!");
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
      className={`wrapper-container ${isOpen ? 'fade-in' : 'fade-out'}`}
      onClick={onClose}  
    >
      <div
        className={`wrapper ${isOpen ? 'fade-in' : 'fade-out'} ${isRegister ? 'active' : ''}`}
        onClick={handleModalClick}
      >
        {/* Botão de fechar */}
        <span className="icon-close" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </span>

        {/* Formulário de Login */}
        {!isRegister ? (
          <div className="form-box login">
            <h2>Login</h2>
            <form onSubmit={handleSubmitLogin}>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
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
                <span className="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <label>Senha</label>
              </div>
              <button type="submit" className="btn" disabled={loading}>
                {loading ? "Entrando..." : "Entrar"}
              </button>
              <div className="login-register">
                <p>
                  Não tem uma conta?{" "}
                  <button className="register-link" onClick={handleSwitchToRegister}>
                    Registre-se
                  </button>
                </p>
              </div>
            </form>
            {message && <p className="feedback-message">{message}</p>}
          </div>
        ) : (
          // Formulário de Cadastro
          <div className="form-box register">
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmitRegister}>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="person"></ion-icon>
                </span>
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
                <span className="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
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
                <span className="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
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
              <button type="submit" className="btn" disabled={loading}>
                {loading ? "Cadastrando..." : "Cadastrar"}
              </button>
              <div className="login-register">
                <p>
                  Já tem uma conta?{" "}
                  <button className="login-link" onClick={handleSwitchToLogin}>
                    Login
                  </button>
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
