import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from "typeorm";
import { Reviews } from "../reviews/reviews.model";

@Entity()
export class blogimg {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    dateCreated: Date;

    @OneToOne(() => Reviews, Reviews => Reviews.blogimg, {
        onDelete: 'SET NULL'
    })
    @JoinColumn({ name: "blogimg" })
    review: Reviews;

}