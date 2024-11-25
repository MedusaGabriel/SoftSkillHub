import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import {
  faDumbbell,
  faPeopleGroup,
  faHandBackFist,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../home/Home.css";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    // Função para adicionar a animação quando os elementos entram na tela
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Verifica se o elemento tem a classe .content ou .content2
            if (entry.target.classList.contains("content")) {
              entry.target.classList.add("fadeInLeft"); // Adiciona fadeInLeft para .content
            } else if (entry.target.classList.contains("content2")) {
              entry.target.classList.add("fadeInRight"); // Adiciona fadeInRight para .content2
            }
            observer.unobserve(entry.target); // Para de observar o elemento após a animação
          }
        });
      },
      { threshold: 0.2 }
    );

    const contentDivs = document.querySelectorAll(".content, .content2");

    contentDivs.forEach((div) => {
      observer.observe(div);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="welcome">
        <h1>
          Bem-vindo ao <span id="soft-h1">Soft Skill Hub</span>
        </h1>
        <p>Seu centro de desenvolvimento pessoal e profissional</p>
      </div>

      <div className="container-Home">
        <main>
          <section className="intro">
            <h2>Como Funciona?</h2>
          </section>

          <div className="timeline">
            <div className="timeline-line"></div>

            <div className="timeline-item content">
              <div className="timeline-circle">1</div>
              <div className="timeline-content">
                <div className="timeline-text">
                  <h3>Cadastro</h3>
                  <p>
                    Antes de tudo, para acessar nosso conteúdo exclusivo e
                    materiais de estudo, você precisa se cadastrar! É fácil:
                    clique no ícone de usuário ou no botão no final desta página
                    e comece agora mesmo.
                  </p>
                </div>
                <div className="timeline-image">
                  <img src="../src/assets/imgs/cadastro.png" alt="Imagem 1" />
                </div>
              </div>
            </div>

            <div className="timeline-item content2">
              <div className="timeline-circle">2</div>
              <div className="timeline-content">
                <div className="timeline-image">
                  <img src="../src/assets/imgs/conteudo.png" alt="Imagem 2" />
                </div>
                <div className="timeline-text2">
                  <h3>Apresentação ao Conteúdo</h3>
                  <p>
                    Conta criada com sucesso? Agora é hora de escolher pelo
                    menos 3 soft skills que você quer aprender. Assim que fizer
                    sua seleção, você terá acesso à nossa incrível Central de
                    Habilidades.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item content">
              <div className="timeline-circle">3</div>
              <div className="timeline-content">
                <div className="timeline-text">
                  <h3>Central de Habilidades</h3>
                  <p>
                    Na Central de Habilidades, você encontrará todo o nosso
                    conteúdo educativo, organizado e personalizado de acordo com
                    as suas necessidades e objetivos.
                  </p>
                </div>
                <div className="timeline-image">
                  <img src="../src/assets/imgs/skills.png" alt="Imagem 3" />
                </div>
              </div>
            </div>

            <div className="timeline-item content2">
              <div className="timeline-circle">4</div>
              <div className="timeline-content">
                <div className="timeline-image">
                  <img src="../src/assets/imgs/pratica.png" alt="Imagem 4" />
                </div>
                <div className="timeline-text2">
                  <h3>Central de Práticas</h3>
                  <p>
                    Aqui você pode acompanhar de perto seu progresso! Visualize
                    as soft skills escolhidas para aprender e monitore o quanto
                    já avançou em cada uma delas.
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-item content">
              <div className="timeline-circle">5</div>
              <div className="timeline-content">
                <div className="timeline-text">
                  <h3>Perfil</h3>
                  <p>
                    Essa é a sua área pessoal! Veja suas conquistas, confira
                    quantas habilidades já dominou e celebre o seu progresso.
                  </p>
                </div>
                <div className="timeline-image">
                  <img src="https://via.placeholder.com/150" alt="Imagem 5" />
                </div>
              </div>
            </div>
          </div>

          <section className="cards-intro">
            <h2>Por que escolhe nosso site? </h2>
          </section>

          <div className="home-cards">
            <div className="home-card">
              <div className="home-card-content">
                <FontAwesomeIcon icon={faDumbbell} size="3x" />
                <h3>Prática</h3>
                <p>
                  Desafios que aprimoram suas habilidades de forma prática e
                  divertida.
                </p>
              </div>
            </div>

            <div className="home-card">
              <div className="home-card-content">
                <FontAwesomeIcon icon={faPeopleGroup} size="3x" />
                <h3>Trabalho de Equipe</h3>
                <p>
                  Colabore e desenvolva suas habilidades de interação em grupo.
                </p>
              </div>
            </div>

            <div className="home-card">
              <div className="home-card-content">
                <FontAwesomeIcon icon={faHandBackFist} size="3x" />
                <h3>Resiliência</h3>
                <p>
                  Enfrente desafios que ajudam você a se tornar mais resiliente.
                </p>
              </div>
            </div>

            <div className="home-card">
              <div className="home-card-content">
                <FontAwesomeIcon icon={faCalendarCheck} size="3x" />
                <h3>CheckList</h3>
                <p>
                  Organize suas metas e monitorize seu progresso com facilidade.
                </p>
              </div>
            </div>
          </div>

          <section className="home-feedback">
            <h2>Comentários de nossos usuários</h2>
            <div className="home-comments">
              {/* Exemplo de comentário */}
              <div className="home-comment">
                <p>
                  Esse site mudou completamente como eu encaro trabalho em
                  equipe. Recomendo demais!
                  <strong> - João S.</strong>
                </p>
              </div>

              <div className="home-comment">
                <p>
                  Adorei a forma prática de desenvolver minhas soft skills.
                  Muito intuitivo!
                  <strong> - Ana M.</strong>
                </p>
              </div>

              <div className="home-comment">
                <p>
                  Adorei a forma prática de desenvolver minhas soft skills.
                  Muito intuitivo!
                  <strong> - Ana M.</strong>
                </p>
              </div>

              <div className="home-comment">
                <p>
                  Adorei a forma prática de desenvolver minhas soft skills.
                  Muito intuitivo!
                  <strong> - Ana M.</strong>
                </p>
              </div>

              <div className="home-comment">
                <p>
                  Adorei a forma prática de desenvolver minhas soft skills.
                  Muito intuitivo!
                  <strong> - Ana M.</strong>
                </p>
              </div>
            </div>
          </section>

          <section className="home-cta">
            <h2>Pronto para começar?</h2>
            <Link to="/cadastro" className="btn-cta">
              Cadastre-se
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;