/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CarController } from './cars.controller';
import { CarService } from './cars.service';
import "reflect-metadata";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './cars.model';
import { ImagesModule } from '../images/images.module';


@Module({
  imports : [TypeOrmModule.forFeature([Cars])],
  controllers: [CarController],
  providers: [CarService]
})
export class CarModule {}
