import { Migration } from '@mikro-orm/migrations';

export class Migration20240421201423 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "rivers" add column "short_name" varchar(255) not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "rivers" drop column "short_name";');
  }

}
