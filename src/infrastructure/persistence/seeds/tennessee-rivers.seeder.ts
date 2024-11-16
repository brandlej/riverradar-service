import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RiverEntity } from '../../../domain/entities/river.entity';
import { v4 } from 'uuid';

export class TennesseeRiversSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // Clinch River
    const clinchRiverAboveTazewell = await em.findOne(RiverEntity, {
      siteCode: '03528000',
    });
    em.upsert(RiverEntity, {
      uuid: clinchRiverAboveTazewell?.uuid || v4(),
      name: 'Clinch River',
      location: 'Above Tazewell',
      stateAbbr: 'TN',
      siteCode: '03528000',
      lat: 36.425087,
      long: -83.398234,
    });

    // Little Pigeon River
    const littlePigeonRiverSevierville = await em.findOne(RiverEntity, {
      siteCode: '03470000',
    });
    em.upsert(RiverEntity, {
      uuid: littlePigeonRiverSevierville?.uuid || v4(),
      name: 'Little Pigeon River',
      location: 'Sevierville',
      stateAbbr: 'TN',
      siteCode: '03470000',
      lat: 35.87842286,
      long: -83.57766919,
    });

    // Little River - Above Townsend
    const littleRiverAboveTownsend = await em.findOne(RiverEntity, {
      siteCode: '03497300',
    });
    em.upsert(RiverEntity, {
      uuid: littleRiverAboveTownsend?.uuid || v4(),
      name: 'Little River',
      location: 'Above Townsend',
      stateAbbr: 'TN',
      siteCode: '03497300',
      lat: 35.66453328,
      long: -83.7112821,
    });

    // Tellico River
    const tellicoRiverTellicoPlains = await em.findOne(RiverEntity, {
      siteCode: '03518500',
    });
    em.upsert(RiverEntity, {
      uuid: tellicoRiverTellicoPlains?.uuid || v4(),
      name: 'Tellico River',
      location: 'Tellico Plains',
      stateAbbr: 'TN',
      siteCode: '03518500',
      lat: 35.362016,
      long: -84.279014,
    });
  }
}
