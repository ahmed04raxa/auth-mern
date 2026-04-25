import express from 'express'
import cors from 'cors'
import { errorMiddleware } from './middlewares/errorMiddleware.js'
import userRoute from '../src/routes/user.route.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods : ["POST"]
}))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cookieParser())
app.use("/api/v1/user", userRoute)


app.use(errorMiddleware)
export default app