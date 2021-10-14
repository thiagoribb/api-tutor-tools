import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Module } from './Module'

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  isFullStack: boolean

  @Column()
  initialColumnRequisit: string

  @Column()
  endColumnRequisit: string

  @Column()
  expectationColumn: string

  @Column()
  week: number

  @ManyToOne(() => Module, (module) => module.project)
  module: Module
}
