import mongoose, { model, Schema, Types } from "mongoose";

const bookingSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "User" },
    carsIds: [],
  },
  {
    timestamps: true,
  }
);

const bookingModel =
  mongoose.models?.Booking || model("Booking", bookingSchema);

export default bookingModel;
