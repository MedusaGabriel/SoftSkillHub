import "../habilidades/Habilidades.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountain,
  faHeart,
  faComments,
  faCrown,
  faRocket,
  faHandshake,
  faBrain,
  faLightbulb,
  faCloud,
  faDatabase,
  faNetworkWired,
  faCode,
  faPen,
  faBook,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";

const Habilidades = () => {
  return (
    <div>
      <div className="containerHs">
        <div className="container-titleH">
          <h1 id="TituloS">
            {" "}
            Bem-vindo a Central de Habilidades da Soft Skills
          </h1>
        </div>
      </div>

      <main>
        <div className="skill-container">
          <h2 id="Primary">Principais características mais procuradas:</h2>
          <div className="container-cardsH">
            <div className="cardH">
              <div className="first-content">
                <span>
                  <FontAwesomeIcon icon={faMountain} size="3x" />
                </span>
              </div>
              <div className="second-content">
                <span>Resiliência</span>
              </div>
            </div>

            <div className="cardH">
              <div className="first-content">
                <span>
                  <FontAwesomeIcon icon={faHeart} size="3x" />
                </span>
              </div>
              <div className="second-content">
                <span>Empatia</span>
              </div>
            </div>

            <div className="cardH">
              <div className="first-content">
                <span>
                  <FontAwesomeIcon icon={faComments} size="3x" />
                </span>
              </div>
              <div className="second-content">
                <span>Comunicação</span>
              </div>
            </div>

            <div className="cardH">
              <div className="first-content">
                <span>
                  <FontAwesomeIcon icon={faHeart} size="3x" />
                </span>
              </div>
              <div className="second-content">
                <span>Empatia</span>
              </div>
            </div>

            <div className="cardH">
              <div className="first-content">
                <span>
                  <FontAwesomeIcon icon={faComments} size="3x" />
                </span>
              </div>
              <div className="second-content">
                <span>Comunicação</span>
              </div>
            </div>
          </div>

          <div className="container-grid">
            <div id="Secondary">
              <h2>Habilidades X</h2>
              <div className="container-cardsM">
                <div className="cardH">
                  <div className="first-content">
                    <span>
                      <FontAwesomeIcon icon={faChalkboardTeacher} size="3x" />{" "}
                      {/* Ensino */}
                    </span>
                  </div>
                  <div className="second-content">
                    <span>Ensino</span>
                  </div>
                </div>

                <div className="cardH">
                  <div className="first-content">
                    <span>
                      <FontAwesomeIcon icon={faBook} size="3x" />{" "}
                      {/* Conhecimento */}
                    </span>
                  </div>
                  <div className="second-content">
                    <span>Conhecimento</span>
                  </div>
                </div>

                <div className="cardH">
                  <div className="first-content">
                    <span>
                      <FontAwesomeIcon icon={faPen} size="3x" /> {/* Escrita */}
                    </span>
                  </div>
                  <div className="second-content">
                    <span>Escrita</span>
                  </div>
                </div>

                <div className="cardH">
                  <div className="first-content">
                    <span>
                      <FontAwesomeIcon icon={faLightbulb} size="3x" />{" "}
                      {/* Criatividade */}
                    </span>
                  </div>
                  <div className="second-content">
                    <span>Criatividade</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="Secondary">
              <h2>Habilidades Z</h2>

              <div className="container-cardsM">
                <div className="cardH">
                  <div className="first-content">
                    <span>
                      <FontAwesomeIcon icon={faComments} size="3x" />{" "}
                      {/* Comunicação */}
                    </span>
                  </div>
                  <div className="second-content">
                    <span>Comunicação</span>
                  </div>
                </div>

                <div className="cardH">
                  <div className="first-content">
                    <span>
                      <FontAwesomeIcon icon={faMountain} size="3x" />{" "}
                      {/* Resiliência */}
                    </span>
                  </div>
                  <div className="second-content">
                    <span>Resiliência</span>
                  </div>
                </div>

                <div className="cardH">
                  <div className="first-content">
                    <span>
                      <FontAwesomeIcon icon={faCrown} size="3x" />{" "}
                      {/* Liderança */}
                    </span>
                  </div>
                  <div className="second-content">
                    <span>Liderança</span>
                  </div>
                </div>

                <div className="cardH">
                  <div className="first-content">
                    <span>
                      <FontAwesomeIcon icon={faHeart} size="3x" />{" "}
                      {/* Empatia */}
                    </span>
                  </div>
                  <div className="second-content">
                    <span>Empatia</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="Secondary">
              <h2>Habilidades Y</h2>
              <div className="container-cardsM">
                <div className="cardH">
                  <div className="first-content">
                    <span>
                      <FontAwesomeIcon icon={faLightbulb} size="3x" />{" "}
                      {/* Criatividade */}
                    </span>
                  </div>
                  <div className="second-content">
                    <span>Criatividade</span>
                  </div>
                </div>

                <div className="cardH">
                  <div className="first-content">
                    <span>
                      <FontAwesomeIcon icon={faHandshake} size="3x" />{" "}
                      {/* Colaboração */}
                    </span>
                  </div>
                  <div className="second-content">
                    <span>Colaboração</span>
                  </div>
                </div>

                <div className="cardH">
                  <div className="first-content">
                    <span>
                      <FontAwesomeIcon icon={faBrain} size="3x" />{" "}
                      {/* Pensamento Crítico */}
                    </span>
                  </div>
                  <div className="second-content">
                    <span>Pensamento Crítico</span>
                  </div>
                </div>

                <div className="cardH">
                  <div className="first-content">
                    <span>
                      <FontAwesomeIcon icon={faRocket} size="3x" />{" "}
                      {/* Inovação */}
                    </span>
                  </div>
                  <div className="second-content">
                    <span>Inovação</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="Secondary">
              <h2>Habilidades R</h2>
              <div className="container-cardsM">
                <div className="cardH">
                  <div className="first-content">
                    <span>
                      <FontAwesomeIcon icon={faCode} size="3x" />{" "}
                      {/* Lógica de Programação */}
                    </span>
                  </div>
                  <div className="second-content">
                    <span>Lógica de Programação</span>
                  </div>
                </div>

                <div className="cardH">
                  <div className="first-content">
                    <span>
                      <FontAwesomeIcon icon={faNetworkWired} size="3x" />{" "}
                      {/* Redes e Sistemas */}
                    </span>
                  </div>
                  <div className="second-content">
                    <span>Redes e Sistemas</span>
                  </div>
                </div>

                <div className="cardH">
                  <div className="first-content">
                    <span>
                      <FontAwesomeIcon icon={faDatabase} size="3x" />{" "}
                      {/* Bancos de Dados */}
                    </span>
                  </div>
                  <div className="second-content">
                    <span>Bancos de Dados</span>
                  </div>
                </div>

                <div className="cardH">
                  <div className="first-content">
                    <span>
                      <FontAwesomeIcon icon={faCloud} size="3x" />{" "}
                      {/* Computação em Nuvem */}
                    </span>
                  </div>
                  <div className="second-content">
                    <span>Computação em Nuvem</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Habilidades;
