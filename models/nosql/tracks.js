import mongoose from "mongoose";

const trackSchema = new mongoose.Schema(
  {
    name: { String },
    album: { String },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return req.startsWith("http");
        },
        message: "Cover must be a valid URL",
      },
    },
    artist: { name: String, nickname: String, nationality: String },
    duration: { start: Number, end: Number },
    mediaId: { type: mongoose.Schema.Types.ObjectId },
  },
  {
    timestamps: true,
    versionKey: false,
  },
  { collection: "tracks" }
);

const Track = mongoose.model("Track", trackSchema);

export default Track;
