import { Long } from "typeorm/driver/mongodb/typings";

export interface messageDTO {
  email: string;
  message: Long;
  dateCreated: Date;
}