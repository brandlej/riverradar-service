import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { StateEntity } from '../../../domain/entities/state.entity';

export class StateSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    em.create(StateEntity, {
      name: 'Colorado',
      abbr: 'CO',
    });
  }
}
