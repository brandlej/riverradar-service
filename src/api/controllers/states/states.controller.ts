import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags, ApiParam } from '@nestjs/swagger';
import { RiverDto } from 'src/api/dtos/responses/river.dto';
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
  @ApiOkResponse({ description: 'OK', type: StateDto })
  async getState(@Param('abbr') abbr: string): Promise<StateDto> {
    return await this.statesService.findOne(abbr);
  }

  @Get('/:abbr/rivers')
  @ApiParam({
    name: 'abbr',
    type: String,
  })
  @ApiOkResponse({ description: 'OK', type: Array<RiverDto> })
  async getStateRivers(@Param('abbr') abbr: string): Promise<Array<RiverDto>> {
    return await this.statesService.getStateRivers(abbr);
  }
}
