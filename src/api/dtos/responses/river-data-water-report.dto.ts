import { ApiProperty } from '@nestjs/swagger';
import { WaterReportEntity } from 'src/domain/entities/water-report.entity';

class ValueEntry {
  @ApiProperty({
    description: 'The timestamp',
    type: Date,
  })
  timestamp: Date;

  @ApiProperty({
    description: 'The unit type',
    type: String,
  })
  unit: string;

  @ApiProperty({
    description: 'The entry value',
    type: String,
  })
  value: number;
}

export class RiverDataWaterReportDto {
  @ApiProperty({
    description: 'The river uuid',
    type: String,
  })
  uuid: string;

  @ApiProperty({
    description: 'The river name',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'The river name',
    type: Object,
  })
  flows: ValueEntry[];

  static From(
    uuid: string,
    name: string,
    waterReports: WaterReportEntity[],
  ): RiverDataWaterReportDto {
    const riverDataWaterReportDto = new RiverDataWaterReportDto();
    riverDataWaterReportDto.uuid = uuid;
    riverDataWaterReportDto.flows = waterReports.map(
      (wr) =>
        ({
          timestamp: wr.timestamp,
          unit: 'cfs',
          value: wr.discharge,
        }) as ValueEntry,
    );
    riverDataWaterReportDto.name = name;

    return riverDataWaterReportDto;
  }
}
