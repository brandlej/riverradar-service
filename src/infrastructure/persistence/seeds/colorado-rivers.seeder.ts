import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RiverEntity } from '../../../domain/entities/river.entity';
import { v4 } from 'uuid';

export class ColoradoRiversSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // Arkansas River - Leadville
    const arkansasRiverLeadville = await em.findOne(RiverEntity, {
      siteCode: '07081200',
    });
    em.upsert(RiverEntity, {
      uuid: arkansasRiverLeadville?.uuid || v4(),
      name: 'Arkansas River',
      location: 'Leadville',
      stateAbbr: 'CO',
      siteCode: '07081200',
      lat: 39.249,
      long: -106.348111,
    });

    // Arkansas River - Granite
    const arkansasRiverGranite = await em.findOne(RiverEntity, {
      siteCode: '07087050',
    });
    em.upsert(RiverEntity, {
      uuid: arkansasRiverGranite?.uuid || v4(),
      name: 'Arkansas River',
      location: 'Granite',
      stateAbbr: 'CO',
      siteCode: '07087050',
      lat: 38.976938,
      long: -106.213983,
    });

    // Arkansas River - Pueblo
    const arkansasRiverPueblo = await em.findOne(RiverEntity, {
      siteCode: '07099970',
    });
    em.upsert(RiverEntity, {
      uuid: arkansasRiverPueblo?.uuid || v4(),
      name: 'Arkansas River',
      location: 'Pueblo',
      stateAbbr: 'CO',
      siteCode: '07099970',
      lat: 38.253613,
      long: -104.606085,
    });

    // Cache La Poudre River - Fort Collins
    const poudreFortCollins = await em.findOne(RiverEntity, {
      siteCode: '06752260',
    });
    em.upsert(RiverEntity, {
      uuid: poudreFortCollins?.uuid || v4(),
      name: 'Cache La Poudre River',
      location: 'Fort Collins',
      stateAbbr: 'CO',
      siteCode: '06752260',
      lat: 40.5880833,
      long: -105.0692222,
    });

    // Big Thompson River - Moraine Park
    const bigThompsonMoraine = await em.findOne(RiverEntity, {
      siteCode: '402114105350101',
    });
    em.upsert(RiverEntity, {
      uuid: bigThompsonMoraine?.uuid || v4(),
      name: 'Big Thompson River',
      location: 'Moraine Park',
      stateAbbr: 'CO',
      siteCode: '402114105350101',
      lat: 40.3538611,
      long: -105.5841389,
    });

    // Bear Creek - Morrison
    const bearCreekMorrison = await em.findOne(RiverEntity, {
      siteCode: '06710605',
    });
    em.upsert(RiverEntity, {
      uuid: bearCreekMorrison?.uuid || v4(),
      name: 'Bear Creek',
      location: 'Morrison',
      stateAbbr: 'CO',
      siteCode: '06710605',
      lat: 39.652027,
      long: -105.17325,
    });

    // Clear Creek - Golden
    const clearCreekGolden = await em.findOne(RiverEntity, {
      siteCode: '06719505',
    });
    em.upsert(RiverEntity, {
      uuid: clearCreekGolden?.uuid || v4(),
      name: 'Clear Creek',
      location: 'Golden',
      stateAbbr: 'CO',
      siteCode: '06719505',
      lat: 39.753042,
      long: -105.235266,
    });

    // South Platte - Deckers
    const deckers = await em.findOne(RiverEntity, {
      siteCode: '06701900',
    });
    em.upsert(RiverEntity, {
      uuid: deckers?.uuid || v4(),
      name: 'South Platte',
      location: 'Deckers',
      stateAbbr: 'CO',
      siteCode: '06701900',
      lat: 39.25999,
      long: -105.221937,
    });

    // Blue River - Silverthorne
    const blueRiverDillon = await em.findOne(RiverEntity, {
      siteCode: '09050700',
    });
    em.upsert(RiverEntity, {
      uuid: blueRiverDillon?.uuid || v4(),
      name: 'Blue River',
      location: 'Silverthorne',
      stateAbbr: 'CO',
      siteCode: '09050700',
      lat: 39.625542,
      long: -106.066408,
    });

    // Eagle River - Below Milk Creek
    const eagleRiverMilkCreek = await em.findOne(RiverEntity, {
      siteCode: '394220106431500',
    });
    em.upsert(RiverEntity, {
      uuid: eagleRiverMilkCreek?.uuid || v4(),
      name: 'Eagle River',
      location: 'Below Milk Creek',
      stateAbbr: 'CO',
      siteCode: '394220106431500',
      lat: 39.705,
      long: -106.725833,
    });

    // Roaring Fork River - Glenwood Springs
    const roaringFoarkGlenwood = await em.findOne(RiverEntity, {
      siteCode: '09085000',
    });
    em.upsert(RiverEntity, {
      uuid: roaringFoarkGlenwood?.uuid || v4(),
      name: 'Roaring Fork River',
      location: 'Glenwood Springs',
      stateAbbr: 'CO',
      siteCode: '09085000',
      lat: 39.546666,
      long: -107.330833,
    });

    // Williams Fork - Below Williams Fork Reservoir
    const willysFork = await em.findOne(RiverEntity, {
      siteCode: '09038500',
    });
    em.upsert(RiverEntity, {
      uuid: willysFork?.uuid || v4(),
      name: 'Williams Fork',
      location: 'Below Williams Fork Reservoir',
      stateAbbr: 'CO',
      siteCode: '09038500',
      lat: 40.035927,
      long: -106.205013,
    });

    // Yampa River - Below Stagecoach Reservoir
    const yampaStagecoach = await em.findOne(RiverEntity, {
      siteCode: '09237500',
    });
    em.upsert(RiverEntity, {
      uuid: yampaStagecoach?.uuid || v4(),
      name: 'Yampa River',
      location: 'Below Stagecoach Reservoir',
      stateAbbr: 'CO',
      siteCode: '09237500',
      lat: 40.286544,
      long: -106.829055,
    });

    // Taylor River - Below Taylor Park Reservoir
    const taylorRiver = await em.findOne(RiverEntity, {
      siteCode: '09109000',
    });
    em.upsert(RiverEntity, {
      uuid: taylorRiver?.uuid || v4(),
      name: 'Taylor River',
      location: 'Below Taylor Reservoir',
      stateAbbr: 'CO',
      siteCode: '09109000',
      lat: 38.818326,
      long: -106.609197,
    });
  }
}
