import { PostgreSqlDriver } from '@mikro-orm/postgresql';

/**
 * https://mikro-orm.io/docs/configuration
 */
export default {
  entities: ['./dist/domain/entities'],
  entitiesTs: ['./src/domain/entities'],
  clientUrl: process.env.DATABASE_URL,
  driver: PostgreSqlDriver,
  debug: true,
  migrations: {
    path: './src/infrastructure/persistence/migrations',
    disableForeignKeys: false,
  },
  seeder: {
    path: './src/infrastructure/persistence/seeds',
    defaultSeeder: 'DatabaseSeeder',
  },
  schemaGenerator: {
    disableForeignKeys: false,
    createForeignKeyConstraints: false,
  },
};
