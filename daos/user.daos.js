import User from "../models/user.model.js";

const register = async (name, lastname, job, email, password) => {
  let error = null;
  const user = {
    name,
    lastname,
    job,
    email,
    password,
  };
  try {
    await User.create(user);
  } catch (error) {
    error = `Can not create user : ${error.message}`;
  } finally {
    return {
      error,
      user,
    };
  }
};

const findByEmail = async (email) => {
  let user = null;
  let error = null;
  try {
    const result = await User.findOne({ email: email });
    if (!result) throw new Error(`User ${email} not found`);
    user = result;
  } catch (e) {
    console.error(e.message);
    error = e.message;
  } finally {
    return { error, user };
  }
};

export const userDaos = {
  register,
  findByEmail,
};
