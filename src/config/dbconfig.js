import mongoose from "mongoose";

export default async function connectMongoDB(dbUrl) {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connect Successfully!");
  } catch (error) {
    console.log("Connect Failure!!!");
  }
}
