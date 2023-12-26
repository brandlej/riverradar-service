import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { StateDto } from 'src/api/dtos/responses/state.dto';
import { StateEntity } from 'src/domain/entities/state.entity';

@Injectable()
export class StatesService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly stateRepository: EntityRepository<StateEntity>,
  ) {}

  async findAll(): Promise<Array<StateDto>> {
    const results = await this.stateRepository.findAll();
    return StateDto.FromList(results);
  }

  async findOne(abbr: string): Promise<StateDto> {
    const result = await this.stateRepository.findOneOrFail({ abbr });
    return StateDto.From(result);
  }
}
