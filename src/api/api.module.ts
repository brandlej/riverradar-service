import { Module } from '@nestjs/common';
import { ApplicationModule } from 'src/application/application.module';
/**
 * The API layer is responsible for exposing endpoints to the outside world. It is also responsible for handling
 * exceptions and translating them into a format that is suitable for the client.
 *
 * https://docs.nestjs.com/controllers
 */

@Module({
  imports: [ApplicationModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
