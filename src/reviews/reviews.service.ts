/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Reviews } from './reviews.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReviewsDTO } from './reviews.dto';
import { CarsDTO } from "../cars/cars.dto";
import { Cars } from '../cars/cars.model';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Reviews)
    private readonly reviewsRepository: Repository<Reviews>,
  ) { }

  async getReviews(): Promise<Reviews[]> {
    return this.reviewsRepository.find({ relations: ["blogimg"] });
  }

  async createReview(review: ReviewsDTO): Promise<Reviews> {
    const newReview = await this.reviewsRepository.create(review)
    await this.reviewsRepository.save(newReview);
    return newReview;
  }

  async getReview(id: number) {
    return this.reviewsRepository.find({ relations: ["blogimg"], where: { id } });
  }

  async updateReview(
    id: number,
    data: Partial<ReviewsDTO>
  ): Promise<Reviews> {
    await this.reviewsRepository.update({ id }, data);
    return await this.reviewsRepository.findOne({ id });
  }

  async deleteReview(id: number): Promise<any> {
    await this.reviewsRepository.delete(id);
  }






  // constructor(@InjectRepository(Images) private imageRepo: Repository<Images>){};

  // async insertAddress(data:AddressDTO) {

  //   const newAddy = this.imageRepo.create(data);
  //   newAddy.car = new Cars();
  //   newAddy.car.carid = data.carid; 
  //   await this.imageRepo.save(newAddy);
  //   return newAddy;
  // }

  // async getAddresses() {
  //   return await this.imageRepo.find();
  // }

  // async getSingleAddress(id: string) {
  //   const singleAddy = await this.imageRepo.findOne({where:{id}});
  //   if (!singleAddy){
  //     throw new NotFoundException;
  //   }
  //   return singleAddy
  // }

  // async deleteAddress(id: string){
  //   const deleteduser = await this.imageRepo.findOneOrFail(id);

  //   return this.imageRepo.remove(deleteduser);
  //  }

  // async updateAddress(
  //   id: string,
  //   data : Partial<AddressDTO>
  // ){
  //  await this.imageRepo.update({id}, data);
  //   return await this.imageRepo.findOne({id});
  // }  


}
