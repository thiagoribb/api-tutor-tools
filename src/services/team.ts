import { getCustomRepository } from 'typeorm'
import { ITeamRequest } from '../interface/index'
import { TeamRepositories } from '../repositories/TeamRepositories'

export async function create(team: ITeamRequest): Promise<ITeamRequest> {
  const teamRepository = getCustomRepository(TeamRepositories)

  const teamPrepare = teamRepository.create(team)

  await teamRepository.save(teamPrepare)

  return teamPrepare
}

export async function getById(id: number): Promise<ITeamRequest> {
  const teamRepository = getCustomRepository(TeamRepositories)

  const team = await teamRepository.findOne(id)

  return team
}

export async function getAll(): Promise<ITeamRequest[]> {
  const teamRepository = getCustomRepository(TeamRepositories)

  const team = await teamRepository.find({
    relations: ['module', 'module.project'],
  })

  return team
}
