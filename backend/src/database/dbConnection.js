import mongoose from 'mongoose'


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI,
            {
                dbName: "auth-mern"
            }
        )
        console.log(`CONNECTED TO MONGODB AT HOST : ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log(`SOME ERROR OCCURS WHILE CONNECTING TO DATABASE : ${error}`);

    }
}
export default connectDB