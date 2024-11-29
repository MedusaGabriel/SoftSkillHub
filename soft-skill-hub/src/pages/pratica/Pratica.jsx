import "./Pratica.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandBackFist } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const Pratica = () => {
  // Estado para controlar a visibilidade e progresso
  const [progresso, setProgresso] = useState(0);
  const [concluidos, setConcluidos] = useState({
    aula1: false, 
    episodio1: false,
    episodio2: false,
    episodio3: false,
    atividade: false,
  });
  const [telaAtual, setTelaAtual] = useState('aulas'); // controla qual tela está visível
  const [aulas, setAulas] = useState([]); // Estado para armazenar as aulas
  const [descricao, setDescricao] = useState(""); // Estado para armazenar a descrição da habilidade
  const [loading, setLoading] = useState(true); // Estado para controle de carregamento
  const [erro] = useState(null); // Estado para controlar erros

  useEffect(() => {
    // Simulação de dados recebidos da API
    setTimeout(() => {
      // Simulando dados de aulas
      const dadosSimulados = {
        aulas: [
          { nome: 'Aula 1: Introdução', episodios: ['Episódio 1', 'Episódio 2', 'Episódio 3'], atividade: 'Atividade 1' },
          { nome: 'Aula 2: Avançando', episodios: ['Episódio 1', 'Episódio 2', 'Episódio 3'], atividade: 'Atividade 2' }
        ],
        descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum."
      };

      setAulas(dadosSimulados.aulas); // Dados das aulas
      setDescricao(dadosSimulados.descricao); // Descrição simulada
      setLoading(false); // Fim do carregamento
    }, 1000); // Simulando um tempo de carregamento de 1 segundo
  }, []); // Esse efeito é executado apenas uma vez após o componente ser montado

  // Função para atualizar o progresso
  const atualizarProgresso = () => {
    // Calcular o total de conclusões considerando aulas e testes
    const totalAulas = aulas.length;
    const totalTestes = aulas.reduce((total, aula) => {
      return total + aula.episodios.length + (aula.atividade ? 1 : 0);
    }, 0);

    const totalConcluidos = Object.values(concluidos).filter(status => status).length;

    // O progresso agora depende tanto das aulas quanto dos testes
    const totalItens = totalAulas + totalTestes; // Total de aulas e testes
    setProgresso((totalConcluidos / totalItens) * 100); // Calcula a porcentagem de progresso
  };

  // Marcar como concluído e atualizar progresso
  const marcarComoConcluido = (item) => {
    setConcluidos(prev => {
      const novosConcluidos = { ...prev, [item]: true };
      atualizarProgresso();
      return novosConcluidos;
    });
  };

  // Navegar entre telas (aulas, episódios, atividades)
  const mudarTela = (tela) => setTelaAtual(tela);

  if (loading) {
    return <div>Carregando...</div>; // Exibe enquanto os dados estão sendo carregados
  }

  if (erro) {
    return <div>{erro}</div>; // Exibe erro se houver
  }

  // Calculando o total de testes baseado nas aulas
  const totalTestes = aulas.reduce((total, aula) => {
    return total + aula.episodios.length + (aula.atividade ? 1 : 0);
  }, 0);

  // Contabilizando os testes concluídos
  const testesConcluidos = Object.values(concluidos).filter(status => status).length;

  return (
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
              <p>{descricao}</p> {/* Exibe a descrição simulada */}
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
  );
};

export default Pratica;
