import "./Perfil.css";

const Perfil = () => {
    return (
        <div className="container-perfil">
            <div className="perfil-header">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Foto de perfil"
                    className="perfil-foto"
                />
                <h1 className="perfil-nome">Nome do Usuário</h1>
                <p className="perfil-subtitulo">Aprendendo soft skills como um mestre!</p>
            </div>
            <div className="perfil-progresso">
                <h2 className="perfil-secao-titulo">Progresso</h2>
                <div className="barra-progresso">
                    <div className="barra-preenchida" style={{ width: "70%" }}></div>
                </div>
                <p className="perfil-progresso-texto">70% concluído</p>
            </div>
            <div className="perfil-habilidades">
                <h2 className="perfil-secao-titulo">Habilidades</h2>
                <ul className="perfil-lista-habilidades">
                    <li className="perfil-habilidade">Comunicação</li>
                    <li className="perfil-habilidade">Liderança</li>
                    <li className="perfil-habilidade">Resolução de Conflitos</li>
                </ul>
            </div>
            <div className="perfil-acoes">
                <button className="perfil-botao">Editar Perfil</button>
                <button className="perfil-botao">Ver Certificados</button>
            </div>
        </div>
    );
};

export default Perfil;
