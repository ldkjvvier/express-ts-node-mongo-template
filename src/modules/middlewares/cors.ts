import cors from 'cors'

const ACCEPTED_ORIGINS = [
  'http://localhost:4000',
  'http://localhost:5173',
  'https://rubic-vipa.vercel.app',
  'https://vipa.rubic.cl',
  '*'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (origin && acceptedOrigins.includes(origin)) {
        return callback(null, true)
      }
      // Permite solicitudes sin origen (por ejemplo, Postman)
      if (!origin) {
        return callback(null, true)
      }
      return callback(new Error('Not allowed by CORS'))
    },
    credentials: true,
    methods: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
    allowedHeaders:
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Access-Control-Allow-Credentials, Authorization, X-Requested-With, X-HTTP-Method-Override, Origin, X-HTTP-Method-Override, X-PINGOTHER, X-File-Name, X-File-Size, X-File-Type, X-Access-Token, X-HTTP-Method-Override, X-HTTP-Method, X-HTTP-Method-Override, X-Method-Override, X-Method, X-Method-Override, X-Request-Method, X-Requested-With, X-WP-Nonce, X-XSRF-TOKEN, XSRF-TOKEN'
  })
