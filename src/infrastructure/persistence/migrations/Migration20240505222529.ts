import { Migration } from '@mikro-orm/migrations';

export class Migration20240505222529 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "rivers" drop column "short_name";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "rivers" add column "short_name" varchar(255) not null;');
  }

}
