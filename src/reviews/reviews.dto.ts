/* eslint-disable prettier/prettier */
import { Blob } from "buffer";
import { IsString, IsNotEmpty } from "class-validator";
import { Long } from "typeorm";
import { blogimgDTO } from "../blogimg/blogimg.dto";

export class ReviewsDTO {
  title: string;
  description: Long;
  dateCreated: Date;
  blogimg: blogimgDTO[]
}