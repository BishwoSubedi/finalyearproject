import express from 'express'
import catchError from '../utils/catchError.js'
import { register ,login , logout} from '../controller/auth.controller.js'
const router= express.Router()

router.route("/register").post(catchError(register))
router.route("/login").post(login)
router.route("/logout").post(logout)




export default router