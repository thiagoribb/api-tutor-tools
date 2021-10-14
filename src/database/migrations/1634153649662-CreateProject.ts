import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateProject1634134933395 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'projects',
        columns: [
          {
            name: 'id',
            type: 'bigint',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'isFullStack',
            type: 'boolean',
          },
          {
            name: 'initialColumnRequisit',
            type: 'varchar',
          },
          {
            name: 'endColumnRequisit',
            type: 'varchar',
          },
          {
            name: 'expectationColumn',
            type: 'varchar',
          },
          {
            name: 'week',
            type: 'int',
          },
          {
            name: 'moduleId',
            type: 'bigint',
          },
        ],
        foreignKeys: [
          {
            name: 'FKModuleId',
            referencedTableName: 'modules',
            referencedColumnNames: ['id'],
            columnNames: ['moduleId'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL',
          },
        ],
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('projects')
  }
}
