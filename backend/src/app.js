import express from 'express'
import cors from 'cors'
import { errorMiddleware } from './middlewares/errorMiddleware.js'
import userRoute from '../src/routes/user.route.js'

const app = express()

app.use(cors({
    origin: process.env.FRONT_END
}))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use("/api/v1/user",userRoute)


app.use(errorMiddleware)
export default app