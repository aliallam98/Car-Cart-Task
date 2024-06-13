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
          type: Types.ObjectId,
          ref: "Car",
          required: true,
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
