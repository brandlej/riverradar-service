import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RiverEntity } from '../../../domain/entities/river.entity';
import { v4 } from 'uuid';

export class OregonRiversSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // Klamath River - Keno
    const klamathRiverKeno = await em.findOne(RiverEntity, {
      siteCode: '11509500',
    });
    em.upsert(RiverEntity, {
      uuid: klamathRiverKeno?.uuid || v4(),
      name: 'Klamath River',
      location: 'Keno',
      stateAbbr: 'OR',
      siteCode: '11509500',
      lat: 42.133199,
      long: -121.962231,
    });

    // Deschutes River - Biggs
    const deschutesRiverBiggs = await em.findOne(RiverEntity, {
      siteCode: '14103000',
    });
    em.upsert(RiverEntity, {
      uuid: deschutesRiverBiggs?.uuid || v4(),
      name: 'Deschutes River',
      location: 'Biggs',
      stateAbbr: 'OR',
      siteCode: '14103000',
      lat: 45.622067,
      long: -120.90562,
    });

    // Deschutes River - Culver
    const deschutesRiverCulver = await em.findOne(RiverEntity, {
      siteCode: '14076500',
    });
    em.upsert(RiverEntity, {
      uuid: deschutesRiverCulver?.uuid || v4(),
      name: 'Deschutes River',
      location: 'Culver',
      stateAbbr: 'OR',
      siteCode: '14076500',
      lat: 44.498729,
      long: -121.321155,
    });
  }
}
