import { Migration } from '@mikro-orm/migrations';

export class Migration20240428155532 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "water_reports" drop column "gage_height";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "water_reports" add column "gage_height" int not null;');
  }

}
