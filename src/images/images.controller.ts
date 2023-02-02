/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Req, Res, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';

import { ImagesService } from './images.service'
import { ImagesDTO } from './images.dto';

import { FilesInterceptor } from '@nestjs/platform-express';

import { editFileName, imageFileFilter } from './file-uploading.utils';
import { diskStorage } from 'multer';


@Controller('images')
export class ImagesController {
  constructor(private imagesservice: ImagesService) { }

  @Post('uploads')
  @UseInterceptors(
    FilesInterceptor('images', 6, {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadMultipleFile(
    @Body() image: ImagesDTO,
    @UploadedFiles() files) {
    const response: any = [];
    files.forEach(file => {
      const fileReponse = {
        originalname: file.originalname,
        filename: file.filename,
      };
      response.push(fileReponse);
      this.imagesservice.createImage(image, fileReponse.filename);
    });
    return {
      response,
    }
  }

  @Get()
  async getAllImages() {
    const images = await this.imagesservice.getImages();
    return {
      message: 'Image fetched successfully',
      images
    };
  }

  @Get(':imgpath')
  async seeUploadedFiles(@Param('imgpath') image, @Res() res) {
    const img = await res.sendFile(image, { root: './files' });
    return {
      message: "Images fectched successfully",
      img
    }
  }


  @Delete(':id')
  async deleteImage(@Param('id') id: number) {
    await this.imagesservice.deleteImage(id);
    return {
      message: 'Image deleted successfully',
    };
  }

}
