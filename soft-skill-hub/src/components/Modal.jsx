import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css';  // Certifique-se de que o CSS está correto

const Modal = ({ isOpen, onClose }) => {
  const [isRegister, setIsRegister] = React.useState(false);

  const handleSwitchToRegister = () => {
    setIsRegister(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegister(false);
  };

  if (!isOpen) return null;  // Se o modal não estiver aberto, não renderiza nada.

  return (
    <div className={`wrapper-container ${isRegister ? "active-popup" : ""}`}>
      <div className={`wrapper ${isRegister ? "active" : ""}`}>
        <span className="icon-close" onClick={onClose}>
          <ion-icon name="close"></ion-icon>
        </span>

        {/* Formulário de Login */}
        {!isRegister ? (
          <div className="form-box login">
            <h2>Login</h2>
            <form>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="password" required />
                <label>Senha</label>
              </div>
              <button type="submit" className="btn">Entrar</button>
              <div className="login-register">
                <p>
                  Não tem uma conta?{" "}
                  <button className="register-link" onClick={handleSwitchToRegister}>
                    Registre-se
                  </button>
                </p>
              </div>
            </form>
          </div>
        ) : (
          // Formulário de Cadastro
          <div className="form-box register">
            <h2>Cadastro</h2>
            <form>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="person"></ion-icon>
                </span>
                <input type="text" required />
                <label>Usuário</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="password" required />
                <label>Senha</label>
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" /> Eu concordo com os termos
                </label>
              </div>
              <button type="submit" className="btn">Cadastrar</button>
              <div className="login-register">
                <p>
                  Já tem uma conta?{" "}
                  <button className="login-link" onClick={handleSwitchToLogin}>
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
