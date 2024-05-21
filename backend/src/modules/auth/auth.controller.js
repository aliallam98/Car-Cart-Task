import cartModel from "../../DB/models/Cart.model.js";
import userModel from "../../DB/models/User.model.js";
import ErrorClass from "../../utils/ErrorClass.js";
import { asyncHandler } from "../../utils/errorHandling.js";
import { generateToken } from "../../utils/generateAndVerifyToken.js";
import bcrypt from "bcryptjs";

export const signup = asyncHandler(async (req, res, next) => {
  const { fullName, email, password } = req.body;

  //check email exists

  const isEmailExists = await userModel.findOne({ email });
  if (isEmailExists) {
    return next(new ErrorClass("This Email Already In Use", 409));
  }

  //hash password

  const hashedPassword = await bcrypt.hashSync(password, 8);

  const maleProfilePic = `https://avatar.iran.liara.run/public/boy`;

  const newUser = await userModel.create({
    fullName,
    email,
    password: hashedPassword,
    profilePicture: maleProfilePic,
  });
  await cartModel.create({
    userId: newUser._id,
  });

  return res
    .status(200)
    .json({ success: true, message: "Done", results: newUser });
});

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  //check email
  const isEmailExists = await userModel.findOne({ email });

  if (!isEmailExists) {
    return next(new ErrorClass("Email Or Password Is Wrong", 401));
  }

  //check password
  const isPasswordMatches = await bcrypt.compareSync(
    password,
    isEmailExists.password
  );

  if (!isPasswordMatches) {
    return next(new ErrorClass("Email Or Password Is Wrong", 401));
  }

  const payload = {
    id: isEmailExists._id,
    name: isEmailExists.fullName,
    email: isEmailExists.email,
    role:isEmailExists.role
  };

  const token = generateToken({ payload });

    res.cookie("Car-Showroom-jwt", `${token}`, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "none"
  });

  return res
    .status(200)
    .json({ success: true, message: "Logged in", results: token });
});

export const logOut = asyncHandler(async (req, res, next) => {
  res.clearCookie("Car-Showroom-jwt");
  return res.status(200).json({ success: true, message: "Logged Out" });
});
