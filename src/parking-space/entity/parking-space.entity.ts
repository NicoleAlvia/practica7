import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Park } from 'src/park/entity/park.entity';

@Entity()
export class ParkingSpace {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({ default: 'ACTIVE' })
  estado: string;

  @OneToMany(() => Park, (park) => park.parkSpace)
  parks: Park[];
}

