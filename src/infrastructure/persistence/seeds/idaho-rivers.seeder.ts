import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RiverEntity } from '../../../domain/entities/river.entity';
import { v4 } from 'uuid';

export class IdahoRiversSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // Little Salmon River - Riggins
    const littleSalmonRiverRiggins = await em.findOne(RiverEntity, {
      siteCode: '13316500',
    });
    em.upsert(RiverEntity, {
      uuid: littleSalmonRiverRiggins?.uuid || v4(),
      name: 'Little Salmon River',
      location: 'Riggins',
      stateAbbr: 'ID',
      siteCode: '13316500',
      lat: 45.413055,
      long: -116.325277,
    });

    // Boise River - Anderson Ranch Dam
    const boiseRiverAndersonRanchDam = await em.findOne(RiverEntity, {
      siteCode: '13190500',
    });
    em.upsert(RiverEntity, {
      uuid: boiseRiverAndersonRanchDam?.uuid || v4(),
      name: 'Boise River',
      location: 'Anderson Ranch Dam',
      stateAbbr: 'ID',
      siteCode: '13190500',
      lat: 43.343611,
      long: -115.4775,
    });

    // Snake River - Irwin
    const snakeRiverIrwin = await em.findOne(RiverEntity, {
      siteCode: '13032500',
    });
    em.upsert(RiverEntity, {
      uuid: snakeRiverIrwin?.uuid || v4(),
      name: 'Snake River',
      location: 'Irwin',
      stateAbbr: 'ID',
      siteCode: '13032500',
      lat: 43.350833,
      long: -111.218888,
    });

    // Coeur d' Alene River - Enaville
    const coeurAleneRiverEnaville = await em.findOne(RiverEntity, {
      siteCode: '12413000',
    });
    em.upsert(RiverEntity, {
      uuid: coeurAleneRiverEnaville?.uuid || v4(),
      name: "Coeur d'Alene River",
      location: 'Enaville',
      stateAbbr: 'ID',
      siteCode: '12413000',
      lat: 47.5722,
      long: -116.2528,
    });
  }
}
