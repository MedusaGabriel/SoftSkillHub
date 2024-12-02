import "./Pratica.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandBackFist } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Pratica = () => {
  const [progresso, setProgresso] = useState(0);
  const [concluidos, setConcluidos] = useState({
    aula1: false, 
    episodio1: false,
    episodio2: false,
    episodio3: false,
    atividade: false,
  });
  const [telaAtual, setTelaAtual] = useState('aulas');
  const [aulas, setAulas] = useState([]);
  const [descricao, setDescricao] = useState("");
  const [loading, setLoading] = useState(true);
  const [erro] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const dadosSimulados = {
        aulas: [
          { nome: 'Aula 1: Introdução', episodios: ['Episódio 1', 'Episódio 2', 'Episódio 3'], atividade: 'Atividade 1' },
          { nome: 'Aula 2: Avançando', episodios: ['Episódio 1', 'Episódio 2', 'Episódio 3'], atividade: 'Atividade 2' }
        ],
        descricao: "A empatia é a capacidade de compreender e compartilhar os sentimentos de outra pessoa. Essa habilidade envolve ouvir ativamente, se colocar no lugar do outro e responder de forma compassiva e respeitosa. A empatia é essencial para criar conexões humanas genuínas, resolver conflitos e trabalhar de forma eficaz em equipe. No ambiente profissional, a empatia ajuda a construir relacionamentos sólidos, melhorar a comunicação e promover um ambiente de trabalho mais inclusivo e colaborativo. É uma habilidade chave para líderes, pois permite entender as necessidades e motivações dos membros da equipe, proporcionando apoio e orientação adequados."
      };

      setAulas(dadosSimulados.aulas);
      setDescricao(dadosSimulados.descricao);
      setLoading(false);
    }, 1000);
  }, []);

  const atualizarProgresso = () => {
    const totalAulas = aulas.length;
    const totalTestes = aulas.reduce((total, aula) => {
      return total + aula.episodios.length + (aula.atividade ? 1 : 0);
    }, 0);

    const totalConcluidos = Object.values(concluidos).filter(status => status).length;
    const totalItens = totalAulas + totalTestes;
    setProgresso((totalConcluidos / totalItens) * 100);
  };

  const marcarComoConcluido = (item) => {
    setConcluidos(prev => {
      const novosConcluidos = { ...prev, [item]: true };
      atualizarProgresso();
      return novosConcluidos;
    });
  };

  const mudarTela = (tela) => setTelaAtual(tela);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (erro) {
    return <div>{erro}</div>;
  }

  const totalTestes = aulas.reduce((total, aula) => {
    return total + aula.episodios.length + (aula.atividade ? 1 : 0);
  }, 0);

  const testesConcluidos = Object.values(concluidos).filter(status => status).length;

  return (
    <>
      <div className="container-titleP">
        <h1 id="TituloP">Central de <span>Prática</span></h1>
      </div>
      <div className="container-pratica">
        <div className="pratica">
          <div className="container-info-status">
            <div className="card-habilidade">
              <div className="first-content">
                <span><FontAwesomeIcon icon={faHandBackFist} size="3x" /></span>
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
                <span className="test-progress">{testesConcluidos}/{totalTestes}</span>
              </div>
            </div>
          </div>

          <div className="container-info-status2">
            <div className="container-habilidade">
              <div className="descricao-habilidade">
                <p>{descricao}</p>
              </div>
            </div>

            <div className="container-atividades">
              <h4 className="atividades-title">Aulas</h4>

              <div className="atividades-list">
                {telaAtual === 'aulas' && aulas.map((aula, index) => (
                  <button
                    key={index}
                    className="atividade-item"
                    onClick={() => mudarTela('episodios')}
                  >
                    {aula.nome}
                  </button>
                ))}

                {telaAtual === 'episodios' && aulas[0].episodios.map((episodio, index) => (
                  <button 
                    key={index} 
                    className="atividade-item" 
                    onClick={() => marcarComoConcluido(`episodio${index + 1}`)}
                  >
                    {`Marcar ${episodio} como Concluído`}
                  </button>
                ))}

                {telaAtual === 'episodios' && (
                  <button className="atividade-item" onClick={() => mudarTela('atividade')}>
                    {aulas[0].atividade}
                  </button>
                )}

                {telaAtual === 'atividade' && (
                  <>
                    <p>Atividade Selecionada!</p>
                    <button className="atividade-item" onClick={() => marcarComoConcluido('atividade')}>
                      Marcar Atividade como Concluída
                    </button>
                  </>
                )}

                {(telaAtual === 'episodios' || telaAtual === 'atividade') && (
                  <button className="atividade-item" onClick={() => mudarTela('aulas')}>
                    Retornar para Seleção de Aula
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pratica;