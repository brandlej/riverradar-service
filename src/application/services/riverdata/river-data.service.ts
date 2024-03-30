import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { RiverEntity } from 'src/domain/entities/river.entity';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { catchError, firstValueFrom } from 'rxjs';
import { RiverDataWaterReportDto } from 'src/api/dtos/responses/river-data-water-report.dto';

@Injectable()
export class RiverDataService {
  constructor(
    private config: ConfigService,
    private readonly httpService: HttpService,
    @InjectRepository(RiverEntity)
    private readonly riverRepository: EntityRepository<RiverEntity>,
  ) {}

  async getRiverWaterReports(uuid: string) {
    const river = await this.riverRepository.findOneOrFail({ uuid });
    const usgsUrl = this.config.get('externalProviders.usgs.url');

    // TODO: type this data
    const { data }: any = await firstValueFrom(
      this.httpService.get(
        `${usgsUrl}?format=json&site=${river.siteCode}&startDT=2024-3-30`,
      ),
    );

    return RiverDataWaterReportDto.From(uuid, data);
  }
}
