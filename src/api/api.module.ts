import { Module } from '@nestjs/common';
import { ApplicationModule } from 'src/application/application.module';
import { StatesController } from './controllers/states/states.controller';
import { RiversController } from './controllers/rivers/rivers.controller';
import { RiverDataController } from './controllers/river-data/river-data.controller';
import { WeatherController } from './controllers/weather/weather.controller';
/**
 * The API layer is responsible for exposing endpoints to the outside world. It is also responsible for handling
 * exceptions and translating them into a format that is suitable for the client.
 *
 * https://docs.nestjs.com/controllers
 */

@Module({
  imports: [ApplicationModule],
  controllers: [
    StatesController,
    RiversController,
    RiverDataController,
    WeatherController,
  ],
  providers: [],
})
export class ApiModule {}
