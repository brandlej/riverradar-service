import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RiverEntity } from '../../../domain/entities/river.entity';
import { v4 } from 'uuid';

export class WashingtonRiversSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // Hoh River - Forks
    const hohRiverForks = await em.findOne(RiverEntity, {
      siteCode: '12041200',
    });
    em.upsert(RiverEntity, {
      uuid: hohRiverForks?.uuid || v4(),
      name: 'Hoh River',
      location: 'Forks',
      stateAbbr: 'WA',
      siteCode: '12041200',
      lat: 47.806747,
      long: -124.251032,
    });

    // Sauk River - Sauk
    const saukRiverSauk = await em.findOne(RiverEntity, {
      siteCode: '12189500',
    });
    em.upsert(RiverEntity, {
      uuid: saukRiverSauk?.uuid || v4(),
      name: 'Sauk River',
      location: 'Sauk',
      stateAbbr: 'WA',
      siteCode: '12189500',
      lat: 48.424558,
      long: -121.568463,
    });

    // Skagit River - Concrete
    const skagitRiverConcrete = await em.findOne(RiverEntity, {
      siteCode: '12194000',
    });
    em.upsert(RiverEntity, {
      uuid: skagitRiverConcrete?.uuid || v4(),
      name: 'Skagit River',
      location: 'Skagit',
      stateAbbr: 'WA',
      siteCode: '12194000',
      lat: 48.52428,
      long: -121.770974,
    });

    // Yakima River - Umtanum
    const yakimaRiverUmtanum = await em.findOne(RiverEntity, {
      siteCode: '12484500',
    });
    em.upsert(RiverEntity, {
      uuid: yakimaRiverUmtanum?.uuid || v4(),
      name: 'Yakima River',
      location: 'Umtanum',
      stateAbbr: 'WA',
      siteCode: '12484500',
      lat: 46.862626,
      long: -120.480067,
    });

    // Middle Fork Snoqualmie River - Tanner
    const middleForkSnoqualmieRiverTanner = await em.findOne(RiverEntity, {
      siteCode: '12141300',
    });
    em.upsert(RiverEntity, {
      uuid: middleForkSnoqualmieRiverTanner?.uuid || v4(),
      name: 'Middle Fork Snoqualmie River',
      location: 'Tanner',
      stateAbbr: 'WA',
      siteCode: '12141300',
      lat: 47.485911,
      long: -121.647864,
    });
  }
}
