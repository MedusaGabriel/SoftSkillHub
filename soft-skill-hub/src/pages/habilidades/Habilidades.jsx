import "../habilidades/Habilidades.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountain,
  faHeart,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Habilidades = () => {
  const [skills, setSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);

  const filteredSkills = skills.filter((skill) =>
    skill.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSkill(null);
    setIsModalOpen(false);
  };

  const handleAddSkill = () => {
    if (selectedSkill) {
      const userSkills = JSON.parse(localStorage.getItem("userSkills")) || [];

      if (!userSkills.some((skill) => skill.id === selectedSkill.id)) {
        userSkills.push(selectedSkill);
        localStorage.setItem("userSkills", JSON.stringify(userSkills));
      }

      alert(`Você adicionou a habilidade: ${selectedSkill.nome}!`);
      closeModal();
    }
  };

  return (
    <div>
      <div className="containerHs">
        <div className="container-titleH">
          <h1 id="TituloS">Central <span>Habilidades</span></h1>
        </div>
      </div>

      <main>
        <div className="skill-container">
          <h2 id="Primary">Principais características mais procuradas:</h2>
          <div className="container-cardsH">
            <div className="cardH">
              <div className="first-content">
                <span>
                  <FontAwesomeIcon icon={faMountain} size="3x" />
                </span>
              </div>
              <div className="second-content">
                <span>Resiliência</span>
              </div>
            </div>

            <div className="cardH">
              <div className="first-content">
                <span>
                  <FontAwesomeIcon icon={faHeart} size="3x" />
                </span>
              </div>
              <div className="second-content">
                <span>Empatia</span>
              </div>
            </div>

            <div className="cardH">
              <div className="first-content">
                <span>
                  <FontAwesomeIcon icon={faComments} size="3x" />
                </span>
              </div>
              <div className="second-content">
                <span>Comunicação</span>
              </div>
            </div>

            <div className="cardH">
              <div className="first-content">
                <span>
                  <FontAwesomeIcon icon={faHeart} size="3x" />
                </span>
              </div>
              <div className="second-content">
                <span>Empatia</span>
              </div>
            </div>

            <div className="cardH">
              <div className="first-content">
                <span>
                  <FontAwesomeIcon icon={faComments} size="3x" />
                </span>
              </div>
              <div className="second-content">
                <span>Comunicação</span>
              </div>
            </div>
          </div>

          <h2 id="Secondary">Skills Disponíveis em nosso Banco de Dados</h2>

          <div className="search-container">
            <input
              type="text"
              placeholder="Pesquise uma habilidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-bar"
            />
          </div>

          <div className="container-grid">
            {filteredSkills.map((skill) => (
              <div
                className="cardH"
                key={skill.id}
                onClick={() => openModal(skill)}
              >
                <div className="first-content">
                  <span>
                    <FontAwesomeIcon icon={faMountain} size="3x" />
                  </span>
                </div>
                <div className="second-content">
                  <span>{skill.nome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {isModalOpen && selectedSkill && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal-content">
            <h3>{selectedSkill.nome}</h3>
            <p>
              {selectedSkill.descricao
                ? selectedSkill.descricao
                : "Descrição não disponível"}
            </p>
            <div className="modal-buttons">
              <button onClick={handleAddSkill} className="add-skill-btn">
                Adicionar
              </button>
              <button onClick={closeModal} className="close-modal-btn">
                Voltar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Habilidades;