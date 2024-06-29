import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Vehicle } from 'src/vehicle/entity/vehicle.entity';
import { ParkingSpace } from 'src/parking-space/entity/parking-space.entity';

@Entity()
export class Park {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.parks)
  vehicle: Vehicle;

  @ManyToOne(() => ParkingSpace, (parkingSpace) => parkingSpace.parks)
  parkSpace: ParkingSpace;

  @Column()
  entryDateTime: Date;

  @Column({ nullable: true })
  exitDateTime: Date;

  @Column({ default: 'ACTIVE' })
  estado: string;
}
