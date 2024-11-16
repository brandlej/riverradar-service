import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RiverEntity } from '../../../domain/entities/river.entity';
import { v4 } from 'uuid';

export class NewMexicoRiversSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // Cimarron River - Below Eagle Nest Dam
    const cimarronRiverBelowEagleNestDam = await em.findOne(RiverEntity, {
      siteCode: '07206000',
    });
    em.upsert(RiverEntity, {
      uuid: cimarronRiverBelowEagleNestDam?.uuid || v4(),
      name: 'Cimarron River',
      location: 'Below Eagle Nest Dam',
      stateAbbr: 'NM',
      siteCode: '07206000',
      lat: 36.532125,
      long: -105.228144,
    });

    // Pecos River - Pecos
    const pecosRiverPecos = await em.findOne(RiverEntity, {
      siteCode: '08378500',
    });
    em.upsert(RiverEntity, {
      uuid: pecosRiverPecos?.uuid || v4(),
      name: 'Pecos River',
      location: 'Pecos',
      stateAbbr: 'NM',
      siteCode: '08378500',
      lat: 35.70835,
      long: -105.682702,
    });

    // San Juan River - Archuleta
    const sanJuanRiverArchuleta = await em.findOne(RiverEntity, {
      siteCode: '09355500',
    });
    em.upsert(RiverEntity, {
      uuid: sanJuanRiverArchuleta?.uuid || v4(),
      name: 'San Juan River',
      location: 'Archuleta',
      stateAbbr: 'NM',
      siteCode: '09355500',
      lat: 36.801888,
      long: -107.698638,
    });
  }
}
