/* eslint-disable prettier/prettier */

import { Entity, PrimaryGeneratedColumn, Column, OneToMany, } from "typeorm";
import { Images } from "../images/images.model";

@Entity()
export class Cars {

    @PrimaryGeneratedColumn()
    carid: number;

    @Column()
    name: string;

    @Column()
    maker: string;

    @Column()
    type: string;

    @Column()
    chassis: string;

    @Column()
    model: string;

    @Column()
    engineCode: string;

    @Column()
    mileage: string;

    @Column()
    engineSize: string;

    @Column()
    registrationYear: number;

    @Column()
    manufacturingYear: number;

    @Column()
    color: string;

    @Column()
    wheelDrive: string;

    @Column()
    transmission: string;

    @Column()
    location: string;

    @Column()
    steering: string;

    @Column()
    fuel: string;

    @Column()
    seats: number;

    @Column()
    doors: number;

    @Column()
    weight: string;

    @Column()
    availability: string;

    @Column({ type: 'bigint' })
    price: Buffer;

    @Column({ type: 'bigint' })
    totalPrice: Buffer;

    @OneToMany(() => Images, Images => Images.car)
    images: Images[]

}

