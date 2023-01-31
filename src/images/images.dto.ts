/* eslint-disable prettier/prettier */
import { CarsDTO } from "../cars/cars.dto";
import { Cars } from "../cars/cars.model";

export interface ImagesDTO {
    imgname: string;
    dateCreated: Date;
    dateUpdated: Date;
    carid: number;
  }