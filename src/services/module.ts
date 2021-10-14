import { getCustomRepository } from 'typeorm'
import { ImoduleRequest, IProjectRequest } from '../interface/index'
import { ModuleRepositories } from '../repositories/ModuleRepositories'
import { ProjectRepositories } from '../repositories/ProjectRepositories'
import { TeamRepositories } from '../repositories/TeamRepositories'

export async function create({ name, link, classNumber }: ImoduleRequest) {
  const moduleRepository = getCustomRepository(ModuleRepositories)
  const teamRepository = getCustomRepository(TeamRepositories)

  const team = await teamRepository.find({
    where: { classNumber },
  })

  const modulePrepare = moduleRepository.create({
    name,
    link,
    team: team[0],
  })

  await moduleRepository.save(modulePrepare)

  return modulePrepare
}

export async function getById(id: number) {
  const moduleRepository = getCustomRepository(ModuleRepositories)

  const module = await moduleRepository.find({
    where: { id },
    relations: ['project'],
  })

  return module
}

export async function getAll() {
  const moduleRepository = getCustomRepository(ModuleRepositories)

  const modules = await moduleRepository.find({
    relations: ['project'],
  })

  console.log(modules)

  return modules
}
