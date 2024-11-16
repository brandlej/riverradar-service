import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

/**
 * https://mikro-orm.io/docs/defining-entities#using-custom-base-entity
 */
@Entity({ abstract: true })
export abstract class BaseEntity {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  uuid: string;

  @Property({ name: 'created_at', length: 6, defaultRaw: `CURRENT_TIMESTAMP` })
  createdAt: Date = new Date();

  @Property({
    name: 'updated_at',
    length: 6,
    nullable: true,
    onUpdate: () => new Date(),
  })
  updatedAt?: Date = new Date();
}
