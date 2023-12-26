import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('states')
@Controller('states')
export class StatesController {
  constructor() {}

  @Get('/')
  @ApiOkResponse({ description: 'OK', type: Array<any> })
  async getRivers(): Promise<Array<any>> {
    return [];
  }

  @Get('/:abbr')
  @ApiParam({
    name: 'abbr',
    type: String,
  })
  @ApiOkResponse({ description: 'OK', type: '<any>' })
  async getRiver(@Param('abbr') abbr: string): Promise<any> {
    return {};
  }
}
