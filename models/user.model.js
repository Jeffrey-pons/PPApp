import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true, min: 2, max: 50 },
  lastname: { type: String, required: true, min: 2, max: 50 },
  job: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: 8 },
  resetPasswordToken: { type: String, required: false },
});

const User = model("User", UserSchema);
export default User;
