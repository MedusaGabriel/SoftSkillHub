import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faPeopleGroup, faHandBackFist, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import '../styles/Home.css';

function Home() {
  return (
    <>
      <div className="welcome">
        <h1>Bem-vindo ao <span id="soft-h1">Soft Skill Hub</span></h1>
        <p>Seu centro de desenvolvimento pessoal e profissional</p>
      </div>

      <div className="container">
        <main>
          <h2 className="destaques-titulo">Destaques</h2>
          <div className="cards flex">
            <div className="card">
              <FontAwesomeIcon icon={faDumbbell} size="3x" />
              <h3>Prática</h3>
              <p>Desafios que aprimoram suas habilidades de forma prática e divertida.</p>
            </div>
            <div className="card">
              <FontAwesomeIcon icon={faPeopleGroup} size="3x" />
              <h3>Trabalho de Equipe</h3>
              <p>Colabore e desenvolva suas habilidades de interação em grupo.</p>
            </div>
            <div className="card">
              <FontAwesomeIcon icon={faHandBackFist} size="3x" />
              <h3>Resiliência</h3>
              <p>Enfrente desafios que ajudam você a se tornar mais resiliente.</p>
            </div>
            <div className="card">
              <FontAwesomeIcon icon={faCalendarCheck} size="3x" />
              <h3>CheckList</h3>
              <p>Organize suas metas e monitorize seu progresso com facilidade.</p>
            </div>
          </div>

          <section className="intro">
            <h2>Como Funciona</h2>
            <p>
              Bem-vindo ao nosso portal de prática de soft skills! Aqui, você encontrará desafios e tarefas organizados para
              desenvolver habilidades essenciais, como comunicação, resiliência, colaboração, liderança e muito mais. Cada atividade foi
              desenhada para ajudá-lo a evoluir nas competências que o mercado de trabalho exige. Você pode praticar em qualquer lugar,
              a qualquer momento, e acompanhar seu progresso em tempo real.
            </p>
            <p>
              Conecte-se com outros membros da comunidade, compartilhe experiências e conquiste seus objetivos de desenvolvimento pessoal.
            </p>
          </section>

          <section className="image-card-section flex">
            <img src="./src/assets/imgs/homepeople.png" alt="Imagem de Soft Skills" className="intro-image" />
            <div className="card-text">
              <p>
                Nosso objetivo é fornecer uma plataforma intuitiva para que você possa melhorar suas habilidades interpessoais de forma prática e contínua.
                Ao se inscrever, você terá acesso a uma variedade de exercícios e conteúdos que irão transformar a maneira como você se
                relaciona no ambiente profissional e pessoal. Seja a mudança que você deseja ver em sua carreira.
              </p>
            </div>
          </section>

          {/* Seção de Chamado à Ação */}
          <section className="cta">
            <h2>Pronto para começar?</h2>
            <p>
              Agora que você conhece um pouco mais sobre o Soft Skill Hub, que tal iniciar sua jornada de desenvolvimento?
              Crie seu perfil e comece a praticar agora mesmo! Não perca tempo, o mercado está sempre em busca de profissionais mais capacitados e preparados!
            </p>


          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
