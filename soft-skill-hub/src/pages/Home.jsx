import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faPeopleGroup, faHandBackFist, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import '../styles/Home.css';

function Home() {
  return (
    <><div className="welcome">
      <h1>Bem-vindo ao
        <h1 id="soft-h1"> Soft Skill Hub</h1></h1>
    </div>
    <div className="container">
    <main>
        <h2 className="destaques-titulo">Destaques</h2>
        <div className="cards flex">
          <div className="card">
            <FontAwesomeIcon icon={faDumbbell} size="3x" />
            <h3>Prática</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faPeopleGroup} size="3x" />
            <h3>Trabalho de Equipe</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faHandBackFist} size="3x" />
            <h3>Resiliência</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faCalendarCheck} size="3x" />
            <h3>CheckList</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
          <section className="intro">
            <h2>Como Funciona</h2>
            <p>
              Bem-vindo ao nosso portal de prática de soft skills! Aqui, você encontrará desafios e tarefas organizados para
              desenvolver habilidades como comunicação, resiliência, colaboração, e muito mais. Cada atividade é desenhada para
              ajudá-lo a evoluir nas competências essenciais para o mercado de trabalho. Desafie-se e acompanhe seu progresso em cada jornada!
            </p>
          </section>
          <section className="image-card-section flex">
            <img src="./src/assets/imgs/homepeople.png" alt="Imagem de Soft Skills" className="intro-image" />
            <div className="card-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, est at aliquet ultrices, odio ex pharetra massa,
                ut egestas nisl ex at velit. Nulla facilisi. Suspendisse ac vehicula eros, a egestas lorem.
              </p>
            </div>
          </section>
        </main>
      </div></>

  );
}
export default Home;
