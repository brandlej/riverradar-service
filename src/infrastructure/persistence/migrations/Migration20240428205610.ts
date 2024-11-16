import { Migration } from '@mikro-orm/migrations';

export class Migration20240428205610 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "water_reports" alter column "discharge" type numeric(10,2) using ("discharge"::numeric(10,2));');
  }

  async down(): Promise<void> {
    this.addSql('alter table "water_reports" alter column "discharge" type int using ("discharge"::int);');
  }

}
