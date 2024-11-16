import { EntityRepository, NotFoundError, QueryOrder } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable, NotFoundException } from '@nestjs/common';
import { RiverDto } from 'src/api/dtos/responses/river.dto';
import { RiverEntity } from 'src/domain/entities/river.entity';

@Injectable()
export class RiversService {
  constructor(
    @InjectRepository(RiverEntity)
    private readonly riverRepository: EntityRepository<RiverEntity>,
  ) {}

  async findAll(): Promise<RiverDto[]> {
    // Sort by name, then location for conflicts
    const results = await this.riverRepository.findAll({
      orderBy: { name: QueryOrder.ASC, location: QueryOrder.ASC },
    });
    return RiverDto.FromList(results);
  }

  async findOne(uuid: string): Promise<RiverDto> {
    try {
      const result = await this.riverRepository.findOneOrFail({ uuid });
      return RiverDto.From(result);
    } catch (e) {
      if (e instanceof NotFoundError) {
        throw new NotFoundException(`River ${uuid} was not found`);
      }
    }
  }
}
