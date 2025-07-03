import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinateDTO } from './dto/create-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  @Get()
  getRiderCoordinates() {
    return 'hello i am Rider coordinates endpoint';
  }
  @Post()
  create(
    @Body()
    createCoordinatesDTO: CreateCoordinateDTO,
  ) {
    return {
      message: 'coordinate created successfully',
      data: createCoordinatesDTO,
    };
  }
}
