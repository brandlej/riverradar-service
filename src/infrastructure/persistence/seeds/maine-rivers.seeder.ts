import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RiverEntity } from '../../../domain/entities/river.entity';
import { v4 } from 'uuid';

export class MaineRiversSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // Grand Lake Stream
    const grandLakeStream = await em.findOne(RiverEntity, {
      siteCode: '01019000',
    });
    em.upsert(RiverEntity, {
      uuid: grandLakeStream?.uuid || v4(),
      name: 'Grand Lake Stream',
      location: 'Grand Lake Stream',
      stateAbbr: 'ME',
      siteCode: '01019000',
      lat: 45.1725,
      long: -67.768888,
    });
  }
}
