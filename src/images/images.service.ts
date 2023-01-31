/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Images } from './images.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImagesDTO } from './images.dto';
import { CarsDTO } from "../cars/cars.dto";
import { Cars } from '../cars/cars.model';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Images)
    private readonly imagesRepository: Repository<Images>,
  ) {}

  async getImages(): Promise<Images[]> {
    return this.imagesRepository.find();
  }

  async createImage(image: ImagesDTO, fname: string): Promise<Images> {
    const newImage = await this.imagesRepository.create(image)
    newImage.imgname = fname.toString();
    newImage.car = new Cars();
    newImage.car.carid = image.carid;
    await this.imagesRepository.save(newImage);
    return newImage;
  }

  async getImage(id: string): Promise<Images> {
    return this.imagesRepository.findOne({ id });
  }

  async deleteImage(id: number): Promise<void> {
    await this.imagesRepository.delete(id);
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
