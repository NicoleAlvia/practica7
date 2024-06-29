import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Park } from './entity/park.entity';
import { CreateParkDto } from './dto/create-park.dto';

@Injectable()
export class ParkService {
  constructor(
    @InjectRepository(Park)
    private parkRepository: Repository<Park>,
  ) {}

  async findAll(): Promise<Park[]> {
    return this.parkRepository.find();
  }

  async findOne(id: number): Promise<Park> {
    return this.parkRepository.findOne(id);
  }

  async create(createParkDto: CreateParkDto): Promise<Park> {
    const park = this.parkRepository.create(createParkDto);
    return this.parkRepository.save(park);
  }

  async update(id: number, updateParkDto: CreateParkDto): Promise<Park> {
    await this.parkRepository.update(id, updateParkDto);
    return this.parkRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.parkRepository.update(id, { estado: 'DELETED' });
  }
}
