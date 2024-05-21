import mongoose, { model, Schema, Types } from "mongoose";

const cartSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    cars: [
      {
        carId: {
          id: { type: String },
          brand: { type: String },
          rating: { type: String },
          carName: { type: String },
          imgUrl: { type: String },
          model: { type: String },
          price: { type: String },
          speed: { type: String },
          gps: { type: String },
          seatType: { type: String },
          automatic: { type: String },
          description: { type: String },
        },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const cartModel = mongoose.models?.Cart || model("Cart", cartSchema);

export default cartModel;
