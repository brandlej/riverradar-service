import { Migration } from '@mikro-orm/migrations';

export class Migration20240430015815 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "states" add constraint "states_abbr_unique" unique ("abbr");');
  }

  async down(): Promise<void> {
    this.addSql('alter table "states" drop constraint "states_abbr_unique";');
  }

}
