import { Migration } from '@mikro-orm/migrations';

export class Migration20240505221643 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "rivers" add column "location" varchar(255) not null default \'\';');
  }

  async down(): Promise<void> {
    this.addSql('alter table "rivers" drop column "location";');
  }

}
