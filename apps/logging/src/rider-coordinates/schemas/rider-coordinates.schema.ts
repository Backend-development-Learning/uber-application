// lat,lng,rider id

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class RiderCoordinate {
  @Prop({ required: true })
  lat: number;

  @Prop({ required: true })
  lng: number;

  @Prop({ required: true })
  riderId: string;
}

export type RiderCoordinateDocument = HydratedDocument<RiderCoordinate>;
export const RiderCoordinateSchema =
  SchemaFactory.createForClass(RiderCoordinate);
