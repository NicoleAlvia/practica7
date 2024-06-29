import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ParkingSpaceService } from './parking-space.service';
import { ParkingSpace } from './entity/parking-space.entity';;
import { CreateParkingSpaceDto } from './dto/create-parking-space.dto';

@Resolver(() => ParkingSpace)
export class ParkingSpaceResolver {
  constructor(private readonly parkingSpaceService: ParkingSpaceService) {}

  @Query(() => [ParkingSpace])
  parkingSpaces() {
    return this.parkingSpaceService.findAll();
  }

  @Mutation(() => ParkingSpace)
  createParkingSpace(@Args('createParkingSpaceDto') createParkingSpaceDto: CreateParkingSpaceDto) {
    return this.parkingSpaceService.create(createParkingSpaceDto);
  }

  // Otros métodos de consulta y mutación...
}
