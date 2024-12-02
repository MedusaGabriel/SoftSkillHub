import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Perfil.css';
import PropTypes from 'prop-types';
import user from '../../../assets/userfoto.png';

const Perfil = ({ isOpen, onClose }) => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate(); 
  const [skills, setSkills] = useState([]);
  const [showConfirmLogout, setShowConfirmLogout] = useState(false); // Estado para controle do pop-up de confirmação

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
    const storedSkills = JSON.parse(localStorage.getItem("userSkills")) || [];
    setSkills(storedSkills);
  }, []);

  const handleLogout = () => {
    setShowConfirmLogout(true); // Mostrar o pop-up de confirmação
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("userName");
    navigate("/home");
    setShowConfirmLogout(false); // Fechar o pop-up e redirecionar
    onClose(); // Fechar o modal de perfil
  };

  const handleCancelLogout = () => {
    setShowConfirmLogout(false); // Fechar o pop-up e manter o perfil aberto
  };

  if (!isOpen) return null; 

  return (
    <div className={`modal-container ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="container-perfil" onClick={(e) => e.stopPropagation()}>
        <div className="perfil-header">
        <img src={user} alt="user" className="Iconuser"/>
          <h1 className="perfil-nome">{userName || "Nome do Usuário"}</h1>
          <p className="perfil-subtitulo">Aprendendo soft skills como um mestre!</p>
        </div>
        <div className="perfil-progresso">
          <h2 className="perfil-secao-titulo">Progresso</h2>
          <div className="barra-progresso">
            <div className="barra-preenchida" style={{ width: "0%" }}></div>
          </div>
          <p className="perfil-progresso-texto">0% concluído</p>
        </div>

        <div className="perfil-habilidades">
          <h2 className="perfil-secao-titulo">Habilidades</h2>
          <ul className="perfil-lista-habilidades">
            {skills.length > 0 ? (
              skills.map((skill) => (
                <li className="perfil-habilidade" key={skill.id}>
                  {skill.nome}
                </li>
              ))
            ) : (
              <p>Você ainda não adicionou nenhuma habilidade.</p>
            )}
          </ul>
        </div>

        <div className="perfil-acoes">
          <button className="perfil-botao">Editar Perfil</button>
          <button className="perfil-botao">Ver Certificados</button>
          <button className="perfil-botao" onClick={handleLogout}>Sair</button>
        </div>
      </div>

      {/* Pop-up de confirmação de logout */}
      {showConfirmLogout && (
        <div className="confirm-logout-overlay">
          <div className="confirm-logout-container">
            <p>Você tem certeza que deseja sair?</p>
            <div className="confirm-logout-buttons">
              <button className="perfil-botao" onClick={handleConfirmLogout}>Sim</button>
              <button className="perfil-botao" onClick={handleCancelLogout}>Não</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Perfil.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Perfil;
