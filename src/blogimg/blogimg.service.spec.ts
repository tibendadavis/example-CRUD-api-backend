import { Test, TestingModule } from '@nestjs/testing';
import { BlogimgService } from './blogimg.service';

describe('BlogimgService', () => {
  let service: BlogimgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogimgService],
    }).compile();

    service = module.get<BlogimgService>(BlogimgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
