import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm'

export class AddForeginKeyInModule1634238089841 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'modules',
      new TableColumn({
        name: 'teamId',
        type: 'bigint',
      })
    )
    await queryRunner.createForeignKey(
      'modules',
      new TableForeignKey({
        name: 'FKTeamId',
        referencedColumnNames: ['id'],
        referencedTableName: 'teams',
        columnNames: ['teamId'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('modules', 'TeamId')
    await queryRunner.dropForeignKey('modules', 'FKTeamId')
  }
}
