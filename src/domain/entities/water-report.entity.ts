import { Entity, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';

@Entity({ tableName: 'water_reports' })
export class WaterReportEntity extends BaseEntity {
  @Property()
  timestamp: Date;

  @Property()
  discharge: number;

  @Property()
  gageHeight: number;

  @Property({ type: 'uuid' })
  riverId: string;
}
