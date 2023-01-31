import { Injectable, NotFoundException } from '@nestjs/common';
import { Message  } from './messages.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { messageDTO } from './messages.dto';

@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(Message)
        private readonly msgRepo: Repository<Message>,
      ) {}

      async getMsg(): Promise<Message[]> {
        return this.msgRepo.find();
      }
    
      async createMsg(review: messageDTO): Promise<Message> {
        const newReview = await this.msgRepo.create(review)
        await this.msgRepo.save(newReview);
        return newReview;
      }
    
      async getSingleMsg(id: number): Promise<Message> {
        return this.msgRepo.findOne({ id });
    }
    
      async deleteMsg(id: number): Promise<any> {
        await this.msgRepo.delete(id);
      }
}
