/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Long } from "typeorm/driver/mongodb/typings";


@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column({ type: 'longtext' })
    message: Long;

    @CreateDateColumn()
    dateCreated: Date;

}

