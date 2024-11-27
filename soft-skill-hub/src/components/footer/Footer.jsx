import { useState, useEffect } from 'react'; 
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons'; 
import "../footer/Footer.css"; // Certifique-se de ter o estilo do Footer
import { faInstagram, faWhatsapp, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const [isScrolling, setIsScrolling] = useState(false); // Controla o botão "back-to-top"
  const [showFooter, setShowFooter] = useState(false); // Controla a animação do footer
  const location = useLocation();

  // Detecta se houve rolagem
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      // Para o back-to-top
      setIsScrolling(true);

      // Se não houver rolagem por 1 segundo, marca que o scroll está pausado
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false); // Pausa a animação do back-to-top
      }, 1000);

      // Verifica se o usuário está perto do fim da página
      setShowFooter(pageHeight > window.innerHeight && scrollPosition > pageHeight -200); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout); 
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/cadastro") {
      setShowFooter(true);
    }
  }, [location]);


  return (
    <footer id="footer" className={`footer ${showFooter ? 'show' : ''}`}>
      <div className="footer__content">
        
        {/* Botão de voltar ao topo */}
        <div className={`back-to-top ${isScrolling ? 'show' : 'hide'}`}>
          <a href="#top">
            <FontAwesomeIcon icon={faAnglesUp} />
          </a>
        </div>

        <p>Feito com por Soft Skill Hub</p>
        
        {/* Seção de ícones das redes sociais */}
        <div className="footer__social">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
