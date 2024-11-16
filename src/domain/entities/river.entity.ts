import { Entity, Property, Unique } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';

@Entity({ tableName: 'rivers' })
@Unique({ properties: ['siteCode'] })
export class RiverEntity extends BaseEntity {
  @Property()
  name: string;

  @Property({ default: '' })
  location: string;

  @Property()
  stateAbbr: string;

  @Unique()
  @Property()
  siteCode: string;

  @Property({ type: 'decimal', scale: 6, default: 0 })
  lat: Number;

  @Property({ type: 'decimal', scale: 6, default: 0 })
  long: Number;
}
