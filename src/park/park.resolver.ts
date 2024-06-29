import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ParkService } from './park.module';
import { Park } from './entity/park.entity';
import { CreateParkDto } from 'src/park/dto/create-park.dto';


@Resolver(() => Park)
export class ParkResolver {
  constructor(private readonly parkService: ParkService) {}

  @Query(() => [Park])
  parks() {
    return this.parkService.findAll();
  }

  @Mutation(() => Park)
  createPark(@Args('createParkDto') createParkDto: CreateParkDto) {
    return this.parkService.create(createParkDto);
  }

  // Otros métodos de consulta y mutación...
}
