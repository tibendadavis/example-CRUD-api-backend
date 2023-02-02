/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { generate } from 'shortid';
import { Repository } from 'typeorm';
import { Cars } from './cars.model';
import { CarsDTO } from './cars.dto';

@Injectable()
export class CarService {
  constructor(@InjectRepository(Cars) private carRepo: Repository<Cars>) { }

  async insertCar(data: CarsDTO) {
    this.carRepo.create(data);
    const newCar = await this.carRepo.save(data);
    return newCar;

  }

  async getCars(): Promise<Cars[]> {
    return await this.carRepo.find({ relations: ["images"] });
    // return await this.carRepo.find();
  }

  async deleteCar(userid: string): Promise<Cars> {
    const deleteduser = await this.carRepo.findOneOrFail(userid);

    return this.carRepo.remove(deleteduser);
  }

  async updateCar(
    carid: number,
    data: Partial<CarsDTO>
  ): Promise<Cars> {
    await this.carRepo.update({ carid }, data);
    return await this.carRepo.findOne({ carid });
  }

  async getSingleCar(carid: number) {
    const singleUser = await this.carRepo.find({ relations: ["images"], where: { carid }, });
    if (!singleUser) {
      throw new NotFoundException;
    } else {
      const car = (singleUser)
      return car
    }

  }

}
