import mongoose, { model, Schema, Types } from "mongoose";

const carSchema = new Schema(
  {
    carName: { type: String,required:true },
    description: { type: String,required:true },
    model: { type: String,required:true },
    brand: { type: String,required:true },
    speed: { type: String,required:true },
    seatType: { type: String,required:true },
    price: { type: String,required:true },
    gps: { type: String,required:true },
    automatic: { type: String },
    imgUrl: { type: String,required:true },
    rating: { type: String },
  },
  {
    timestamps: true,
  }
);

const carModel = mongoose.models?.Car || model("Car", carSchema);

export default carModel;
