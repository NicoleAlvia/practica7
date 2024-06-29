import { IsOptional, IsDate } from 'class-validator';

export class UpdateParkgDto {
  @IsOptional()
  vehicleId?: number;

  @IsOptional()
  parkingSpaceId?: number;

  @IsOptional()
  @IsDate()
  entryDateTime?: Date;

  @IsOptional()
  @IsDate()
  exitDateTime?: Date;

  @IsOptional()
  estado?: string;
}
