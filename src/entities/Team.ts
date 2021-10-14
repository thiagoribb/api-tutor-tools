import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm'
import { Module } from './Module'

@Entity('teams')
export class Team {
  @PrimaryColumn()
  id: number

  @Column()
  classNumber: number

  @OneToMany(() => Module, (module) => module.team)
  module: Module[]
}
