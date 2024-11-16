import { EntityRepository, NotFoundError, QueryOrder } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { RiverEntity } from 'src/domain/entities/river.entity';
import { RiverDataWaterReportDto } from 'src/api/dtos/responses/river-data-water-report.dto';
import { WaterReportEntity } from 'src/domain/entities/water-report.entity';

@Injectable()
export class RiverDataService {
  constructor(
    @InjectRepository(RiverEntity)
    private readonly riverRepository: EntityRepository<RiverEntity>,
    @InjectRepository(WaterReportEntity)
    private readonly waterReportRepository: EntityRepository<WaterReportEntity>,
  ) {}

  // returns serialized date; excluding time
  formatDate(date: Date): string {
    return date.toJSON().slice(0, 10);
  }

  async getRiverWaterReports(
    uuid: string,
    daysAgo: number = 5,
  ): Promise<RiverDataWaterReportDto> {
    let river: RiverEntity;
    try {
      river = await this.riverRepository.findOneOrFail({ uuid });
    } catch (e) {
      if (e instanceof NotFoundError) {
        throw new NotFoundException(`River ${uuid} was not found`);
      }
    }

    if (daysAgo < 1) {
      throw new BadRequestException('Invalid daysAgo value provided');
    }

    const todayPlusOneDayDate = new Date();
    todayPlusOneDayDate.setDate(todayPlusOneDayDate.getDate() + 1);

    const daysAgoDate = new Date();
    daysAgoDate.setDate(daysAgoDate.getDate() - daysAgo);

    const waterReports = await this.waterReportRepository.find(
      {
        riverId: river.uuid,
        timestamp: {
          $gte: this.formatDate(daysAgoDate),
          $lte: this.formatDate(todayPlusOneDayDate),
        },
      },
      {
        orderBy: { timestamp: QueryOrder.ASC },
      },
    );

    return RiverDataWaterReportDto.From(uuid, river.name, waterReports);
  }
}
