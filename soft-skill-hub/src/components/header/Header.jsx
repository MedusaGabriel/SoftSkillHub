import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUncharted } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "../header/Header.css";
import Modal from '../modal/Modal';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      let header = document.querySelector('#header');
      header.classList.toggle('Scrolling', window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header">
      <div className="Hcontainer">
        <div className="flex">
          {/* Logo */}
          <Link to="/">
            <FontAwesomeIcon icon={faUncharted} className="IconSoft" />
          </Link>

          {/* Navegação */}
          <nav className="navigation">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><button onClick={toggleModal} className="link-button">Entrar</button></li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Modal: passando as props para controlar a visibilidade e fechamento */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </header>
  );
}

export default Header;