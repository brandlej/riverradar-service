import { Migration } from '@mikro-orm/migrations';

export class Migration20240505214540 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "rivers" drop column "description";');
    this.addSql('alter table "rivers" drop column "lat";');
    this.addSql('alter table "rivers" drop column "long";');
    this.addSql('alter table "rivers" drop column "access";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "rivers" add column "description" varchar(255) not null, add column "lat" varchar(255) not null, add column "long" varchar(255) not null, add column "access" varchar(255) not null;');
  }

}
