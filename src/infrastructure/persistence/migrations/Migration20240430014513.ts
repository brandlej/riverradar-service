import { Migration } from '@mikro-orm/migrations';

export class Migration20240430014513 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "rivers" add constraint "rivers_site_code_unique" unique ("site_code");');
  }

  async down(): Promise<void> {
    this.addSql('alter table "rivers" drop constraint "rivers_site_code_unique";');
  }

}
