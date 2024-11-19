import { useEffect } from 'react'; // Importando o useEffect
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUncharted, faInstagram, faWhatsapp, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import "../styles/Footer.css"; // Crie um arquivo separado para o Footer

function Footer() {
    useEffect(() => {
      const handleScroll = () => {
        let footer = document.querySelector('#footer');
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;
  
        // Verifica se o usuário está perto do fim da página
        footer.classList.toggle('show', scrollPosition > pageHeight - 200); // Aparece quando o usuário chega perto do final
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); 

    return (
<footer id="footer" className="footer">
  <div className="footer__content">
    
    <div className="back-to-top">
      <a href="/">
        <FontAwesomeIcon icon={faUncharted} />
      </a>
    </div>

    <p>Feito com </p> <FontAwesomeIcon icon={faUncharted} /> <p>por Soft Skill Hub</p>
    
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
