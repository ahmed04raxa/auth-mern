import asyncHandler from '../utils/asyncHandler.js'
import ApiError from '../middlewares/errorMiddleware.js'
import { User } from '../models/user.model.js'

const register = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return next(new ApiError("All fields are required!"))
    }
    const existedUser = await User.findOne({ email })
    if (existedUser) {
        return next(new ApiError("User already exists!"))
    }
    const user = await User.create(
        {
            name,
            email,
            password
        }
    )
    return res.status(201).json(
        {
            success: true,
            message: "User registered successfully!",
            user
        })
})
export { register }