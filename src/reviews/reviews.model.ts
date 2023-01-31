/* eslint-disable prettier/prettier */
import { Blob } from "buffer";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToOne, Long } from "typeorm";
import { blogimg } from "../blogimg/blogimg.model";

@Entity()
export class Reviews {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ type: "longtext" })
    description: Long;

    @CreateDateColumn()
    dateCreated: Date;

    @OneToOne(() => blogimg, blogimg => blogimg.review, {
        onDelete: 'SET NULL'
    })
    blogimg: blogimg[]
}

