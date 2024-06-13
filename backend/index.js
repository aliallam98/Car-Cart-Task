import express from "express";
import authRouter from "./src/modules/auth/auth.router.js";
import cartRouter from "./src/modules/cart/cart.router.js";
import carRouter from "./src/modules/car/car.router.js";
import bookingRouter from "./src/modules/booking/booking.router.js";

import { globalErrorHandling } from "./src/utils/errorHandling.js";
import connectToDatabase from "./src/DB/connection.js";
import cookieParser from "cookie-parser";

import { config } from "dotenv";
import cors from "cors";

const app = express();
config();
connectToDatabase();


app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    // 'Access-Control-Allow-Origin': '*',
    //  'Access-Control-Allow-Credentials':true
  })
);
app.use("/api/auth", authRouter);
app.use("/api/cart", cartRouter);
app.use("/api/car", carRouter);
app.use("/api/booking", bookingRouter);

app.use(globalErrorHandling);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is Working on port => ${port}`));
