import { EntityRepository, Repository } from 'typeorm'
import { Team } from '../entities/Team'

@EntityRepository(Team)
export class TeamRepositories extends Repository<Team> {}
