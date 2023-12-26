import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { RiverDto } from 'src/api/dtos/responses/river.dto';
import { RiverEntity } from 'src/domain/entities/river.entity';

@Injectable()
export class RiversService {
  constructor(
    @InjectRepository(RiverEntity)
    private readonly riverRepository: EntityRepository<RiverEntity>,
  ) {}

  async findAll(): Promise<RiverDto[]> {
    const results = await this.riverRepository.findAll();
    return RiverDto.FromList(results);
  }

  async findOne(uuid: string): Promise<RiverDto> {
    const result = await this.riverRepository.findOneOrFail({ uuid });
    return RiverDto.From(result);
  }
}
