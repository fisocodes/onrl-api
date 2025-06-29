import { DataSourceOptions } from 'typeorm'
import { join } from 'path'

export const typeORMConfig: DataSourceOptions = {
  type: 'sqlite',
  database: 'database.db',
  entities: [join(__dirname, 'src/**/*.entity.ts')],
  migrations: [join(__dirname, 'src/migrations/**/*.ts')],
  synchronize: false
}
