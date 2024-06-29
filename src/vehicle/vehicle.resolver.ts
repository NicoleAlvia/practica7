import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './entity/vehicle.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';

@Resolver(() => Vehicle)
export class VehicleResolver {
  constructor(private readonly vehicleService: VehicleService) {}

  @Query(() => [Vehicle])
  vehicles() {
    return this.vehicleService.findAll();
  }

  @Mutation(() => Vehicle)
  createVehicle(@Args('createVehicleDto') createVehicleDto: CreateVehicleDto) {
    return this.vehicleService.create(createVehicleDto);
  }

  // Otros métodos de consulta y mutación...
}
