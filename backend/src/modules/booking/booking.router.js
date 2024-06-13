import {Router} from "express"
import * as bookingController from "./booking.controller.js"
import auth, { availableRoles } from "../../middleware/auth.js"
const router = Router()


router.post("/",auth([availableRoles.admin,availableRoles.user]),bookingController.createNewBooking)
router.get("/",bookingController.getAllBookings)


export default router