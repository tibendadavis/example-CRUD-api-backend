/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesModule } from './images/images.module';
import { CarModule } from './cars/cars.module';
import { ReviewsModule } from './reviews/reviews.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { Cars } from './cars/cars.model';
import { Images } from './images/images.model';
import { Reviews } from './reviews/reviews.model';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { ConfigModule } from '@nestjs/config';
import { MessagesModule } from './messages/messages.module';
import { Message } from './messages/messages.model';
import { BlogimgModule } from './blogimg/blogimg.module';
import { blogimg } from './blogimg/blogimg.model';


@Module({
  imports: [TypeOrmModule.forFeature(
    [Cars, Images, Reviews, Message, blogimg],
  ),
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'files')
  }),
  TypeOrmModule.forRootAsync({
    useFactory: async () =>
      Object.assign(await
        getConnectionOptions(), {
        autoLoadEntities: true,
      }),
  }),
    CarModule, ImagesModule, ReviewsModule,
  MulterModule.register({
    dest: './files',
  }),
  ConfigModule.forRoot(),
    MessagesModule,
    BlogimgModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
