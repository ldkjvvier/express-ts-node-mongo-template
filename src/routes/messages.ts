import express from 'express'
import { jsonResponse } from '@/modules'
import { Request, Response } from 'express'
export const userAuthRoutes = express.Router()


userAuthRoutes.get('/', (_req: Request, res: Response) => {
  res.json(jsonResponse(400,{ message: 'User Auth Test Route' }))
})
