import { Request, Response } from 'express'
import * as teamServices from '../services/team'

export async function create(req: Request, res: Response) {
  const { classNumber } = req.body

  const team = await teamServices.create({
    classNumber,
  })

  return res.status(201).send(team)
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params

  const team = await teamServices.getById(Number(id))

  res.send(team)
}

export async function getAll(req: Request, res: Response) {
  const teams = await teamServices.getAll()

  res.send(teams)
}
