import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected!");
  } catch (error) {
    // console.log(error);
    console.log("error connecting to database" + error.message);
    process.exit(1);
  }
};


