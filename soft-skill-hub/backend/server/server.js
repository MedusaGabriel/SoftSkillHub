import jsonServer from 'json-server';
import jwt from 'jsonwebtoken';

const server = jsonServer.create();
const router = jsonServer.router('./backend/db/db.json'); // use o banco de dados correto
const middlewares = jsonServer.defaults();

const SECRET_KEY = 'seu_segredo_jwt_aqui';

server.use(middlewares);

// Middleware para proteger rotas
server.use((req, res, next) => {
  if (req.originalUrl.startsWith('/habilidades') || req.originalUrl.startsWith('/pratica') || req.originalUrl.startsWith('/perfil')) {
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(403).json({ message: 'Acesso negado. Você precisa estar logado.' });
    }

    const tokenWithoutBearer = token.split(' ')[1];

    jwt.verify(tokenWithoutBearer, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Token inválido.' });
      }
      req.user = decoded;
      next();
    });
  } else {
    next();
  }
});

// Rota de login (para gerar o token)
server.post('/login', (req, res) => {
  const { username } = req.body;
  const user = { username };  
  const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' }); 

  res.json({ token });
});

// Usando o router do json-server
server.use(router);

// Iniciando o servidor
server.listen(5001, () => {
  console.log('Json server está rodando na porta 5001');
});
