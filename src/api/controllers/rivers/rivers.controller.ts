import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('rivers')
@Controller('rivers')
export class RiversController {
  constructor() {}

  @Get('/')
  @ApiOkResponse({ description: 'OK', type: Array<any> })
  async getStates(): Promise<Array<any>> {
    return [];
  }

  @Get('/:id')
  @ApiParam({
    name: 'id',
    type: String,
  })
  @ApiOkResponse({ description: 'OK', type: '<any>' })
  async getState(@Param('id') id: string): Promise<any> {
    return {};
  }
}
