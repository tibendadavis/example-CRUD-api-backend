import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { BlogimgController } from './blogimg.controller';
import { blogimg } from './blogimg.model';
import { BlogimgService } from './blogimg.service';

@Module({
  imports : [TypeOrmModule.forFeature([blogimg]),
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'files/blogs')
  }),],
  controllers: [BlogimgController],
  providers: [BlogimgService]
})
export class BlogimgModule {}
