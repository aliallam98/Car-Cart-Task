import ErrorClass from "../../utils/ErrorClass.js";
import cartModel from "../../DB/models/Cart.model.js";
import { asyncHandler } from "../../utils/errorHandling.js";

//
export const addToCart = asyncHandler(async (req, res, next) => {
  const { carId, quantity, data } = req.body;

  const cart = await cartModel.findOne({ userId: req.user._id });

  const carIndex = cart.cars.findIndex(
    (ele) => ele.carId.id.toString() == carId
  );
  if (carIndex == -1) {
    cart.cars.push({
      carId: data,
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
  console.log("deleteeeeeee");
  console.log(req.params.id);
  const cart = await cartModel.findOne({
    userId: req.user._id,
  });
  if (!cart) {
    return next(new ErrorClass("This cart Is Not Found ", 404));
  }

  const cartToUpdate = await cartModel.findOneAndUpdate(
    { userId: req.user._id },
    {
      $pull: {
        cars: {
          "carId.id": req.params.id,
        },
      },
    }
  );

  res
    .status(200)
    .json({
      success: true,
      message: `car deleted from cart`,
      results: cartToUpdate,
    });
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
  console.log("1");

  const cart = await cartModel.findOne({ userId: req.user._id }).populate();

  console.log("2", cart);
  console.log("2");

  // console.log("cart",cart);
  if (!cart.cars.length) {
    return res
      .status(200)
      .json({ success: true, message: "Done", results: [] });
  }

  console.log("3");

  let totalPrice = 0;
  cart.cars = cart.cars.filter((ele) => {
    if (ele?.carId) {
      totalPrice += ele.carId.price * ele.quantity;
      return ele;
    }
  });
  cart.save();

  console.log("4");

  return res
    .status(200)
    .json({ success: true, message: "Done", results: { cart, totalPrice } });
});
