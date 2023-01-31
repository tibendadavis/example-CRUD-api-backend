/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Req, Res, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { ReviewsService } from './reviews.service'
import { ReviewsDTO } from './reviews.dto';
import { Cars } from '../cars/cars.model';
import { Reviews } from './reviews.model';


@Controller('reviews')
export class ReviewsController {
    constructor( private reviewservice: ReviewsService){}

    @Post()
    async createReview(@Body() data:ReviewsDTO) {
        const newReview = await this.reviewservice.createReview( data);
        return{
          message: 'Review posted successfully',
          newReview
        };
    }

    @Get()
    async getAllReviews(){
      const reviews = await this.reviewservice.getReviews();
      return {
               message: 'Reviews fetched successfully',
              reviews
           };
     }
     
     @Get(':id')
     async getReview(@Param('id') id: number) {
      const Blog = await this.reviewservice.getReview(id);
      return {
        message: 'Review fetched successfully',
        Blog
      };   
    }

 
    @Patch(':id')
      async updateReview(@Param('id') id: number, @Body() data: Partial<ReviewsDTO>) {
        const updatedReview = await this.reviewservice.updateReview(id, data);
        return {
          message: 'Review updated successfully',
          updatedReview
        };
    }
    
    @Delete(':id')
        async deleteReview(@Param('id') id: number) {
          await this.reviewservice.deleteReview(id);
          return {
            message: 'Review deleted successfully',
          };   
        }

}
