Projeto Soft-Skill-Hub
O Soft-Skill-Hub é um portal onde os usuários podem praticar soft skills através de desafios e tarefas organizados por categorias. O objetivo é permitir que os usuários acompanhem seu progresso e reflitam sobre seu desenvolvimento pessoal.

Estrutura do Projeto
1. Front-End
O front-end do projeto é desenvolvido utilizando React para criar uma interface dinâmica e interativa. O CSS é utilizado para estilização e layout das páginas.

2. Páginas do Projeto
Página Inicial - Home.jsx
Objetivo: Introduzir o portal, explicar a importância das soft skills e como o portal funciona.
Funcionalidades:
Exibir práticas recomendadas ou mais populares.
Apresentar uma visão geral do portal.

Página de Habilidades - Habilidades.jsx
Objetivo: Listar as habilidades disponíveis para prática.
Funcionalidades:
Categorias de Soft Skills (ex.: Comunicação, Trabalho em Equipe, Resiliência).
Filtros para habilidades por nível de dificuldade ou tempo estimado para conclusão.
Pesquisa de habilidades.

Página de Prática - Pratica.jsx
Objetivo: Descrever a habilidade selecionada e os passos para praticá-la.
Funcionalidades:
Exibir a descrição da habilidade.
Campo de reflexão para que o usuário anote insights e aprendizados após a prática.
Botão de conclusão para registrar a prática como concluída.
Exibir progresso na habilidade.

Página de Login/Cadastro - Cadastro.jsx
Objetivo: Permitir que os usuários se cadastrem ou façam login no portal.
Funcionalidades:
Formulário de cadastro com campos para nome, email e senha.
Feedback de sucesso ou erro no cadastro.
Página de Perfil - Perfil.jsx
Objetivo: Exibir o histórico de práticas e progresso do usuário.

Funcionalidades:
Histórico de práticas e progresso com gráficos ou barras de progresso.
Badge de conquista ao completar práticas de diferentes habilidades.
Opção de editar o perfil com informações pessoais e preferências de notificação.

3. Componentes Globais
Header - Header.jsx
Objetivo: Navegação principal do portal.
Funcionalidades:
Links para as principais páginas do portal.
Botão para abrir o perfil ou modal de login.
Footer - Footer.jsx
Objetivo: Informações de rodapé do portal.
Funcionalidades:
Links para redes sociais.
Informações de copyright.

4. Servidor - server.js
Objetivo: Servir os dados do portal e gerenciar autenticação.
Funcionalidades:
Middleware para proteger rotas.
Rota de login para gerar tokens JWT.
Servir dados do banco de dados JSON.

5. Banco de Dados - db.json
Objetivo: Armazenar dados dos usuários e habilidades.
Estrutura:
Usuários com informações de login e habilidades concluídas.
Habilidades com descrição, aula e ícone.

Conclusão
O Soft-Skill-Hub é um portal completo para prática e desenvolvimento de soft skills, com uma interface amigável e funcionalidades que permitem aos usuários acompanhar seu progresso e refletir sobre seu desenvolvimento pessoal. O projeto utiliza tecnologias modernas como React e JSON Server para criar uma experiência interativa e dinâmica.