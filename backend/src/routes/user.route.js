import express from 'express'
import { login, logout, register } from '../controllers/user.controller.js'
import { isUserAuthenticated } from '../middlewares/auth.js'



const userRoute = express.Router()

userRoute.post("/register", register)
userRoute.post("/login", login)
userRoute.post("/logout", isUserAuthenticated, logout)

export default userRoute