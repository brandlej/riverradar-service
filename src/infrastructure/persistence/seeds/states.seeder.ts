import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { StateEntity } from '../../../domain/entities/state.entity';
import { v4 } from 'uuid';

export class StatesSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // Arizona
    const arizona = await em.findOne(StateEntity, {
      abbr: 'AZ',
    });
    em.upsert(StateEntity, {
      uuid: arizona?.uuid || v4(),
      name: 'Arizona',
      abbr: 'AZ',
    });

    // California
    const california = await em.findOne(StateEntity, {
      abbr: 'CA',
    });
    em.upsert(StateEntity, {
      uuid: california?.uuid || v4(),
      name: 'California',
      abbr: 'CA',
    });

    // Colorado
    const colorado = await em.findOne(StateEntity, {
      abbr: 'CO',
    });
    em.upsert(StateEntity, {
      uuid: colorado?.uuid || v4(),
      name: 'Colorado',
      abbr: 'CO',
    });

    // Idaho
    const idaho = await em.findOne(StateEntity, {
      abbr: 'ID',
    });
    em.upsert(StateEntity, {
      uuid: idaho?.uuid || v4(),
      name: 'Idaho',
      abbr: 'ID',
    });

    // Maine
    const maine = await em.findOne(StateEntity, {
      abbr: 'ME',
    });
    em.upsert(StateEntity, {
      uuid: maine?.uuid || v4(),
      name: 'Maine',
      abbr: 'ME',
    });

    // Montana
    const montana = await em.findOne(StateEntity, {
      abbr: 'MT',
    });
    em.upsert(StateEntity, {
      uuid: montana?.uuid || v4(),
      name: 'Montana',
      abbr: 'MT',
    });

    // Nevada
    const nevada = await em.findOne(StateEntity, {
      abbr: 'NV',
    });
    em.upsert(StateEntity, {
      uuid: nevada?.uuid || v4(),
      name: 'Nevada',
      abbr: 'NV',
    });

    // New Mexico
    const newMexico = await em.findOne(StateEntity, {
      abbr: 'NM',
    });
    em.upsert(StateEntity, {
      uuid: newMexico?.uuid || v4(),
      name: 'New Mexico',
      abbr: 'NM',
    });

    // North Carolina
    const northCarolina = await em.findOne(StateEntity, {
      abbr: 'NC',
    });
    em.upsert(StateEntity, {
      uuid: northCarolina?.uuid || v4(),
      name: 'North Carolina',
      abbr: 'NC',
    });

    // Oregon
    const oregon = await em.findOne(StateEntity, {
      abbr: 'OR',
    });
    em.upsert(StateEntity, {
      uuid: oregon?.uuid || v4(),
      name: 'Oregon',
      abbr: 'OR',
    });

    // Pennsylvania
    const pennsylvania = await em.findOne(StateEntity, {
      abbr: 'PA',
    });
    em.upsert(StateEntity, {
      uuid: pennsylvania?.uuid || v4(),
      name: 'Pennsylvania',
      abbr: 'PA',
    });

    // Tennessee
    const tennessee = await em.findOne(StateEntity, {
      abbr: 'TN',
    });
    em.upsert(StateEntity, {
      uuid: tennessee?.uuid || v4(),
      name: 'Tennessee',
      abbr: 'TN',
    });

    // Utah
    const Utah = await em.findOne(StateEntity, {
      abbr: 'UT',
    });
    em.upsert(StateEntity, {
      uuid: Utah?.uuid || v4(),
      name: 'Utah',
      abbr: 'UT',
    });

    // Washington
    const washington = await em.findOne(StateEntity, {
      abbr: 'WA',
    });
    em.upsert(StateEntity, {
      uuid: washington?.uuid || v4(),
      name: 'Washington',
      abbr: 'WA',
    });

    // Wyoming
    const wyoming = await em.findOne(StateEntity, {
      abbr: 'WY',
    });
    em.upsert(StateEntity, {
      uuid: wyoming?.uuid || v4(),
      name: 'Wyoming',
      abbr: 'WY',
    });
  }
}
