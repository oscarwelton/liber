import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    picturePath: {
      type: String,
      default: "",
    },
    description: { type: String },
    location: { type: String },
    userPicturePath: { type: String },
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  {
    timestamp: { type: Date, default: Date.now },
  }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
