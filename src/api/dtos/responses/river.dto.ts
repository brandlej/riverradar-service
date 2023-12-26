import { ApiProperty } from '@nestjs/swagger';
import { RiverEntity } from 'src/domain/entities/river.entity';

export class RiverDto {
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
    description: 'The river description',
    type: String,
  })
  description: string;

  @ApiProperty({
    description: 'The river access',
    type: String,
  })
  access: string;

  @ApiProperty({
    description: 'The river lat',
    type: String,
  })
  lat: string;

  @ApiProperty({
    description: 'The river long',
    type: String,
  })
  long: string;

  static From(river: RiverEntity): RiverDto {
    const riverDto = new RiverDto();
    riverDto.uuid = river.uuid;
    riverDto.name = river.name;
    riverDto.description = river.description;
    riverDto.access = river.access;
    riverDto.lat = river.lat;
    riverDto.long = river.long;

    return riverDto;
  }

  static FromList(rivers: Array<RiverEntity>): Array<RiverDto> {
    const riverDtoList = [];
    for (const river of rivers) {
      const riverDto = new RiverDto();
      riverDto.uuid = river.uuid;
      riverDto.name = river.name;
      riverDto.description = river.description;
      riverDto.access = river.access;
      riverDto.lat = river.lat;
      riverDto.long = river.long;
      riverDtoList.push(riverDto);
    }

    return riverDtoList;
  }
}
