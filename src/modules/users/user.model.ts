import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    emailVerified: {
      type: Boolean,
      default: false
    },
    image: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export const User = mongoose.model("User", userSchema);