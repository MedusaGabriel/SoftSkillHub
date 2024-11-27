import "./Pratica.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandBackFist } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Pratica = () => {
  // Estado para controlar a visibilidade dos elementos
  const [showAula, setShowAula] = useState(false);
  const [showEpisodios, setShowEpisodios] = useState(false);
  const [showAtividade, setShowAtividade] = useState(false);

  // Estado para controlar o progresso da habilidade (de 0% a 100%)
  const [progresso, setProgresso] = useState(0);

  const [aulasConcluidas, setAulasConcluidas] = useState({
    aula1: 0, 
    episodio1: 0,
    episodio2: 0,
    episodio3: 0,
    atividade: 0,
  });

  // Função para atualizar o progresso da barra
  const atualizarProgresso = () => {
    const totalConcluido = Object.values(aulasConcluidas).filter((status) => status === 1).length;
    const novoProgresso = (totalConcluido / 5) * 100; // 5 porque são 5 etapas
    setProgresso(novoProgresso);
  };

  // Função para marcar uma aula ou episódio como concluído
  const marcarComoConcluido = (item) => {
    setAulasConcluidas((prev) => {
      const newAulas = { ...prev, [item]: 1 };
      atualizarProgresso(); // Atualiza o progresso
      return newAulas;
    });
  };

  // Funções para alternar entre as diferentes fases de aulas e atividades
  const handleAulaClick = () => {
    setShowAula(true);
    setShowEpisodios(false);
    setShowAtividade(false);
  };

  const handleEpisodioClick = () => {
    setShowEpisodios(true);
    setShowAtividade(false);
  };

  const handleAtividadeClick = () => {
    setShowAtividade(true);
  };

  const handleRetornoAula = () => {
    setShowAula(false);
    setShowEpisodios(false);
    setShowAtividade(false);
  };

  return (
    <div className="container-pratica">
      <div className="pratica">
        <div className="container-info-status">
          <div className="card-habilidade">
            <div className="first-content">
              <span>
                <FontAwesomeIcon icon={faHandBackFist} size="3x" />
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

          <div className="container-test">
            <h4 className="test-title">Testes</h4>
            <div className="test-info">
              <span className="test-progress">1/6</span>
            </div>
          </div>
        </div>

        <div className="container-info-status2">
          <div className="container-habilidade">
            <div className="descricao-habilidade">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                ipsa tempore, similique distinctio libero eum repudiandae labore
                veniam? Officia, ea qui! Quasi totam voluptatum, vero optio
                dolore consequuntur commodi eos?, Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Maxime ipsum sunt atque laudantium
                nobis cupiditate dolores, repellendus enim neque quibusdam
                magnam quas assumenda sapiente earum eos sed odio adipisci
                perspiciatis!
              </p>
            </div>
          </div>

          <div className="container-atividades">
            <h4 className="atividades-title">Aulas</h4>




            <div className="atividades-list">
              {!showAula && !showEpisodios && !showAtividade && (
                <button className="atividade-item" onClick={handleAulaClick}>
                  Aula 1 Materia X
                </button>
              )}

              {showAula && (
                <>
                  <button className="atividade-item" onClick={handleEpisodioClick}>
                    Materia X - Estudo 1
                  </button>
                  <button className="atividade-item" onClick={handleEpisodioClick}>
                    Materia X - Estudo 2
                  </button>
                  <button className="atividade-item" onClick={handleEpisodioClick}>
                    Materia X - Estudo 3
                  </button>
                  <button className="atividade-item" onClick={handleAtividadeClick}>
                    Materia X - Atividade
                  </button>
                  <button className="atividade-item" onClick={handleRetornoAula}>
                    Retornar 
                  </button>
                </>
              )}

              {showEpisodios && (
                <>
                  <button className="atividade-item" onClick={() => marcarComoConcluido("episodio1")}>
                    Marcar Episódio 1 como Concluído
                  </button>
                  <button className="atividade-item" onClick={() => marcarComoConcluido("episodio2")}>
                    Marcar Episódio 2 como Concluído
                  </button>
                  <button className="atividade-item" onClick={() => marcarComoConcluido("episodio3")}>
                    Marcar Episódio 3 como Concluído
                  </button>
                  <button className="atividade-item" onClick={handleAtividadeClick}>
                    Atividade
                  </button>
                  <button className="atividade-item" onClick={handleRetornoAula}>
                    Retornar para Seleção de Aula
                  </button>
                </>
              )}

              {showAtividade && (
                <>
                  <p>Atividade Selecionada!</p>
                  <button className="atividade-item" onClick={() => marcarComoConcluido("atividade")}>
                    Marcar Atividade como Concluída
                  </button>
                  <button className="atividade-item" onClick={handleRetornoAula}>
                    Retornar para Seleção de Aula
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pratica;
