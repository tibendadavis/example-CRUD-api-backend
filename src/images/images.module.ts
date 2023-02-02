import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Images } from './images.model';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({

  imports: [TypeOrmModule.forFeature([Images]),
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'files')
  })],
  controllers: [ImagesController],
  providers: [ImagesService]
})
export class ImagesModule { }
