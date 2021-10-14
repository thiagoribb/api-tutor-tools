import { EntityRepository, Repository } from 'typeorm'
import { Module } from '../entities/Module'

@EntityRepository(Module)
export class ModuleRepositories extends Repository<Module> {}
