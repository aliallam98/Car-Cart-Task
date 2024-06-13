import ErrorClass from "../../utils/ErrorClass.js";
import cartModel from "../../DB/models/Cart.model.js";
import { asyncHandler } from "../../utils/errorHandling.js";
import carModel from "../../DB/models/Car.Model.js";

//
export const addToCart = asyncHandler(async (req, res, next) => {
  const { carId, quantity } = req.body;


  const car = await carModel.findById(carId);

  if (!car) {
    return next(new ErrorClass("This car Is Not Found ", 404));
  }

  const cart = await cartModel.findOne({ userId: req.user._id });

  const carIndex = cart.cars.findIndex((ele) => ele.carId.toString() == carId);


  if (carIndex == -1) {
    cart.cars.push({
      carId,
      quantity,
    });
  } else {
    cart.cars[carIndex].quantity = quantity;
  }


  cart.save();
  return res
    .status(200)
    .json({ success: true, message: `car added from cart`, results: cart });
});

export const deleteFromCart = asyncHandler(async (req, res, next) => {
  const car = await carModel.findById(req.params.id);

  if (!car) {
    return next(new ErrorClass("This car Is Not Found ", 404));
  }

  const cart = await cartModel.findOneAndUpdate(
    { userId: req.user._id },
    {
      $pull: {
        cars: {
          carId: req.params.id,
        },
      },
    }
  );

  res
    .status(200)
    .json({ success: true, message: `car ${car.carName} deleted from cart` });
});

//
export const clearAllCart = asyncHandler(async (req, res, next) => {
  if (!req.user._id) return;

  await cartModel.findOneAndUpdate(
    { userId: req.user._id },
    {
      cars: [],
    },
    { new: true }
  );

  return res
    .status(200)
    .json({ success: true, message: "Cart is empty now ", results: [] });
});

export const getUserCart = asyncHandler(async (req, res, next) => {
  const cart = await cartModel.findOne({ userId: req.user._id }).populate([
    {
      path: "cars.carId",
    },
  ]);

  if (!cart.cars.length) {
    return res
      .status(200)
      .json({ success: true, message: "Done", results: [] });
  }

  let totalPrice = 0;
  cart.cars = cart.cars.filter((ele) => {
    if (ele?.carId) {
      totalPrice += ele.carId.price * ele.quantity;
      return ele;
    }
  });
  cart.save();

  return res
    .status(200)
    .json({ success: true, message: "Done", results: { cart, totalPrice } });
});
