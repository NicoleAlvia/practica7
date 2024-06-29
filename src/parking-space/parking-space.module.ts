import { Module } from '@nestjs/common';
import { ParkingSpaceService } from './parking-space.service';
import { ParkingSpaceResolver } from './parking-space.resolver';

@Module({
  providers: [ParkingSpaceService, ParkingSpaceResolver]
})
export class ParkingSpaceModule {}
