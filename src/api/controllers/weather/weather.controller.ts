import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { CurrentRiverWeatherDto } from 'src/api/dtos/responses/current-river-weather.dto';
import { WeatherService } from 'src/application/services/weather/weather.service';

@ApiTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('/rivers/:uuid')
  @ApiParam({
    name: 'uuid',
    type: String,
  })
  @ApiOkResponse({ description: 'OK', type: CurrentRiverWeatherDto })
  async getCurrentRiverWeather(
    @Param('uuid', new ParseUUIDPipe()) uuid: string,
  ): Promise<CurrentRiverWeatherDto> {
    return await this.weatherService.getCurrentRiverWeather(uuid);
  }
}
