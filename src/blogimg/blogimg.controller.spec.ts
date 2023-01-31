import { Test, TestingModule } from '@nestjs/testing';
import { BlogimgController } from './blogimg.controller';

describe('BlogimgController', () => {
  let controller: BlogimgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogimgController],
    }).compile();

    controller = module.get<BlogimgController>(BlogimgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
