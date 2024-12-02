import { useEffect } from "react";
import "../sobre/Sobre.css";

function Sobre() {
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

  const handleClick = () => {
    // Lógica para o clique
  };

  return (
    <>
      <div className="welcome">
        <h1>SOBRE <span>NÓS</span> </h1>
        <p id="sobreP">
          O Soft Skills Hub é uma plataforma dedicada ao desenvolvimento de
          habilidades interpessoais. Nosso objetivo é ajudar você a aprimorar
          suas competências por meio de desafios práticos, reflexão e
          aprendizado contínuo.
        </p>
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
              <button className="timeline-content" onClick={handleClick}>
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
              </button>
            </div>

            <div className="timeline-item content2">
              <div className="timeline-circle">2</div>
              <button className="timeline-content" onClick={handleClick}>
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
              </button>
            </div>

            <div className="timeline-item content">
              <div className="timeline-circle">3</div>
              <button className="timeline-content" onClick={handleClick}>
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
              </button>
            </div>

            <div className="timeline-item content2">
              <div className="timeline-circle">4</div>
              <button className="timeline-content" onClick={handleClick}>
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
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Sobre;
