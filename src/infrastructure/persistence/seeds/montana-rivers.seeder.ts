import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RiverEntity } from '../../../domain/entities/river.entity';
import { v4 } from 'uuid';

export class MontanaRiversSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // Madison River - Kirby Ranch
    const madisonRiverKirbyRanch = await em.findOne(RiverEntity, {
      siteCode: '06038800',
    });
    em.upsert(RiverEntity, {
      uuid: madisonRiverKirbyRanch?.uuid || v4(),
      name: 'Madison River',
      location: 'Kirby Ranch',
      stateAbbr: 'MT',
      siteCode: '06038800',
      lat: 44.888655,
      long: -111.580886,
    });

    // Madison River - Cameron
    const madisonRiverCameron = await em.findOne(RiverEntity, {
      siteCode: '06040000',
    });
    em.upsert(RiverEntity, {
      uuid: madisonRiverCameron?.uuid || v4(),
      name: 'Madison River',
      location: 'Cameron',
      stateAbbr: 'MT',
      siteCode: '06040000',
      lat: 45.233133,
      long: -111.751633,
    });

    // Madison River - West Yellowstone
    const madisonRiverWestYellowStone = await em.findOne(RiverEntity, {
      siteCode: '06037500',
    });
    em.upsert(RiverEntity, {
      uuid: madisonRiverWestYellowStone?.uuid || v4(),
      name: 'Madison River',
      location: 'West Yellowstone',
      stateAbbr: 'MT',
      siteCode: '06037500',
      lat: 44.657072,
      long: -111.067963,
    });

    // Yellowstone River - Corwin Springs
    const yellowstoneRiverCorwinSprings = await em.findOne(RiverEntity, {
      siteCode: '06191500',
    });
    em.upsert(RiverEntity, {
      uuid: yellowstoneRiverCorwinSprings?.uuid || v4(),
      name: 'Yellowstone River',
      location: 'Corwin Springs',
      stateAbbr: 'MT',
      siteCode: '06191500',
      lat: 45.112119,
      long: -110.793666,
    });

    // Yellowstone River - Livingston
    const yellowstoneRiverLivingston = await em.findOne(RiverEntity, {
      siteCode: '06192500',
    });
    em.upsert(RiverEntity, {
      uuid: yellowstoneRiverLivingston?.uuid || v4(),
      name: 'Yellowstone River',
      location: 'Livingston',
      stateAbbr: 'MT',
      siteCode: '06192500',
      lat: 45.597211,
      long: -110.566497,
    });

    // Gallatin River - Big Sky
    const gallatinRiverBigSky = await em.findOne(RiverEntity, {
      siteCode: '06043120',
    });
    em.upsert(RiverEntity, {
      uuid: gallatinRiverBigSky?.uuid || v4(),
      name: 'Gallatin River',
      location: 'Big Sky',
      stateAbbr: 'MT',
      siteCode: '06043120',
      lat: 45.297277,
      long: -111.211391,
    });
  }
}
