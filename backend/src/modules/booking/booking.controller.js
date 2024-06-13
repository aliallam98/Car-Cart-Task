import bookingModel from "../../DB/models/Booking.Model.js";
import cartModel from "../../DB/models/Cart.model.js";
import { asyncHandler } from "../../utils/errorHandling.js";

export const createNewBooking = asyncHandler(async (req, res, next) => {
  const userId = req.user._id;
  const cars = req.body;

  console.log(cars);

  const newBooking = await bookingModel.create({
    userId,
    carsIds: cars,
  });

  return res.status(201).json({
    success: true,
    message:
      "your booking has sent to and will contact you as soon as possible ",
    results: newBooking,
  });
});

export const getAllBookings = asyncHandler(async (req, res, next) => {
  const bookings = await bookingModel.find({}).populate([{
    path:"userId"
  }]);

  return res.status(201).json({
    success: true,
    message:
      "your booking has sent to and will contact you as soon as possible ",
    results: bookings,
  });
});
