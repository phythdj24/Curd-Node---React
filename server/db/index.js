// db/index.js
import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URL) {
            throw new Error("MongoDB URL is not defined in the environment variables.");
        }

        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL, {
            dbName: DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`\n MongoDB Connected || DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGO DB CONNECTION ERROR !", error.message);
        process.exit(1);
    }
};

export default connectDB;
