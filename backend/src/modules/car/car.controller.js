import ErrorClass from "../../utils/ErrorClass.js";
import cartModel from "../../DB/models/Cart.model.js";
import { asyncHandler } from "../../utils/errorHandling.js";
import carModel from "../../DB/models/Car.Model.js";

//
export const AddNewCar = asyncHandler(async (req, res, next) => {
  const newCar = await carModel.create({ ...req.body });
  return res.status(200).json({
    success: true,
    message: `Car: ${newCar.carName} is created successfully`,
    results: newCar,
  });
});

export const updateCarById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const isCarExists = await carModel.findById(id);
  if (!isCarExists) {
    return next(new ErrorClass("Cannot this this car", 404));
  }

  const carToUpdate = await carModel.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true }
  );

  res.status(200).json({
    success: true,
    message: `Car has updated successfully`,
    results: carToUpdate,
  });
});

export const deleteCarById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const carToDelete = await carModel.findByIdAndDelete(id);

  if (!carToDelete) {
    return next(new ErrorClass("Cannot Delete this car (Not Found)", 404));
  }
  return res
    .status(200)
    .json({ success: true, message: "Cart is empty now ", results: [] });
});

export const getCarById = asyncHandler(async (req, res, next) => {
  const { id } = req.params;


  const isCarExists = await carModel.findById(id);
  if (!isCarExists) {
    return next(new ErrorClass("Cannot this this car", 404));
  }

  return res
    .status(200)
    .json({ success: true, message: "Done", results: isCarExists });
});
export const getAllCars = asyncHandler(async (req, res, next) => {
  console.log("Get");
  const cars = await carModel.find({});

  return res
    .status(200)
    .json({ success: true, message: "Done", results: cars });
});
