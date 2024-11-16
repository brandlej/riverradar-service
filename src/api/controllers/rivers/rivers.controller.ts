import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiOkResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { RiverDto } from 'src/api/dtos/responses/river.dto';
import { RiversService } from 'src/application/services/rivers/rivers.service';

@ApiTags('rivers')
@Controller('rivers')
export class RiversController {
  constructor(private readonly riversService: RiversService) {}

  @Get('/')
  @ApiOkResponse({ description: 'OK', type: Array<RiverDto> })
  async getRivers(): Promise<Array<RiverDto>> {
    return await this.riversService.findAll();
  }

  @Get('/:uuid')
  @ApiParam({
    name: 'uuid',
    type: String,
  })
  @ApiOkResponse({ description: 'OK', type: RiverDto })
  async getRiver(
    @Param('uuid', new ParseUUIDPipe()) uuid: string,
  ): Promise<RiverDto> {
    return await this.riversService.findOne(uuid);
  }
}
