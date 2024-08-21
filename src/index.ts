import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import path from 'path'; // Importa path para manejar rutas de archivos
import { userAuthRoutes, corsMiddleware, config } from './modules';

const app = express();
const server = createServer(app);
const io = new Server(server);

// Middlewares
app.use(express.json());
app.use(corsMiddleware());

// Routes
app.use('/api/', userAuthRoutes);

// Serve the HTML file
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/ping', (_, res) => {
  res.send('pong');
});

// Socket.io
io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  socket.on('chat message', (msg) => {
    console.log('Message received:', msg);
    io.emit('chat message', msg); // Broadcast the message to all connected clients
  });

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  });
});

// Iniciar el servidor
const PORT = config.port || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
