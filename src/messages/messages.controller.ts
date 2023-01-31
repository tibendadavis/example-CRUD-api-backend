import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Req, Res, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { identity } from 'rxjs';
import { MessagesService } from './messages.service'
import { messageDTO } from './messages.dto';
import { Cars } from '../cars/cars.model';
import { Message } from './messages.model';

@Controller('messages')
export class MessagesController {
    constructor( private msgsrvc: MessagesService){}

    @Post()
    async createMsg(@Body() data:messageDTO) {
        const newMsg = await this.msgsrvc.createMsg(data);
        return{
          message: 'message posted successfully',
          newMsg
        };
    }

    @Get()
    async getAllRMsgs(){
      const Messages = await this.msgsrvc.getMsg();
      return {
               message: 'Message fetched successfully',
              Messages
           };
     }
     
     @Get(':id')
     async getMsg(@Param('id') id: number) {
      const Message = await this.msgsrvc.getSingleMsg(id);
      return {
        message: 'Message fetched successfully',
        Message
      };
    }
    
    @Delete(':id')
        async deleteMsgs(@Param('id') id: number) {
          await this.msgsrvc.deleteMsg(id);
          return {
            message: 'Message deleted successfully',
          };   
        }

}
