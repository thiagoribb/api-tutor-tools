import { EntityRepository, Repository } from 'typeorm'
import { Project } from '../entities/Project'

@EntityRepository(Project)
export class ProjectRepositories extends Repository<Project> {}
