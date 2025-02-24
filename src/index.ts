import express from 'express'
import { createServer } from 'http'
import { userAuthRoutes, corsMiddleware, config } from './modules'

const app = express()
const server = createServer(app)

// Middlewares
app.use(express.json())
app.use(corsMiddleware())

// Routes
app.use('/api/', userAuthRoutes)

app.get('/ping', (_, res) => {
  res.send('pong')
})

// Iniciar el servidor
const PORT = config.port || 5000
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
