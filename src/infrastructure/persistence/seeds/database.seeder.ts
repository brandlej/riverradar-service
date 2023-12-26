import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { StateSeeder } from './state.seeder';
import { RiverSeeder } from './river.seeder';

/**
 * https://mikro-orm.io/docs/seeding
 */
export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    return this.call(em, [StateSeeder, RiverSeeder]);
  }
}
