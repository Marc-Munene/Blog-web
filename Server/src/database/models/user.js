import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    username: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);
