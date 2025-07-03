// Dto is data transfer Object
// our all validators ins place in this folder

import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCoordinateDTO {
  @IsNumber()
  @IsNotEmpty()
  lat: number;

  @IsNumber()
  @IsNotEmpty()
  lng: number;

  @IsString()
  @IsNotEmpty()
  riderId: string;
}
