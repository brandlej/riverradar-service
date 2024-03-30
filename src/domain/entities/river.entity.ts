import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';

@Entity({ tableName: 'rivers' })
export class RiverEntity extends BaseEntity {
  @Property()
  name: string;

  @Property()
  stateAbbr: string;

  @Property()
  description: string;

  @Property()
  lat: string;

  @Property()
  long: string;

  @Property()
  access: string;

  @Property()
  siteCode: string;
}
