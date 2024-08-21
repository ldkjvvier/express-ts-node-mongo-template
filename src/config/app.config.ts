import dotenv from 'dotenv'
dotenv.config()

export const config = {
  // DATABASE
  dbURI: process.env.DB_CONNECTION_STRING || '',
  // access db token secret
  token: process.env.ACCESS_TOKEN_SECRET || '',
  tokenRefresh: process.env.REFRESH_TOKEN_SECRET || '',
  sessionSecret:
    process.env.TZ_SESSION_SECRET || '551fb19a-0a6c-47e6-9fbe-a629f69de2b9',
  mode: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  apiVersion: process.env.API_VERSION || 'v1',
  apiUrl: process.env.API_URL || 'http://localhost:5000'
}
