import { getCustomRepository } from 'typeorm'
import { IProjectRequest } from '../interface/index'
import { ModuleRepositories } from '../repositories/ModuleRepositories'
import { ProjectRepositories } from '../repositories/ProjectRepositories'

export async function create(
  project: IProjectRequest,
  moduleId: number
): Promise<IProjectRequest> {
  const projectRepository = getCustomRepository(ProjectRepositories)
  const moduleRepository = getCustomRepository(ModuleRepositories)

  const module = await moduleRepository.findOne(moduleId)

  const projectPrepare = projectRepository.create({ ...project, module })

  await projectRepository.save({ ...projectPrepare })

  return projectPrepare
}

export async function getById(id: number): Promise<IProjectRequest> {
  const projectRepository = getCustomRepository(ProjectRepositories)

  const project = await projectRepository.findOne(id)

  return project
}
