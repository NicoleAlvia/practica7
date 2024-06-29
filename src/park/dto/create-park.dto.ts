import { IsNotEmpty, IsDate, IsOptional } from 'class-validator';

export class CreateParkDto {
  @IsNotEmpty()
  vehicleId: number;

  @IsNotEmpty()
  parkingSpaceId: number;

  @IsNotEmpty()
  @IsDate()
  entryDateTime: Date;

  @IsOptional()
  @IsDate()
  exitDateTime: Date;
}
