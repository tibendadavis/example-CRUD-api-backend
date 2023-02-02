/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Param, Get, Delete, Patch, HttpStatus, UseGuards } from '@nestjs/common';
import { CarService } from './cars.service'
import { CarsDTO } from './cars.dto';
//import { AuthorizationGuard } from '../authorization/authorization.guard';

@Controller('cars')
export class CarController {
  constructor(private carservice: CarService) { }

  @Post()
  async createCars(@Body() data: CarsDTO) {
    const car = await this.carservice.insertCar(data);

    return {
      message: 'Car created successfully',
      car
    };
  }

  @Get()
  async showCars() {
    const cars = await this.carservice.getCars();
    return {
      message: 'Cars fetched successfully',
      cars
    };
  }
  @Get(':id')
  async showSingleCar(@Param('id') id: number) {
    const car = await this.carservice.getSingleCar(id);
    return {
      car
    };
  }

  @Patch(':id')
  async uppdateCar(@Param('id') id: number, @Body() data: Partial<CarsDTO>) {
    const updatedCar = await this.carservice.updateCar(id, data);
    return {
      message: 'Car updated successfully',
      updatedCar
    };
  }

  @Delete(':id')
  async deleteCar(@Param('id') id: string) {
    await this.carservice.deleteCar(id);
    return {
      message: 'Car deleted successfully',
    };
  }
}







