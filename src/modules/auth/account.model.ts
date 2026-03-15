import mongoose from "mongoose";

const accountSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },

    userId: {
      type: String,
      required: true
    },

    accountId: {
      type: String,
      required: true
    },

    providerId: {
      type: String,
      required: true
    },

    accessToken: {
      type: String
    },

    refreshToken: {
      type: String
    },

    accessTokenExpiresAt: {
      type: Date
    },

    refreshTokenExpiresAt: {
      type: Date
    },

    scope: {
      type: String
    },

    idToken: {
      type: String
    },

    password: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export const Account = mongoose.model("Account", accountSchema);