import React from 'react';
import './Sobre.css'; // Importando os estilos da página Sobre
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Sobre() {
  return (
    <div className="container-Home">
      <div className="welcome">
        <div className="text-container">
          <h1>Sobre o <span id="soft-h1">Soft Skill Hub</span></h1>
          <p>
            O Soft Skill Hub é uma plataforma dedicada ao desenvolvimento de habilidades interpessoais,
            também conhecidas como soft skills. Nosso objetivo é ajudar você a aprimorar suas competências
            através de desafios práticos e reflexões. Participe de uma comunidade ativa e colaborativa,
            explore métodos inovadores para desenvolver suas habilidades e acompanhe seu progresso ao longo do tempo.
          </p>
        </div>
      </div>
      <footer className="footer">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <p>&copy; 2023 Soft Skill Hub. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Sobre;