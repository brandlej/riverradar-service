import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RiverEntity } from '../../../domain/entities/river.entity';
import { v4 } from 'uuid';

export class WyomingRiversSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // Wind river - Dubois
    const windRiverDubois = await em.findOne(RiverEntity, {
      siteCode: '06218500',
    });
    em.upsert(RiverEntity, {
      uuid: windRiverDubois?.uuid || v4(),
      name: 'Wind River',
      location: 'Dubois',
      stateAbbr: 'WY',
      siteCode: '06218500',
      lat: 43.578564,
      long: -109.759883,
    });

    // Snake River - Alpine
    const snakeRiverAlpine = await em.findOne(RiverEntity, {
      siteCode: '13022500',
    });
    em.upsert(RiverEntity, {
      uuid: snakeRiverAlpine?.uuid || v4(),
      name: 'Snake River',
      location: 'Alpine',
      stateAbbr: 'WY',
      siteCode: '13022500',
      lat: 43.1961111,
      long: -110.889444,
    });
  }
}
