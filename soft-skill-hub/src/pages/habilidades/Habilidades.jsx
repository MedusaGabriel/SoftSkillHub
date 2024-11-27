import "../habilidades/Habilidades.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountain,
  faHeart,
  faComments,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { createServer } from "miragejs";

const Habilidades = () => {
  const [skills, setSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //Mirage.js (API fake) Essa logica e temporaria enquanto o Api nao esta disponivel, ela simula uma API!
  //Inicio da logica temporaria
  useEffect(() => {
    createServer({
      routes() {
        this.namespace = "api";

        // Simula uma rota para pegar as habilidades
        this.get("/skills", () => [
          { id: 1, nome: "Liderança", icon: faMountain },
          { id: 2, nome: "Trabalho em Equipe", icon: faHeart },
          { id: 3, nome: "Pensamento Crítico", icon: faComments },
          { id: 4, nome: "Resiliência", icon: faMountain },
          { id: 5, nome: "Empatia", icon: faHeart },
          { id: 6, nome: "Comunicação", icon: faComments },
          { id: 7, nome: "Comunicação", icon: faComments },
        ]);
      },
    });

    // Fazendo a requisição para pegar os dados da API Fake
    fetch("/api/skills")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  // Fim da logica temporaria

  // Esse é o codigo da Api Real que sera utilizado no futuro (remove o Mirage.js e substitui por essa com a Url da Api)

  //  const API_URL = "https://sua-api.com/skills";
  //useEffect(() => {
  //
  //fetch(API_URL)
  // .then((res) => {
  //  if (!res.ok) {
  //    throw new Error("Erro ao buscar as skills do banco de dados.");
  //  }
  //   return res.json();
  // })
  //  .then((data) => setSkills(data))
  //  .catch((error) => console.error("Erro:", error));
  //}, []);

  const filteredSkills = skills.filter((skill) =>
    skill.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="containerHs">
        <div className="container-titleH">
          <h1 id="TituloS">
            Bem-vindo à Central de Habilidades da Soft Skills
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

          <h3 id="Primary">Skills Disponíveis em nosso Banco de dados</h3>

          <div className="search-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              placeholder="Pesquise uma habilidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado de busca
              className="search-bar"
            />
          </div>

          {/* Aqui renderizamos as skills vindas da API */}

          <div className="container-grid">
            {filteredSkills.map((skill) => (
              <div className="cardH" key={skill.id}>
                <div className="first-content">
                  <span>
                    <FontAwesomeIcon icon={skill.icon} size="3x" />
                  </span>
                </div>
                <div className="second-content">
                  <span>{skill.nome}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Habilidades;
