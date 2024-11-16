import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RiverEntity } from '../../../domain/entities/river.entity';
import { v4 } from 'uuid';

export class PennsylvaniaRiversSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // Clarion River - Ridgway
    const clarionRiverRidgway = await em.findOne(RiverEntity, {
      siteCode: '03029000',
    });
    em.upsert(RiverEntity, {
      uuid: clarionRiverRidgway?.uuid || v4(),
      name: 'Clarion River',
      location: 'Ridgway',
      stateAbbr: 'PA',
      siteCode: '03029000',
      lat: 41.420894,
      long: -78.735861,
    });

    // Yellow Breeches Creek
    const yellowBreechesCreekCampHill = await em.findOne(RiverEntity, {
      siteCode: '01571500',
    });
    em.upsert(RiverEntity, {
      uuid: yellowBreechesCreekCampHill?.uuid || v4(),
      name: 'Yellow Breeches Creek',
      location: 'Camp Hill',
      stateAbbr: 'PA',
      siteCode: '01571500',
      lat: 40.224812,
      long: -76.898029,
    });
  }
}
