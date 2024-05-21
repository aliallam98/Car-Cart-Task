import { Router } from "express";
import auth, { availableRoles } from "../../middleware/auth.js";
import * as cartController from "./cart.controller.js"
const router = Router()



router.post("/",auth([availableRoles.user,availableRoles.admin]),cartController.addToCart)

router.get("/",auth([availableRoles.user,availableRoles.admin]),cartController.getUserCart)
router.patch("/:id",auth([availableRoles.user,availableRoles.admin]),cartController.deleteFromCart)
router.put("/",auth([availableRoles.user,availableRoles.admin]),cartController.clearAllCart)

export default router