import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
    try {
        const mongoUrl = `${process.env.MONGO_URL}/${DB_NAME}`;
        console.log('MongoDB Connection URL:', mongoUrl); // Add this line for debugging
        const connection_url = await mongoose.connect(mongoUrl);
        console.log(`DB is connected !! ${connection_url.connection.host}`);
    } catch (err) {
        console.log(err);
    }
};
