import "./Pratica.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faHeart, faComments } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Pratica = () => {
  const [skills, setSkills] = useState([]);
  const [skillSelecionada, setSkillSelecionada] = useState(null);
  const [progresso, setProgresso] = useState(0);

  useEffect(() => {
    // Buscar dados do db.json
    fetch("http://localhost:5000/skills") // Ajuste para a URL correta do seu JSON Server
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Erro ao carregar skills:", error));
  }, []);

  const handleSelecionarSkill = (id) => {
    const skill = skills.find((s) => s.id === id);
    setSkillSelecionada(skill);
    setProgresso(0); // Resetar progresso ao mudar de skill
  };

  const handleResetarSkill = () => {
    setSkillSelecionada(null);
    setProgresso(0); // Resetar progresso ao resetar a skill
  };

  return (
    <div className="container-pratica">
      <div className="pratica">

        {/* Seletor de Skill */}
        {!skillSelecionada && (
          <div className="seletor-skill">
            <h4>Selecione uma Skill:</h4>
            <select
              value={skillSelecionada?.id || ""}
              onChange={(e) => handleSelecionarSkill(Number(e.target.value))}
            >
              <option value="">-- Escolha uma Skill --</option>
              {skills.map((skill) => (
                <option key={skill.id} value={skill.id}>
                  {skill.nome}
                </option>
              ))}
            </select>
          </div>
        )}


        {/* Informações da Skill Selecionada */}
        {skillSelecionada && (
          <>
            <div className="container-info-status">
              <div className="skill-selecionada">
                <h1 className="skill-title">{skillSelecionada.nome}</h1>
              </div>

              <div className="card-habilidade">
                <div className="first-content">
                  <span>
                    <FontAwesomeIcon
                      icon={
                        skillSelecionada.icon === "faMountain"
                          ? faMountain
                          : skillSelecionada.icon === "faHeart"
                          ? faHeart
                          : faComments
                      }
                      size="3x"
                    />
                  </span>
                </div>
              </div>

              <div className="container-progress">
                <h1 className="progress-title">Seu Progresso na Skill</h1>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${progresso}%` }}></div>
                </div>
                <span className="progress-percentage">{progresso}%</span>
              </div>

            {/* Botão para resetar a seleção */}
            <button className="reset-skill" onClick={handleResetarSkill}>
              Selecionar outra Skill
            </button>

            </div>

            <div className="container-info-status2">

              <div className="descricao-habilidade">
                <p>{skillSelecionada.descricao}</p>
              </div>

              <div className="container-atividades">
                <h4 className="atividades-title">Aulas</h4>
                <div className="atividades-list">
                  <button
                    className="atividade-item"
                    onClick={() => setProgresso((prev) => Math.min(prev + 50, 100))}
                  >
                    {skillSelecionada.aula} - Marcar como Concluída
                  </button>
                </div>
              </div>
            </div>

          </>
        )}
      </div>
    </div>
  );
};

export default Pratica;
