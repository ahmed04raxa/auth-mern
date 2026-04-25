import asyncHandler from '../utils/asyncHandler.js'
import ApiError from '../middlewares/errorMiddleware.js'
import { User } from '../models/user.model.js'


const generateToken = (user, message, statusCode, res) => {
    const token = user.generateJsonWebToken()
    //console.log(token);

    res.status(statusCode).cookie("userCookie", token, {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000)
    }).json({ success: true, message, token })
}

const register = asyncHandler(async (req, res, next) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return next(new ApiError("All fields are required!", 400))
    }
    const existedUser = await User.findOne({ email })
    if (existedUser) {
        return next(new ApiError("User already exists!", 400))
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
const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body
    if (!email || !password) {
        return next(new ApiError("All fields are required!", 400))
    }
    const user = await User.findOne({ email })
    if (!user) {
        return next(new ApiError("Invalid Credentials!"))
    }
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ApiError("Invalid Credentials!"))
    }
    return generateToken(user, "User LoggedIn Successfully!", 200, res)
    // return res.status(200).json({
    //     success: true,
    //     message: "User LoggedIn Successfully!",
    //     user
    // })
})
export { register, login }