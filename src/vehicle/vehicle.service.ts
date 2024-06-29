import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './entity/vehicle.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  async findAll(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }

  async findOne(id: number): Promise<Vehicle> {
    return this.vehicleRepository.findOne(id);
  }

  async create(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    const vehicle = this.vehicleRepository.create(createVehicleDto);
    return this.vehicleRepository.save(vehicle);
  }

  async update(id: number, updateVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    await this.vehicleRepository.update(id, updateVehicleDto);
    return this.vehicleRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.vehicleRepository.update(id, { estado: 'DELETED' });
  }
}
