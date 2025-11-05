import mongoose from "mongoose";

const storageSchema = new mongoose.Schema(
  {
    url: { type: String },
    filename: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  },
  { collection: "storage" }
);

const Storage = mongoose.model("Storage", storageSchema);

export default Storage;
