import { Test, TestingModule } from '@nestjs/testing';
import { ParkResolver } from './park.resolver';

describe('ParkResolver', () => {
  let resolver: ParkResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkResolver],
    }).compile();

    resolver = module.get<ParkResolver>(ParkResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});