import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';

@Entity({ tableName: 'rivers' })
export class RiverEntity extends BaseEntity {
  @Property()
  name: string;

  @Property({ type: 'uuid' })
  stateId: string;

  @Property()
  description: string;

  @Property()
  lat: string;

  @Property()
  long: string;

  @Property()
  access: string;
}
