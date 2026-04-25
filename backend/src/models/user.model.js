import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: [3, "Name must have atleast 3 characters!"]
        },
        email: {
            type: String,
            required: true,
            validate: [validator.isEmail, "Please provide a valid email address"]
        },
        password: {
            type: String,
            required: true,
            minLength: [8, "Password must have atleast 8 characters!"],
        }
    }
)

userSchema.pre('save',
    async function (next) {
        if (!this.isModified("password")) return next()
        this.password = await bcrypt.hash(this.password, 10)
    }
)
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

export const User = mongoose.model("User", userSchema)