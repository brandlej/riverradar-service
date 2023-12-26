import { Module } from '@nestjs/common';
import { ApplicationModule } from 'src/application/application.module';
import { StatesController } from './controllers/states/states.controller';
import { RiversController } from './controllers/rivers/rivers.controller';
/**
 * The API layer is responsible for exposing endpoints to the outside world. It is also responsible for handling
 * exceptions and translating them into a format that is suitable for the client.
 *
 * https://docs.nestjs.com/controllers
 */

@Module({
  imports: [ApplicationModule],
  controllers: [StatesController, RiversController],
  providers: [],
})
export class ApiModule {}
