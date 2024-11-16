import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RiverEntity } from '../../../domain/entities/river.entity';
import { v4 } from 'uuid';

export class NorthCarolinaRiversSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // Davidson River - Brevard
    const davidsonRiverBrevard = await em.findOne(RiverEntity, {
      siteCode: '03441000',
    });
    em.upsert(RiverEntity, {
      uuid: davidsonRiverBrevard?.uuid || v4(),
      name: 'Davidson River',
      location: 'Brevard',
      stateAbbr: 'NC',
      siteCode: '03441000',
      lat: 35.273055,
      long: -82.705833,
    });

    // Watauga River - Grove
    const wataugaRiverGrove = await em.findOne(RiverEntity, {
      siteCode: '03479000',
    });
    em.upsert(RiverEntity, {
      uuid: wataugaRiverGrove?.uuid || v4(),
      name: 'Watauga River',
      location: 'Grove',
      stateAbbr: 'NC',
      siteCode: '03479000',
      lat: 36.239166,
      long: -81.822222,
    });

    // Tuckasegee River - Barker's Creek
    const tuckasegeeRiverBarkersCreek = await em.findOne(RiverEntity, {
      siteCode: '03510577',
    });
    em.upsert(RiverEntity, {
      uuid: tuckasegeeRiverBarkersCreek?.uuid || v4(),
      name: 'Tuckasegee River',
      location: "Barker's Creek",
      stateAbbr: 'NC',
      siteCode: '03510577',
      lat: 35.384444,
      long: -83.291666,
    });
  }
}
