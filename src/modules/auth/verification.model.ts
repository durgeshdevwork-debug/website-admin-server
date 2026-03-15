import mongoose from "mongoose";

const verificationSchema = new mongoose.Schema({
  identifier: String,
  value: String,
  expiresAt: Date
});

export const Verification = mongoose.model(
  "Verification",
  verificationSchema
);