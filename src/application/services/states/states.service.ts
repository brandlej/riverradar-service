import { EntityRepository, NotFoundError, QueryOrder } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { StateDto } from 'src/api/dtos/responses/state.dto';
import { StateEntity } from 'src/domain/entities/state.entity';
import { RiverDto } from 'src/api/dtos/responses/river.dto';
import { RiverEntity } from 'src/domain/entities/river.entity';

@Injectable()
export class StatesService {
  constructor(
    @InjectRepository(StateEntity)
    private readonly stateRepository: EntityRepository<StateEntity>,
    @InjectRepository(RiverEntity)
    private readonly riverRepository: EntityRepository<RiverEntity>,
  ) {}

  async findAll(): Promise<Array<StateDto>> {
    const results = await this.stateRepository.findAll();
    return StateDto.FromList(results);
  }

  async findOne(abbr: string): Promise<StateDto> {
    try {
      const result = await this.stateRepository.findOneOrFail({
        abbr: abbr.toUpperCase(),
      });
      return StateDto.From(result);
    } catch (e) {
      if (e instanceof NotFoundError) {
        throw new NotFoundException(`State ${abbr} was not found`);
      }
    }
  }

  async getStateRivers(abbr: string): Promise<Array<RiverDto>> {
    const stateAbbr = abbr.toUpperCase();

    try {
      await this.stateRepository.findOneOrFail({
        abbr: stateAbbr,
      });
    } catch (e) {
      if (e instanceof NotFoundError) {
        throw new NotFoundException(`State ${abbr} was not found`);
      }
    }

    const results = await this.riverRepository.find(
      {
        stateAbbr: stateAbbr,
      },
      {
        orderBy: { name: QueryOrder.ASC, location: QueryOrder.ASC },
      },
    );
    return RiverDto.FromList(results);
  }
}
