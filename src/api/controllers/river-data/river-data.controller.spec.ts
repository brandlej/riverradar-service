import { Test, TestingModule } from '@nestjs/testing';
import { RiverDataController } from './river-data.controller';

describe('RiverDataController', () => {
  let controller: RiverDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiverDataController],
    }).compile();

    controller = module.get<RiverDataController>(RiverDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
