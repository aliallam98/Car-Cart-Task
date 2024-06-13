import { Router } from "express";
import auth from "../../middleware/auth.js";
import * as carController from "./car.controller.js"
import * as carValidator from "./car.validation.js"
import { endpoint } from "./car.endPoint.js";
import { validation } from "../../middleware/validation.js";
const router = Router()



router.post("/",auth(),validation(carValidator.add),carController.AddNewCar)
router.put("/:id",auth(endpoint.add.updateCarById),validation(carValidator.update),carController.updateCarById)
router.delete("/:id",auth(endpoint.delete),validation(carValidator.deleteCar),carController.deleteCarById)


router.get("/",carController.getAllCars)
router.get("/:id",validation(carValidator.getById),carController.getCarById)

export default router