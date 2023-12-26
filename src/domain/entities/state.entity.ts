import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';

@Entity({ tableName: 'states' })
export class StateEntity extends BaseEntity {
  @Property()
  name: string;

  @Property()
  abbr: string;
}
