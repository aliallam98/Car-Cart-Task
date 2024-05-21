import userModel from "../DB/models/User.model.js";
import ErrorClass from "../utils/ErrorClass.js";
import { verifyToken } from "../utils/generateAndVerifyToken.js";

const auth = (roles = []) => {
  return async (req, res, next) => {
    try {
      const token = await req.headers.authorization;

      // console.log(req.cookies);
      console.log("token", token);
      if (!token) {
        return next(new ErrorClass("Authorization Is Required", 401));
      }

      const decoded = verifyToken({ token: `${token}` });

      if (!decoded?.id) {
        return next(new ErrorClass("Invalid Payload Data", 401));
      }

      const user = await userModel.findById(decoded.id);
      if (!user) {
        return next(new ErrorClass("Not Registered Account", 404));
      }

      if (roles.length && !roles.includes(user.role)) {
        return next(new ErrorClass("You are Unauthorized", 401));
      }


      req.user = user;
      next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: "Catch error", err: error?.message });
    }
  };
};

export const availableRoles = {
  admin: "admin",
  user: "user",
};

export default auth;
