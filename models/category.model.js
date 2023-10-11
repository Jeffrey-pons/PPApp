import mongoose from "mongoose";
const { Schema, model } = mongoose;

const categories = ["art", "photo", "mode", "design", "film", "musique"];

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Category = model("Category", CategorySchema);
export default Category;
