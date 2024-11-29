import "../habilidades/Habilidades.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountain,
  faHeart,
  faComments,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { createServer } from "miragejs";

const Habilidades = () => {
  const [skills, setSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState(null); // Estado para controlar a habilidade no modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal

  // Mirage.js (API fake)
  useEffect(() => {
    createServer({
      routes() {
        this.namespace = "api";

        this.get("/skills", () => [
          {
            id: 1,
            nome: "Liderança",
            icon: faMountain,
            descricao:
              "Habilidade de liderar equipes e tomar decisões eficazes.",
          },
          {
            id: 2,
            nome: "Trabalho em Equipe",
            icon: faHeart,
            descricao: "Capacidade de colaborar e trabalhar bem em grupo.",
          },
          {
            id: 3,
            nome: "Pensamento Crítico",
            icon: faComments,
            descricao:
              "Habilidade de analisar e resolver problemas de forma lógica.",
          },
          {
            id: 4,
            nome: "Resiliência",
            icon: faMountain,
            descricao: "Capacidade de se adaptar e superar desafios.",
          },
          {
            id: 5,
            nome: "Empatia",
            icon: faHeart,
            descricao: "Compreender e compartilhar os sentimentos dos outros.",
          },
          {
            id: 6,
            nome: "Comunicação",
            icon: faComments,
            descricao:
              "Habilidade de transmitir informações de forma clara e eficaz.",
          },
        ]);
      },
    });

    fetch("/api/skills")
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
      alert(`Você adicionou a habilidade: ${selectedSkill.nome}!`);
      closeModal(); // Fecha o modal após adicionar
    }
  };

  return (
    <div>
      <div className="containerHs">
        <div className="container-titleH">
          <h1 id="TituloS">
            Central de Habilidades
          </h1>
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

          <h2 id="Secondaru">Skills Disponíveis em nosso Banco de Dados</h2>

          <div className="search-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
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
                onClick={() => openModal(skill)} // Abre o modal com a skill clicada
              >
                <div className="first-content">
                  <span>
                    <FontAwesomeIcon icon={skill.icon} size="3x" />
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

      {/* Modal */}
      {isModalOpen && selectedSkill && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{selectedSkill.nome}</h3>
            <p>{selectedSkill.descricao}</p>
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
