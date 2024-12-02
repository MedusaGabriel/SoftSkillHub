import { useState, useEffect } from 'react'; 
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import "../footer/Footer.css"; // Certifique-se de ter o estilo do Footer
import { faInstagram, faWhatsapp, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const [showFooter, setShowFooter] = useState(false); // Controla a animação do footer
  const location = useLocation();

  // Detecta se o usuário está perto do fim da página
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      // Verifica se o usuário está perto do fim da página
      setShowFooter(pageHeight > window.innerHeight && scrollPosition > pageHeight - 200); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Garante que o footer aparece na página de cadastro
  useEffect(() => {
    if (location.pathname === "/cadastro") {
      setShowFooter(true);
    }
  }, [location]);

  return (
    <footer id="footer" className={`footer ${showFooter ? 'show' : ''}`}>
      <div className="footer__content">
        <p>Desenvolvido por Soft Skill Hub ©</p>
      </div>
    </footer>
  );
}

export default Footer;
