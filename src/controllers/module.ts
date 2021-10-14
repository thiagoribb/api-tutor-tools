import { Request, Response } from 'express'
import * as moduleServices from '../services/module'

export async function create(req: Request, res: Response) {
  const { name, link, classNumber } = req.body

  const module = await moduleServices.create({ name, link, classNumber })

  return res.status(201).send(module)
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params

  const module = await moduleServices.getById(Number(id))

  res.send(module)
}

export async function getAll(req: Request, res: Response) {
  const modules = await moduleServices.getAll()

  res.send(modules)
}
