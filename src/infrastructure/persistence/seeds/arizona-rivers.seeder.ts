import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RiverEntity } from '../../../domain/entities/river.entity';
import { v4 } from 'uuid';

export class ArizonaRiversSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // Black River - Fort Apache
    const blackRiverFortApache = await em.findOne(RiverEntity, {
      siteCode: '09490500',
    });
    em.upsert(RiverEntity, {
      uuid: blackRiverFortApache?.uuid || v4(),
      name: 'Black River',
      location: 'Fort Apache',
      stateAbbr: 'AZ',
      siteCode: '09490500',
      lat: 33.712829,
      long: -110.211767,
    });

    // Colorado River - Lees Ferry
    const coloradoRiverLeesFerry = await em.findOne(RiverEntity, {
      siteCode: '09380000',
    });
    em.upsert(RiverEntity, {
      uuid: coloradoRiverLeesFerry?.uuid || v4(),
      name: 'Colorado River',
      location: 'Lees Ferry',
      stateAbbr: 'AZ',
      siteCode: '09380000',
      lat: 36.864333,
      long: -111.587872,
    });

    // Salt River - Below Stewart Mountain Dam
    const saltRiverBelowStewartMountainDam = await em.findOne(RiverEntity, {
      siteCode: '09502000',
    });
    em.upsert(RiverEntity, {
      uuid: saltRiverBelowStewartMountainDam?.uuid || v4(),
      name: 'Salt River',
      location: 'Below Stewart Mountain Dam',
      stateAbbr: 'AZ',
      siteCode: '09502000',
      lat: 33.552823,
      long: -111.576524,
    });
  }
}
