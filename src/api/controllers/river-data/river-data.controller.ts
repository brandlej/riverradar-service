import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
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
  @ApiOkResponse({ description: 'OK', type: 'any' })
  async getRiverWaterReports(
    @Param('uuid', new ParseUUIDPipe()) uuid: string,
  ): Promise<any> {
    return await this.riverDataService.getRiverWaterReports(uuid);
  }
}
