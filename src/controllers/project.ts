import { Request, Response } from 'express'
import * as projectServices from '../services/project'

export async function create(req: Request, res: Response) {
  const {
    name,
    endColumnRequisit,
    initialColumnRequisit,
    expectationColumn,
    isFullStack,
    week,
    moduleId,
  } = req.body

  const project = await projectServices.create(
    {
      name,
      initialColumnRequisit,
      endColumnRequisit,
      expectationColumn,
      isFullStack,
      week,
    },
    moduleId
  )

  return res.status(201).send(project)
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params

  const project = await projectServices.getById(Number(id))

  res.send(project)
}
