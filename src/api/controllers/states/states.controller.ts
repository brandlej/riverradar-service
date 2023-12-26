import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { StateDto } from 'src/api/dtos/responses/state.dto';
import { StatesService } from 'src/application/services/states/states.service';

@ApiTags('states')
@Controller('states')
export class StatesController {
  constructor(private readonly statesService: StatesService) {}

  @Get('/')
  @ApiOkResponse({ description: 'OK', type: Array<StateDto> })
  async getStates(): Promise<Array<StateDto>> {
    return await this.statesService.findAll();
  }

  @Get('/:abbr')
  @ApiParam({
    name: 'abbr',
    type: String,
  })
  @ApiOkResponse({ description: 'OK', type: '<any>' })
  async getState(@Param('abbr') abbr: string): Promise<any> {
    return await this.statesService.findOne(abbr);
  }
}
