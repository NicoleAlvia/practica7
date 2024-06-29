import { IsNotEmpty, IsString } from 'class-validator';

export class CreateParkingSpaceDto {
  @IsNotEmpty()
  @IsString()
  description: string;
}
