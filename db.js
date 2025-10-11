import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function db() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongo DB connected!`);
    } catch (error) {
        console.log("Mongo DB connection error: ", error);
        process.exit(1);
    }
}

export default db;