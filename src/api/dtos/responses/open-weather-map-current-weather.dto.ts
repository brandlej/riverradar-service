import { ApiProperty } from '@nestjs/swagger';

class CloudsDto {
  @ApiProperty({
    description: 'The cloudiness percentage',
    type: String,
  })
  all: number;
}

class WindDto {
  @ApiProperty({
    description: 'The wind speed',
    type: String,
  })
  speed: number;

  @ApiProperty({
    description: 'The wind gust',
    type: String,
  })
  gust: number;
}

class MainDto {
  @ApiProperty({
    description: 'The temp',
    type: String,
  })
  temp: number;

  @ApiProperty({
    description: 'The feels like',
    type: String,
  })
  feels_like: number;

  @ApiProperty({
    description: 'The humidity',
    type: String,
  })
  humidity: number;
}

class WeatherDto {
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

class DataDto {
  @ApiProperty({
    description: 'The weather id',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: 'The main weather',
    type: String,
  })
  main: MainDto;

  @ApiProperty({
    description: 'The wind',
    type: String,
  })
  wind: WindDto;

  @ApiProperty({
    description: 'The clouds',
    type: String,
  })
  clouds: CloudsDto;

  @ApiProperty({
    description: 'The collection of weather statuses',
    type: String,
  })
  weather: WeatherDto[];
}

export class OpenWeatherMapCurrentWeatherDto {
  @ApiProperty({
    description: 'The current weather data',
    type: String,
  })
  data: DataDto;
}
