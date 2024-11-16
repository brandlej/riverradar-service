import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RiverEntity } from '../../../domain/entities/river.entity';
import { v4 } from 'uuid';

export class NevadaRiversSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // Truckee River
    const truckeeRiver = await em.findOne(RiverEntity, {
      siteCode: '10348000',
    });
    em.upsert(RiverEntity, {
      uuid: truckeeRiver?.uuid || v4(),
      name: 'Truckee River',
      location: 'Reno',
      stateAbbr: 'NV',
      siteCode: '10348000',
      lat: 39.530188,
      long: -119.795468,
    });
  }
}
