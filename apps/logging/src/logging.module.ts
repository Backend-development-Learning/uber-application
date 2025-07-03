import { Module } from '@nestjs/common';
import { LoggingController } from './logging.controller';
import { LoggingService } from './logging.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module';
import { RiderCoordinatesController } from './rider-coordinates/rider-coordinates.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URI ?? 'mongodb://localhost:27017/logging',
    ),
    RiderCoordinatesModule,
  ],
  controllers: [LoggingController, RiderCoordinatesController],
  providers: [LoggingService],
})
export class LoggingModule {}
