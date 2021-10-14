import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class RemoveColumnProjectIdOfModule1634155109667
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('modules', 'projectId')
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'modules',
      new TableColumn({
        name: 'projectId',
        type: 'bigint',
      })
    )
  }
}
