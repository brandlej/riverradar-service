import { Migration } from '@mikro-orm/migrations';

export class Migration20240812225307 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "rivers" add column "lat" numeric(10,6) not null default 0, add column "long" numeric(10,6) not null default 0;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "rivers" drop column "lat";');
    this.addSql('alter table "rivers" drop column "long";');
  }

}
