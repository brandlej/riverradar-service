import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { RiverEntity } from 'src/domain/entities/river.entity';
import { StateEntity } from 'src/domain/entities/state.entity';
import { WaterReportEntity } from 'src/domain/entities/water-report.entity';
import { RiversService } from './services/rivers/rivers.service';
import { StatesService } from './services/states/states.service';
import { RiverDataService } from './services/riverdata/river-data.service';
import { HttpModule } from '@nestjs/axios';
import { WeatherService } from './services/weather/weather.service';

/**
 * The Application layer is responsible for handling business logic.
 *
 * https://docs.nestjs.com/recipes/cqrs
 */
@Module({
  imports: [
    /**
     * Make sure to include all entities required by your Application layer.
     *
     * https://docs.nestjs.com/recipes/mikroorm#repositories
     */
    MikroOrmModule.forFeature([RiverEntity, StateEntity, WaterReportEntity]),
    InfrastructureModule,
    HttpModule,
  ],
  providers: [RiversService, StatesService, RiverDataService, WeatherService],
  exports: [RiversService, StatesService, RiverDataService, WeatherService],
})
export class ApplicationModule {}
