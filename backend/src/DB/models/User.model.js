import { Schema, Types, model } from "mongoose";

const userSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: String,
    address: String,
    role: { type: "String", enum: ["user", "admin"], default: "user" },
  },
  {
    timestamps: true,
  }
);

const userModel = model("User", userSchema);
export default userModel;
