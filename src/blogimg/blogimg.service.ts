import { Injectable, NotFoundException } from '@nestjs/common';
import { blogimg } from './blogimg.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { blogimgDTO } from './blogimg.dto';
import { Reviews } from '../reviews/reviews.model';

@Injectable()
export class BlogimgService {
    constructor(
    @InjectRepository(blogimg)
    private readonly blogimgRepo: Repository<blogimg>,
  ){}

  async getIBlogimgs(): Promise<blogimg[]> {
    return this.blogimgRepo.find();
  }

  async createBlogimgs(blogimg: blogimgDTO, fname: string): Promise<blogimg> {
    const newImage = await this.blogimgRepo.create(blogimg)
    newImage.name = fname.toString();
    newImage.review = new Reviews();
    newImage.review.id = blogimg.reviewid;
    await this.blogimgRepo.save(newImage);
    return newImage;
  }

  async getBlogimg(id: string): Promise<blogimg> {
    return this.blogimgRepo.findOne({ id });
  }

  async deleteBlogimgs(id: number): Promise<void> {
    await this.blogimgRepo.delete(id);
  }



}
