import React from 'react';
import './Sobre.css'; // Importando os estilos da página Sobre
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Sobre() {
  return (
    <div className="container-Sobre">
      <div className="welcome-Sobre">
        <div className="text-container-Sobre">
          <h1>Sobre o <span id="soft-h1">Soft Skill Hub</span></h1>
          <p>
            O Soft Skill Hub é uma plataforma dedicada ao desenvolvimento de habilidades interpessoais,
            também conhecidas como soft skills. Nosso objetivo é ajudar você a aprimorar suas competências
            através de desafios práticos e reflexões. Participe de uma comunidade ativa e colaborativa,
            explore métodos inovadores para desenvolver suas habilidades e acompanhe seu progresso ao longo do tempo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sobre;