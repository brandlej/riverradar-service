import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RiverEntity } from '../../../domain/entities/river.entity';
import { v4 } from 'uuid';

export class CaliforniaRiversSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // North Yuba River - Goodyears Bar
    const northYubaRiverGoodyearsBar = await em.findOne(RiverEntity, {
      siteCode: '11413000',
    });
    em.upsert(RiverEntity, {
      uuid: northYubaRiverGoodyearsBar?.uuid || v4(),
      name: 'North Yuba River',
      location: 'Goodyears Bar',
      stateAbbr: 'CA',
      siteCode: '11413000',
      lat: 39.524893,
      long: -120.938006,
    });
  }
}
