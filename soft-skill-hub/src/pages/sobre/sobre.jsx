import { useEffect } from "react";
import "./sobre.css"; // Update this path based on the actual location of the CSS file

function Sobre() {
  useEffect(() => {
    // Função para adicionar a animação quando os elementos entram na tela
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Verifica se o elemento tem a classe .sobre-content ou .sobre-content2
            if (entry.target.classList.contains("sobre-content")) {
              entry.target.classList.add("fadeInLeft"); // Adiciona fadeInLeft para .sobre-content
            } else if (entry.target.classList.contains("sobre-content2")) {
              entry.target.classList.add("fadeInRight"); // Adiciona fadeInRight para .sobre-content2
            }
            observer.unobserve(entry.target); // Para de observar o elemento após a animação
          }
        });
      },
      { threshold: 0.2 }
    );

    const contentDivs = document.querySelectorAll(".sobre-content, .sobre-content2");

    contentDivs.forEach((div) => {
      observer.observe(div);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    // Lógica para o clique
  };

  return (
    <>
      <div className="sobre-welcome">
        <h1>SOBRE <span>NÓS</span> </h1>
        <p id="sobreP">
          O Soft Skills Hub é uma plataforma dedicada ao desenvolvimento de
          habilidades interpessoais. Nosso objetivo é ajudar você a aprimorar
          suas competências por meio de desafios práticos, reflexão e
          aprendizado contínuo.
        </p>
      </div>

      <div className="sobre-container">
        <main>
          <section className="sobre-intro">
            <h2>Quem somos nós</h2>
          </section>

          <div className="sobre-timeline">
            <div className="sobre-timeline-line"></div>

            <div className="sobre-timeline-item sobre-content">
              <div className="sobre-timeline-circle">1</div>
              <button className="sobre-timeline-content" onClick={handleClick}>
                <div className="sobre-timeline-text">
                  <h3>Gabriel The Great Wizard Cat Fat</h3>
                  <p>
                  Gabriel, o Grande Mago Gato Gorducho, é o verdadeiro mestre por trás da estrutura e organização desta página. Com suas habilidades mágicas de felino, 
                  ele garante que cada elemento esteja no lugar certo, funcionando de maneira impecável. 
                  Nada escapa ao olhar atento deste mago gordinho, que é a verdadeira alma da página.
                  </p>
                </div>
                <div className="sobre-timeline-image">
                  <img src="../src/assets/gabriel.png" alt="Imagem 1" />
                </div>
              </button>
            </div>

            <div className="sobre-timeline-item sobre-content2">
              <div className="sobre-timeline-circle">2</div>
              <button className="sobre-timeline-content" onClick={handleClick}>
                <div className="sobre-timeline-image">
                  <img src="../src/assets/anderson.png" alt="Imagem 2" />
                </div>
                <div className="sobre-timeline-text2">
                  <h3>Anderson Djalma</h3>
                  <p>
                  Anderson Djalma é o responsável pelo design das páginas e pelo desenvolvimento da paleta de cores utilizada.
                  Sua habilidade em escolher e combinar cores de maneira estratégica assegura uma identidade visual consistente e 
                  alinhada aos objetivos do projeto, refletindo de forma clara a proposta do conteúdo e facilitando a navegação.
                  Nas noites mais densas e escuras ele é chamado de gostozinho.
                  </p>
                </div>
              </button>
            </div>

            <div className="sobre-timeline-item sobre-content">
              <div className="sobre-timeline-circle">3</div>
              <button className="sobre-timeline-content" onClick={handleClick}>
                <div className="sobre-timeline-text">
                  <h3>Ryan Nunes </h3>
                  <p>
                  Ryan Nunes auxilia no desenvolvimento das páginas, com foco no conteúdo sobre a equipe, práticas e nos elementos criados por Anderson Djalma.
                   Seu trabalho complementa o design e a estrutura, garantindo que as informações sejam apresentadas de maneira organizada e eficiente.
                   Co-criador do termo do Não-Binario
                  </p>
                </div>
                <div className="sobre-timeline-image">
                  <img src="../src/assets/ryan.png" alt="Imagem 3" />
                </div>
              </button>
            </div>

            <div className="sobre-timeline-item sobre-content2">
              <div className="sobre-timeline-circle">4</div>
              <button className="sobre-timeline-content" onClick={handleClick}>
                <div className="sobre-timeline-image">
                  <img src="../src/assets/brian.png" alt="Imagem 4" />
                </div>
                <div className="sobre-timeline-text2">
                  <h3>Samuel Brian </h3>
                  <p>
                  Sammuel Brian é responsável por organizar o conteúdo da página e garantir uma comunicação clara. 
                  Ele contribui para melhorar a experiência do usuário, focando na disposição das informações e na interação com o público.
                  Ele gosta de Lasanha de frango com charque.
                  </p>
                </div>
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Sobre;