import { EntityRepository, NotFoundError } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { CurrentRiverWeatherDto } from 'src/api/dtos/responses/current-river-weather.dto';
import { OpenWeatherMapCurrentWeatherDto } from 'src/api/dtos/responses/open-weather-map-current-weather.dto';
import { RiverEntity } from 'src/domain/entities/river.entity';

@Injectable()
export class WeatherService {
  constructor(
    @InjectRepository(RiverEntity)
    private readonly riverRepository: EntityRepository<RiverEntity>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getCurrentRiverWeather(uuid: string): Promise<any> {
    let river: RiverEntity;
    try {
      river = await this.riverRepository.findOneOrFail({ uuid });
    } catch (e) {
      if (e instanceof NotFoundError) {
        throw new NotFoundException(`River ${uuid} was not found`);
      }
    }

    const weatherUrl = this.configService.get(
      'externalProviders.openWeatherMap.url',
    );
    const weatherApiKey = this.configService.get(
      'externalProviders.openWeatherMap.apiKey',
    );

    // Convert Observable from httpService into an await-able Promise using lastValueFrom
    const openWeatherMapCurrentWeatherDto: OpenWeatherMapCurrentWeatherDto =
      await lastValueFrom(
        this.httpService.get(
          `${weatherUrl}?lat=${river.lat}&lon=${river.long}&appid=${weatherApiKey}&units=imperial`,
        ),
      );

    return CurrentRiverWeatherDto.From(river, openWeatherMapCurrentWeatherDto);
  }
}
