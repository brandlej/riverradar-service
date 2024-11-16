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
    description: 'The river location',
    type: String,
  })
  location: string;

  @ApiProperty({
    description: 'The river lat',
    type: String,
  })
  lat: Number;

  @ApiProperty({
    description: 'The river long',
    type: String,
  })
  long: Number;

  @ApiProperty({
    description: 'The site code',
    type: String,
  })
  siteCode: string;

  @ApiProperty({
    description: 'The state abbreviation',
    type: String,
  })
  stateAbbr: string;

  static From(river: RiverEntity): RiverDto {
    const riverDto = new RiverDto();
    riverDto.uuid = river.uuid;
    riverDto.name = river.name;
    riverDto.location = river.location;
    riverDto.stateAbbr = river.stateAbbr;
    riverDto.siteCode = river.siteCode;
    riverDto.lat = river.lat;
    riverDto.long = river.long;

    return riverDto;
  }

  static FromList(rivers: Array<RiverEntity>): Array<RiverDto> {
    return rivers.map((r) => this.From(r));
  }
}
