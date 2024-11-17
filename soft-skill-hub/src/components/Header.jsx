import { useEffect } from 'react'; // Importando o useEffect
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUncharted } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "../styles/Header.css";
import PropTypes from 'prop-types';

function Header({ toggleModal }) {
  // Adicionando o código de animação de rolagem
  useEffect(() => {
    const handleScroll = () => {
      let header = document.querySelector('#header');
      
      header.classList.toggle('Scrolling', window.scrollY > 200);
    };

    // Adicionando o evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpeza do evento quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O array vazio [] garante que o useEffect seja chamado apenas uma vez

  return (
    <header id="header">
      <div className="Hcontainer">
        <div className="flex">
          {/* Logo */}
          <a href="#">
            <FontAwesomeIcon icon={faUncharted} className="IconSoft" />
          </a>

          {/* Navegação */}
          <nav className="navigation">
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Habilidades</a></li>
              <li><a href="#">Práticas</a></li>
              <li><a href="#">Perfil</a></li>
            </ul>
          </nav>

          {/* Botão de login/registro que agora abre o modal */}
          <div className="btn-Hmodal">
            <button id="btn-modal" onClick={toggleModal}> {/* Chama a função toggleModal */}
              <FontAwesomeIcon icon={faUser} className="IconUser" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Header;
