import mongoose from "mongoose";
import env from 'dotenv';
env.config();

if(process.env.MONGO_URI !== undefined){
    mongoose.connect(process.env.MONGO_URI)
}
