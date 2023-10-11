import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  images: [
    {
      // url: String,
      // caption: String,
      type: String,
    },
  ],

  videos: [
    {
      // url: String,
      // caption: String,
      type: String,
    },
  ],
  category: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "Category",
    type: String,
    required: true,
  },
  authorFirstName: {
    type: String,
    required: true,
  },
  authorLastName: {
    type: String,
    required: true,
  },
  likes: [
    {
      // type: mongoose.Schema.Types.ObjectId,
      // ref: "User",
      type: String,
    },
  ],
  comments: [
    {
      // text: {
      //   type: String,
      //   required: true,
      // },
      // author: {
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: "User",
      //   type: "String",
      //   required: true,
      // },
      // createdAt: {
      //   type: Date,
      //   default: Date.now,
      // },
      type: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = model("Post", PostSchema);
export default Post;
