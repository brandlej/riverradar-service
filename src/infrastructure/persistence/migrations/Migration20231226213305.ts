import { Migration } from '@mikro-orm/migrations';

export class Migration20231226213305 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "rivers" ("uuid" uuid not null default gen_random_uuid(), "created_at" timestamptz(6) not null default CURRENT_TIMESTAMP, "updated_at" timestamptz(6) null, "name" varchar(255) not null, "state_abbr" varchar(255) not null, "description" varchar(255) not null, "lat" varchar(255) not null, "long" varchar(255) not null, "access" varchar(255) not null, "site_code" varchar(255) not null, constraint "rivers_pkey" primary key ("uuid"));');

    this.addSql('create table "states" ("uuid" uuid not null default gen_random_uuid(), "created_at" timestamptz(6) not null default CURRENT_TIMESTAMP, "updated_at" timestamptz(6) null, "name" varchar(255) not null, "abbr" varchar(255) not null, constraint "states_pkey" primary key ("uuid"));');

    this.addSql('create table "water_reports" ("uuid" uuid not null default gen_random_uuid(), "created_at" timestamptz(6) not null default CURRENT_TIMESTAMP, "updated_at" timestamptz(6) null, "timestamp" timestamptz(0) not null, "discharge" int not null, "gage_height" int not null, "river_id" uuid not null, constraint "water_reports_pkey" primary key ("uuid"));');
  }

}
