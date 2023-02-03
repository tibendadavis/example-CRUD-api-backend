import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Req, Res, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { BlogimgService } from './blogimg.service'
import { blogimgDTO } from './blogimg.dto';
import { Cars } from '../cars/cars.model';
import { blogimg } from './blogimg.model';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { MulterModule } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from '../blogimg/file-uploding2.util';
import { diskStorage } from 'multer';


@Controller('blogimg')
export class BlogimgController {
  constructor(private blogimgsrvc: BlogimgService) { }

  @Post('uploads')
  @UseInterceptors(
    FilesInterceptor('image', 1, {
      storage: diskStorage({
        destination: './files/blogs',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadFile(
    @Body() data: blogimgDTO,
    @UploadedFiles() files) {
    const response: any = [];
    files.forEach(file => {
      const fileReponse = {
        originalname: file.originalname,
        filename: file.filename,
      };
      response.push(fileReponse);
      this.blogimgsrvc.createBlogimgs(data, fileReponse.filename);
    });
    return {
      response,
    }
  }

  @Get(':imgpath')
  seeUploadedFiles(@Param('imgpath') image, @Res() res) {
    const img = res.sendFile(image, { root: './files/blogs' });
    return {
      message: "Blogimg fectched successfully",
      img
    }
  }

  @Delete(':id')
  async deleteReview(@Param('id') id: number) {
    await this.blogimgsrvc.deleteBlogimgs(id);
    return {
      message: 'Blogimg deleted successfully',
    };
  }
}
