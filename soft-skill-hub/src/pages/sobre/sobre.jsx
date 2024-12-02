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
                  <h3>Cadastro</h3>
                  <p>
                    Antes de tudo, para acessar nosso conteúdo exclusivo e
                    materiais de estudo, você precisa se cadastrar! É fácil:
                    clique no ícone de usuário ou no botão no final desta página
                    e comece agora mesmo.
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
                  <h3>Apresentação ao Conteúdo</h3>
                  <p>
                    Conta criada com sucesso? Agora é hora de escolher pelo
                    menos 3 soft skills que você quer aprender. Assim que fizer
                    sua seleção, você terá acesso à nossa incrível Central de
                    Habilidades.
                  </p>
                </div>
              </button>
            </div>

            <div className="sobre-timeline-item sobre-content">
              <div className="sobre-timeline-circle">3</div>
              <button className="sobre-timeline-content" onClick={handleClick}>
                <div className="sobre-timeline-text">
                  <h3>Central de Habilidades</h3>
                  <p>
                    Na Central de Habilidades, você encontrará todo o nosso
                    conteúdo educativo, organizado e personalizado de acordo com
                    as suas necessidades e objetivos.
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
                  <h3>Central de Práticas</h3>
                  <p>
                    Aqui você pode acompanhar de perto seu progresso! Visualize
                    as soft skills escolhidas para aprender e monitore o quanto
                    já avançou em cada uma delas.
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