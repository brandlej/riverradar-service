import { Test, TestingModule } from '@nestjs/testing';
import { RiverDataService } from './river-data.service';

describe('RiverDataService', () => {
  let service: RiverDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiverDataService],
    }).compile();

    service = module.get<RiverDataService>(RiverDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
