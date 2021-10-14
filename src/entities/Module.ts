import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm'
import { Project } from './Project'
import { Team } from './Team'

@Entity('modules')
export class Module {
  @PrimaryColumn()
  id: number

  @Column()
  link: string

  @Column()
  name: string

  @OneToMany(() => Project, (project) => project.module)
  project: Project[]

  @ManyToOne(() => Team, (team) => team.module)
  team: Team
}
