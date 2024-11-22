import { useEffect, useState } from 'react'; // Importando o useEffect e useState
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUncharted } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "../header/Header.css"; // Crie um arquivo separado para o Header
import Modal from '../modal/Modal'; // Certifique-se de que o Modal está sendo importado

function Header() {
  // Estado para controlar a visibilidade do Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para alternar a visibilidade do Modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
              <li><a href="/">Início</a></li>
              <li><a href="/habilidades">Habilidades</a></li>
              <li><a href="#">Práticas</a></li>
              <li><a href="#">Perfil</a></li>
            </ul>
          </nav>

          {/* Botão de login/registro que agora abre o modal */}
          <div className="btn-Hmodal">
            <button id="btn-modal" onClick={toggleModal}>
              <FontAwesomeIcon icon={faUser} className="IconUser" />
            </button>
          </div>

        </div>
      </div>

      {/* Modal: passando as props para controlar a visibilidade e fechamento */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </header>
  );
}

export default Header;
