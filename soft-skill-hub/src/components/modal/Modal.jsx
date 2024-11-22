import React from 'react';
import PropTypes from 'prop-types';
import '../modal/Modal.css';  // Certifique-se de que o CSS está correto
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';  // Importando o ícone "fa-xmark"

const Modal = ({ isOpen, onClose }) => {
  const [isRegister, setIsRegister] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleSwitchToRegister = () => {
    setIsRegister(true);
  };
  const handleSwitchToLogin = () => {
    setIsRegister(false);
  };


  React.useEffect(() => {
    if (!isOpen) {
      setIsClosing(false); // Inicia a animação de fade-out
      setTimeout(() => {
        setIsClosing(false); // Reseta o estado após a animação
      }, 500); // Tempo de duração da animação (500ms)
    }
  }, [isOpen]);

  if (!isOpen && !isClosing) return null; // Retorna nulo se o modal estiver fechado

  const handleModalClick = (e) => {
    e.stopPropagation(); // Impede o fechamento do modal quando clicado no conteúdo
  };

  return (
    <div
      className={`wrapper-container ${isOpen ? 'fade-in' : 'fade-out'}`}
      onClick={onClose}  // Fecha o modal se clicar na área externa
    >
      <div
        className={`wrapper ${isOpen ? 'fade-in' : 'fade-out'} ${isRegister ? 'active' : ''}`}
        onClick={handleModalClick} 
      >
        {/* Botão de fechar com FontAwesome */}
        <span className="icon-close" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
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
                <label>Nome</label>
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
