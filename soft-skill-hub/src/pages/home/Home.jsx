import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import {
  faDumbbell,
  faPeopleGroup,
  faHandBackFist,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../home/Home.css";

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const containerHome = document.querySelector(".container-Home");
      const contentDivs = containerHome.querySelectorAll(".content");

      contentDivs.forEach((div) => {
        const divPosition = div.getBoundingClientRect().top; // Posição da div em relação à janela
        const windowHeight = window.innerHeight;

        // Verifica se a div está visível na tela (quando ela alcança 75% da altura da janela)
        if (divPosition <= windowHeight * 0.75) {
          div.classList.add("fadeInRight"); // Aplica apenas a animação fadeInRight
        }
      });
    };

    // Adiciona o evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Executa a função no carregamento inicial para aplicar animação nas divs visíveis
    handleScroll();

    // Limpa o evento quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
            <p>
              Bem-vindo ao nosso portal de prática de soft skills! Aqui você
              encontra a Central de Habilidades, nosso banco exclusivo com
              tutoriais, materiais de estudo e desafios para melhorar a soft
              skill que você escolher desenvolver.
            </p>
            <p>
              Nossa plataforma é focada exclusivamente em soft skills, mas de
              vez em quando podemos explorar outras áreas como hard skills,
              software, hardware e até algumas curiosidades do mercado de
              trabalho. Tudo isso para proporcionar uma experiência completa e
              enriquecedora para o seu desenvolvimento.
            </p>
          </section>

          <section className="practice-section">
            <h3>Página de Práticas</h3>
            <p>
              Em nossa página de práticas, você encontrará mini questionários
              rápidos, que duram em torno de 3 minutos, com perguntas
              relacionadas à soft skill escolhida. Esses exercícios são
              projetados para avaliar e reforçar o que você aprendeu durante os
              estudos.
            </p>
            <p>
              Cada soft skill possui três estágios padrão, e cada estágio inclui
              um questionário com 5 perguntas. Após completar os três estágios,
              você ficará livre para explorar outros níveis ou áreas. Porém,
              para concluir o checklist dessa soft skill, é necessário completar
              todos os questionários com sucesso.
            </p>
            <p>
              Essa abordagem ajuda você a construir conhecimento sólido e
              avançar no seu aprendizado de maneira estruturada. Além disso,
              você poderá visualizar seu progresso e compartilhar conquistas com
              outros usuários da plataforma.
            </p>
          </section>

          <section className="benefits-section flex">
            <img
              src="./src/assets/imgs/homepeople.png"
              alt="Imagem de Soft Skills"
              className="intro-image"
            />
            <div className="card-text">
              <p>
                Nosso objetivo é criar um ambiente onde você possa desenvolver
                suas habilidades interpessoais de forma prática, divertida e
                contínua. Ao se inscrever, você terá acesso a uma gama de
                ferramentas e exercícios para transformar sua carreira e seu
                crescimento pessoal.
              </p>
              <p>
                Comece sua jornada hoje mesmo e descubra como as soft skills
                podem abrir novas portas e oportunidades para você. Transforme
                sua forma de aprender e se desenvolver!
              </p>
            </div>
          </section>



     
          <h2 className="destaques-titulo">Destaques</h2>
          <div className="cards flex">
            <div className="cardHome">
              <div className="cardHome2">
                <FontAwesomeIcon icon={faDumbbell} size="3x" />
                <h3>Prática</h3>
                <p>
                  Desafios que aprimoram suas habilidades de forma prática e
                  divertida.
                </p>
              </div>
            </div>

            <div className="cardHome">
              <div className="cardHome2">
                <FontAwesomeIcon icon={faPeopleGroup} size="3x" />
                <h3>Trabalho de Equipe</h3>
                <p>
                  Colabore e desenvolva suas habilidades de interação em grupo.
                </p>
              </div>
            </div>

            <div className="cardHome">
              <div className="cardHome2">
                <FontAwesomeIcon icon={faHandBackFist} size="3x" />
                <h3>Resiliência</h3>
                <p>
                  Enfrente desafios que ajudam você a se tornar mais resiliente.
                </p>
              </div>
            </div>

            <div className="cardHome">
              <div className="cardHome2">
                <FontAwesomeIcon icon={faCalendarCheck} size="3x" />
                <h3>CheckList</h3>
                <p>
                  Organize suas metas e monitorize seu progresso com facilidade.
                </p>
              </div>
            </div>

          </div>


        </main>
      </div>
    </>
  );
}

export default Home;
