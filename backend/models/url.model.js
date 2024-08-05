import mongoose from "mongoose";

const urlSchema = mongoose.Schema(
  {
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
    fullUrl: {
      type: String,
      required: true,
    },
    visitHistory: [{ timestamps: { type: Number } }],
  },
  { timestaps: true },
);

export const Url = mongoose.model("url", urlSchema);
