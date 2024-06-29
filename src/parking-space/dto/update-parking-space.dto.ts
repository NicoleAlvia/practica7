import { IsOptional, IsString } from 'class-validator';

export class UpdateParkingSpaceDto {
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  estado?: string;
}
