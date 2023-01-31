/* eslint-disable prettier/prettier */

import { ImagesDTO } from "../images/images.dto";
import { ReviewsDTO } from "../reviews/reviews.dto";

export interface CarsDTO {
  carid: number;
  name: string;
  maker: string;
  type: string;
  chassis: string;
  model: string;
  engineCode: string;
  mileage: string;
  engineSize: string;
  registrationYear: number;
  manufacturingYear: number;
  color: string;
  wheelDrive: string;
  transmission: string;
  location: string;
  steering: string;
  fuel: string;
  seats: number;
  doors: number;
  weight: string;
  availability: string;
  price: Buffer;
  totalPrice: Buffer;
  images: ImagesDTO[]

}