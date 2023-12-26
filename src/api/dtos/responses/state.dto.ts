import { ApiProperty } from '@nestjs/swagger';
import { StateEntity } from 'src/domain/entities/state.entity';

export class StateDto {
  @ApiProperty({
    description: 'The state uuid',
    type: String,
  })
  uuid: string;

  @ApiProperty({
    description: 'The state name',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'The state abbr',
    type: String,
  })
  abbr: string;

  static From(state: StateEntity): StateDto {
    const stateDto = new StateDto();
    stateDto.uuid = state.uuid;
    stateDto.name = state.name;
    stateDto.abbr = state.abbr;

    return stateDto;
  }

  static FromList(states: Array<StateEntity>): Array<StateDto> {
    const stateDtoList = [];
    for (const state of states) {
      const stateDto = new StateDto();
      stateDto.uuid = state.uuid;
      stateDto.name = state.name;
      stateDto.abbr = state.abbr;
      stateDtoList.push(stateDto);
    }

    return stateDtoList;
  }
}
