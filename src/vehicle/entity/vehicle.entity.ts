import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Park } from 'src/park/entity/park.entity';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  plate: string;

  @Column()
  color: string;

  @Column({ default: 'ACTIVE' })
  estado: string;

  @OneToMany(() => Park, (park) => park.vehicle)
  parks: Park[];
  parkings: any;
}
