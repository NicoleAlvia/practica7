import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; 
import { ParkingSpace } from './entity/parking-space.entity';
import { CreateParkingSpaceDto } from './dto/create-parking-space.dto';

@Injectable()
export class ParkingSpaceService {
  constructor(
    @InjectRepository(ParkingSpace)
    private parkingSpaceRepository: Repository<ParkingSpace>,
  ) {}

  async findAll(): Promise<ParkingSpace[]> {
    return this.parkingSpaceRepository.find();
  }

  async findOne(id: number): Promise<ParkingSpace> {
    return this.parkingSpaceRepository.findOne(id);
  }

  async create(createParkingSpaceDto: CreateParkingSpaceDto): Promise<ParkingSpace> {
    const parkingSpace = this.parkingSpaceRepository.create(createParkingSpaceDto);
    return this.parkingSpaceRepository.save(parkingSpace);
  }

  async update(id: number, updateParkingSpaceDto: CreateParkingSpaceDto): Promise<ParkingSpace> {
    await this.parkingSpaceRepository.update(id, updateParkingSpaceDto);
    return this.parkingSpaceRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.parkingSpaceRepository.update(id, { estado: 'DELETED' });
  }
}
