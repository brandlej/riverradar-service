import { Test, TestingModule } from '@nestjs/testing';
import { UsgsWaterService } from './usgs-water.service';

describe('UsgsWaterService', () => {
  let service: UsgsWaterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsgsWaterService],
    }).compile();

    service = module.get<UsgsWaterService>(UsgsWaterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
