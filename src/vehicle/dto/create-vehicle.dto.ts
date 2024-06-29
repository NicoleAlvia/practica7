import { IsNotEmpty, IsString, IsOptional, IsDate } from 'class-validator';

export class CreateVehicleDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  plate: string;

  @IsNotEmpty()
  @IsString()
  color: string;
}

export class CreateParkingSpaceDto {
  @IsNotEmpty()
  @IsString()
  description: string;
}

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
