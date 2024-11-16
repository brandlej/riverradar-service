import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RiverEntity } from '../../../domain/entities/river.entity';
import { v4 } from 'uuid';

export class UtahRiversSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // Provo River - Heber city
    const provoRiverHeberCity = await em.findOne(RiverEntity, {
      siteCode: '10155200',
    });
    em.upsert(RiverEntity, {
      uuid: provoRiverHeberCity?.uuid || v4(),
      name: 'Provo River',
      location: 'Heber City',
      stateAbbr: 'UT',
      siteCode: '10155200',
      lat: 40.554398,
      long: -111.433242,
    });

    // Weber River - Oakley
    const weberRiverOakely = await em.findOne(RiverEntity, {
      siteCode: '10128500',
    });
    em.upsert(RiverEntity, {
      uuid: weberRiverOakely?.uuid || v4(),
      name: 'Weber River',
      location: 'Oakley',
      stateAbbr: 'UT',
      siteCode: '10128500',
      lat: 40.737172,
      long: -111.247965,
    });

    // Duchesne River - Tabiona
    const duchesneRiverTabiona = await em.findOne(RiverEntity, {
      siteCode: '09277500',
    });
    em.upsert(RiverEntity, {
      uuid: duchesneRiverTabiona?.uuid || v4(),
      name: 'Duchesne River',
      location: 'Tabiona',
      stateAbbr: 'UT',
      siteCode: '09277500',
      lat: 40.299747,
      long: -110.604255,
    });
  }
}
