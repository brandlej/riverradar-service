import { ApiProperty } from '@nestjs/swagger';
import { RiverEntity } from 'src/domain/entities/river.entity';

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
  unit: String;

  @ApiProperty({
    description: 'The entry value',
    type: String,
  })
  value: Number;
}

export class RiverDataWaterReportDto {
  @ApiProperty({
    description: 'The river uuid',
    type: String,
  })
  uuid: string;

  @ApiProperty({
    description: 'The river name',
    type: Object,
  })
  flows: ValueEntry[];

  @ApiProperty({
    description: 'The river description',
    type: Object,
  })
  gageHeights: ValueEntry[];

  static From(uuid: string, usgsData: any): RiverDataWaterReportDto {
    const riverDataWaterReportDto = new RiverDataWaterReportDto();
    riverDataWaterReportDto.uuid = uuid;

    const flowUnitType = usgsData.value.timeSeries[0].variable.unit.unitCode;
    const flows: ValueEntry[] =
      usgsData.value.timeSeries[0].values[0].value.map((v) => {
        const flowEntry = new ValueEntry();
        flowEntry.timestamp = v.dateTime;
        flowEntry.value = v.value;
        flowEntry.unit = flowUnitType;

        return flowEntry;
      });
    riverDataWaterReportDto.flows = flows;

    const gageHeightUnitType =
      usgsData.value.timeSeries[1].variable.unit.unitCode;
    const gageHeights: ValueEntry[] =
      usgsData.value.timeSeries[1].values[0].value.map((v) => {
        const gageHeightEntry = new ValueEntry();
        gageHeightEntry.timestamp = v.dateTime;
        gageHeightEntry.value = v.value;
        gageHeightEntry.unit = gageHeightUnitType;

        return gageHeightEntry;
      });
    riverDataWaterReportDto.flows = flows;
    riverDataWaterReportDto.gageHeights = gageHeights;

    return riverDataWaterReportDto;
  }
}
