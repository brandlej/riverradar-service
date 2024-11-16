import { Controller, Get, Param, ParseUUIDPipe, Query } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { RiverDataWaterReportDto } from 'src/api/dtos/responses/river-data-water-report.dto';
import { RiverDataService } from 'src/application/services/riverdata/river-data.service';

@ApiTags('river-data')
@Controller('river-data')
export class RiverDataController {
  constructor(private readonly riverDataService: RiverDataService) {}

  @Get('/:uuid/water')
  @ApiParam({
    name: 'uuid',
    type: String,
  })
  @ApiQuery({
    name: 'daysAgo',
    type: Number,
    required: false,
  })
  @ApiOkResponse({ description: 'OK', type: RiverDataWaterReportDto })
  async getRiverWaterReports(
    @Param('uuid', new ParseUUIDPipe()) uuid: string,
    @Query('daysAgo') daysAgo?: number,
  ): Promise<RiverDataWaterReportDto> {
    return await this.riverDataService.getRiverWaterReports(uuid, daysAgo);
  }
}
