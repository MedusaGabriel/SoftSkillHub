import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../header/Header.css";
import Modal from '../modal/login/Modal';
import Perfil from '../modal/perfil/Perfil';
import logo from '../../assets/logo.png';


function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPerfilOpen, setIsPerfilOpen] = useState(false);  

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const togglePerfil = () => {
    setIsPerfilOpen(!isPerfilOpen);  
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

  const location = useLocation(); 
  const logoLink = location.pathname === "/home" || location.pathname === "/sobre" ? "/home" : "/habilidades";

  return (
    <header id="header">
      <div className="Hcontainer">
        <div className="flex">
          {/* Logo */}
          <Link to={logoLink}>
            <img src={logo} alt="Logo" className="IconSoft" />
          </Link>

          {/* Navegação */}
          <nav className="navigation">
            <ul>
              {location.pathname === "/home" || location.pathname === "/sobre" ? (
                <>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/sobre">Sobre</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/habilidades">Habilidades</Link></li>
                  <li><Link to="/pratica">Práticas</Link></li>
                </>
              )}
              {/* Botão de abrir o perfil ou modal */}
              <li>
                <button 
                  onClick={location.pathname === "/habilidades" || location.pathname === "/pratica" ? togglePerfil : toggleModal} 
                  className="link-button"
                >
                  {location.pathname === "/habilidades" || location.pathname === "/pratica" ? 'Perfil' : 'Entrar'}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Modal de login */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} />

      {/* Modal de perfil */}
      <Perfil isOpen={isPerfilOpen} onClose={togglePerfil} />
    </header>
  );
};

export default Header;
