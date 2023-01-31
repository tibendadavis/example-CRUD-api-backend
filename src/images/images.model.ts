/* eslint-disable prettier/prettier */
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Cars } from "../cars/cars.model";

@Entity()
export class Images {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    imgname: string;

    @CreateDateColumn()
    dateCreated: Date;

    @UpdateDateColumn()
    dateUpdated: Date;

    @ManyToOne( ()=> Cars, Cars => Cars.images, {
        onDelete:'CASCADE'
    })
    @JoinColumn({ name: "carid" })
    car: Cars;

}

