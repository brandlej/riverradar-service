import { ApiProperty } from '@nestjs/swagger';
import { RiverEntity } from 'src/domain/entities/river.entity';
import { OpenWeatherMapCurrentWeatherDto } from './open-weather-map-current-weather.dto';

class WeatherConditionDto {
  @ApiProperty({
    description: 'The weather id',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: 'The group of weather parameters',
    type: String,
  })
  main: string;

  @ApiProperty({
    description: 'The weather description',
    type: String,
  })
  description: string;

  @ApiProperty({
    description: 'The icon code',
    type: String,
  })
  icon: string;
}

export class CurrentRiverWeatherDto {
  @ApiProperty({
    description: 'The river uuid',
    type: String,
  })
  uuid: string;

  @ApiProperty({
    description: 'The most recent weather condition',
    type: WeatherConditionDto,
  })
  mostRecentWeatherCondition: WeatherConditionDto;

  @ApiProperty({
    description: 'The temp',
    type: String,
  })
  temp: number;

  @ApiProperty({
    description: 'The feels like temp',
    type: String,
  })
  feelsLikeTemp: number;

  @ApiProperty({
    description: 'The wind speed',
    type: String,
  })
  windSpeed: number;

  @ApiProperty({
    description: 'The wind gust',
    type: String,
  })
  windGust: number;

  @ApiProperty({
    description: 'The humidity percentage',
    type: String,
  })
  humidity: number;

  @ApiProperty({
    description: 'The cloudiness percentage',
    type: String,
  })
  cloudiness: number;

  static From(
    river: RiverEntity,
    openWeatherMapCurrentWeatherDto: OpenWeatherMapCurrentWeatherDto,
  ): CurrentRiverWeatherDto {
    const currentRiverWeatherDto = new CurrentRiverWeatherDto();

    // most recent weather condition
    const weatherConditionDto = new WeatherConditionDto();
    const mostRecentWeatherCondition =
      openWeatherMapCurrentWeatherDto.data?.weather[0];
    weatherConditionDto.id = mostRecentWeatherCondition.id;
    weatherConditionDto.main = mostRecentWeatherCondition.main;
    weatherConditionDto.description = mostRecentWeatherCondition.description;
    weatherConditionDto.icon = mostRecentWeatherCondition.icon;

    // current weather
    const currentWeather = openWeatherMapCurrentWeatherDto.data;
    currentRiverWeatherDto.uuid = river.uuid;
    currentRiverWeatherDto.mostRecentWeatherCondition = weatherConditionDto;
    currentRiverWeatherDto.temp = currentWeather.main.temp;
    currentRiverWeatherDto.feelsLikeTemp = currentWeather.main.feels_like;
    currentRiverWeatherDto.windSpeed = currentWeather.wind.speed;
    currentRiverWeatherDto.windGust = currentWeather.wind.gust;
    currentRiverWeatherDto.humidity = currentWeather.main.humidity;
    currentRiverWeatherDto.cloudiness = currentWeather.clouds.all;

    return currentRiverWeatherDto;
  }
}
