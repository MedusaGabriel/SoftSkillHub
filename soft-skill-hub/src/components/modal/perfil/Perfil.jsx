import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Perfil.css';
import PropTypes from 'prop-types';
import user from '../../../assets/userfoto.png';

const Perfil = ({ isOpen, onClose }) => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate(); 
  const [skills, setSkills] = useState([]);
  const [showConfirmLogout, setShowConfirmLogout] = useState(false); 
  const [isEditing, setIsEditing] = useState(false); // Modo de edição
  const [showConfirmRemove, setShowConfirmRemove] = useState(false); // Confirmar remoção
  const [skillToRemove, setSkillToRemove] = useState(null); // Skill a ser removida

  const loadSkills = () => {
    const storedSkills = JSON.parse(localStorage.getItem("userSkills")) || [];
    setSkills(storedSkills);
  };

  useEffect(() => {
    if (isOpen) {
      const storedName = localStorage.getItem("userName");
      if (storedName) {
        setUserName(storedName);
      }
      loadSkills(); // Recarrega as habilidades toda vez que o modal é aberto
    } else {
      setIsEditing(false); // Sai do modo de edição quando o modal de perfil é fechado
    }
  }, [isOpen]);

  const handleLogout = () => {
    setShowConfirmLogout(true); 
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("userName");
    navigate("/home");
    setShowConfirmLogout(false); 
    onClose(); 
  };

  const handleCancelLogout = () => {
    setShowConfirmLogout(false); 
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Função para iniciar o processo de remoção
  const handleRemoveSkill = (skill) => {
    setSkillToRemove(skill);
    setShowConfirmRemove(true); // Exibe o pop-up de confirmação
  };

  // Função para confirmar remoção da skill
  const confirmRemoveSkill = () => {
    const updatedSkills = skills.filter((skill) => skill.id !== skillToRemove.id);
    setSkills(updatedSkills);
    localStorage.setItem("userSkills", JSON.stringify(updatedSkills)); // Atualiza o localStorage
    setShowConfirmRemove(false); // Fecha o pop-up
  };

  // Função para cancelar remoção
  const cancelRemoveSkill = () => {
    setShowConfirmRemove(false); // Fecha o pop-up
    setSkillToRemove(null); // Reseta a skill selecionada
  };

  // Função para fechar o modal de perfil ao clicar fora (mas não fecha os pop-ups de confirmação)
  const handleCloseModal = (e) => {
    if (
      e.target.classList.contains("modal-container") && // Clique fora do modal
      !showConfirmLogout && 
      !showConfirmRemove
    ) {
      onClose();
    }
  };

  if (!isOpen) return null; 

  return (
    <div className={`modal-container ${isOpen ? 'open' : ''}`} onClick={handleCloseModal}>
      <div className="container-perfil" onClick={(e) => e.stopPropagation()}>
        <div className="perfil-header">
          <img src={user} alt="user" className="Iconuser"/>
          <h1 className="perfil-nome">{userName || "Nome do Usuário"}</h1>
          <p className="perfil-subtitulo">Aprendendo soft skills como um mestre!</p>
        </div>
        <div className="perfil-progresso">
          <h2 className="perfil-secao-titulo">Progresso</h2>
          <div className="barra-progresso">
            <div className="barra-preenchida" style={{ width: "15%" }}></div>
          </div>
          <p className="perfil-progresso-texto">15% concluído</p>
        </div>

        <div className="perfil-habilidades">
          <h2 className="perfil-secao-titulo">Habilidades</h2>
          <ul className="perfil-lista-habilidades">
            {skills.length > 0 ? (
              skills.map((skill) => (
                <li className="perfil-habilidade" key={skill.id}>
                  {skill.nome}
                  {isEditing && (
                    <button
                      className="botao-remover-skill"
                      onClick={() => handleRemoveSkill(skill)}
                    >
                      Remover
                    </button>
                  )}
                </li>
              ))
            ) : (
              <p id="PP">Você ainda não adicionou nenhuma habilidade.</p>
            )}
          </ul>
        </div>

        <div className="perfil-acoes">
          <button className="perfil-botao" onClick={toggleEditMode}>
            {isEditing ? "Concluir Edição" : "Editar Perfil"}
          </button>
          <button className="perfil-botao">Skills Concluídas</button>
          <button className="perfil-botao" onClick={handleLogout}>Sair</button>
        </div>
      </div>

      {/* Pop-up de confirmação de logout */}
      {showConfirmLogout && (
        <div className="confirm-logout-overlay" onClick={(e) => e.stopPropagation()}>
          <div className="confirm-logout-container">
            <p>Você tem certeza que deseja sair?</p>
            <div className="confirm-logout-buttons">
              <button className="perfil-botao-sim" onClick={handleConfirmLogout}>Sim</button>
              <button className="perfil-botao-nao" onClick={handleCancelLogout}>Não</button>
            </div>
          </div>
        </div>
      )}

      {/* Pop-up de confirmação de remoção de skill */}
      {showConfirmRemove && (
        <div className="confirm-remove-overlay" onClick={(e) => e.stopPropagation()}>
          <div className="confirm-remove-container">
            <p>Tem certeza de que deseja remover esta habilidade? Isso fará com que seu progresso com a skill seja perdido!</p>
            <div className="confirm-remove-buttons">
              <button className="perfil-botao-sim" onClick={confirmRemoveSkill}>Sim</button>
              <button className="perfil-botao-nao" onClick={cancelRemoveSkill}>Não</button>
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
