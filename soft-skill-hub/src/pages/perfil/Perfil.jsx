import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Usando o hook useNavigate para redirecionamento
import './Perfil.css';

const Perfil = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();  // Hook para redirecionamento
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
    const storedSkills = JSON.parse(localStorage.getItem("userSkills")) || [];
    setSkills(storedSkills);
  }, []);




  // Função para realizar o logout
  const handleLogout = () => {
    localStorage.removeItem("userName");  // Remove o nome do usuário do localStorage
    navigate("/login");  // Redireciona para a página de login
  };

  return (
    <div className="container-perfil">
      <div className="perfil-header">
        <img
          src="https://via.placeholder.com/150"
          alt="Foto de perfil"
          className="perfil-foto"
        />
        {/* Usando o nome armazenado */}
        <h1 className="perfil-nome">{userName || "Nome do Usuário"}</h1>
        <p className="perfil-subtitulo">Aprendendo soft skills como um mestre!</p>
      </div>
      <div className="perfil-progresso">
        <h2 className="perfil-secao-titulo">Progresso</h2>
        <div className="barra-progresso">
          <div className="barra-preenchida" style={{ width: "0%" }}></div>
        </div>
        <p className="perfil-progresso-texto">0% concluído</p>
      </div>

      <div className="perfil-habilidades">
      <h2 className="perfil-secao-titulo">Habilidades</h2>
      <ul className="perfil-lista-habilidades">
        {skills.length > 0 ? (
          skills.map((skill) => (
            <li className="perfil-habilidade" key={skill.id}>
              {skill.nome}
            </li>
          ))
        ) : (
          <p>Você ainda não adicionou nenhuma habilidade.</p>
        )}
      </ul>
    </div>

      <div className="perfil-acoes">
        <button className="perfil-botao">Editar Perfil</button>
        <button className="perfil-botao">Ver Certificados</button>
        {/* Botão de logout */}
        <button className="perfil-botao" onClick={handleLogout}>Sair</button>
      </div>
    </div>
  );
};

export default Perfil;
