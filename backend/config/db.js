import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:9005529898@cluster0.dambm29.mongodb.net/food-del').then(() => console.log("Connect DB"));
}

