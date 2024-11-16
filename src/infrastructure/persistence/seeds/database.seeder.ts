import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { StatesSeeder } from './states.seeder';
import { ColoradoRiversSeeder } from './colorado-rivers.seeder';
import { IdahoRiversSeeder } from './idaho-rivers.seeder';
import { MaineRiversSeeder } from './maine-rivers.seeder';
import { MontanaRiversSeeder } from './montana-rivers.seeder';
import { NorthCarolinaRiversSeeder } from './north-carolina-rivers.seeder';
import { OregonRiversSeeder } from './oregon-rivers.seeder';
import { TennesseeRiversSeeder } from './tennessee-rivers.seeder';
import { UtahRiversSeeder } from './utah-rivers.seeder';
import { WyomingRiversSeeder } from './wyoming-rivers.seeder';
import { WashingtonRiversSeeder } from './washington-rivers.seeder';
import { CaliforniaRiversSeeder } from './california-rivers.seeder';
import { ArizonaRiversSeeder } from './arizona-rivers.seeder';
import { NevadaRiversSeeder } from './nevada-rivers.seeder';
import { NewMexicoRiversSeeder } from './new-mexico-rivers.seeder';
import { PennsylvaniaRiversSeeder } from './pennsylvania-rivers.seeder';

/**
 * https://mikro-orm.io/docs/seeding
 */
export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    return this.call(em, [
      StatesSeeder,
      ArizonaRiversSeeder,
      CaliforniaRiversSeeder,
      ColoradoRiversSeeder,
      IdahoRiversSeeder,
      MaineRiversSeeder,
      MontanaRiversSeeder,
      NevadaRiversSeeder,
      NewMexicoRiversSeeder,
      NorthCarolinaRiversSeeder,
      OregonRiversSeeder,
      PennsylvaniaRiversSeeder,
      TennesseeRiversSeeder,
      UtahRiversSeeder,
      WashingtonRiversSeeder,
      WyomingRiversSeeder,
    ]);
  }
}
