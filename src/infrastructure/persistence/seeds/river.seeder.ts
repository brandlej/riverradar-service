import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RiverEntity } from '../../../domain/entities/river.entity';

export class RiverSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    em.create(RiverEntity, {
      name: 'Cache La Poudre',
      stateAbbr: 'CO',
      description: 'This is a river',
      lat: '123',
      long: '123',
      access: 'asdf',
    });
  }
}
