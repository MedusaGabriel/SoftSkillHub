import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUncharted } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "../styles/Header.css";
import PropTypes from 'prop-types';

function Header({ toggleModal }) {  // Receber a função toggleModal como prop
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

