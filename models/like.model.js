import mongoose from "mongoose";
const { Schema, model } = mongoose;

const likeSchema = new Schema({
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Article",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Like = model("Like", likeSchema);
export default Like;
