import { Entity, Property, Unique } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';

@Entity({ tableName: 'states' })
@Unique({ properties: ['abbr'] })
export class StateEntity extends BaseEntity {
  @Property()
  name: string;

  @Property()
  @Unique()
  abbr: string;
}
