import bcrypt from "bcrypt";
import { userInfos } from "../utils/user.utils.js";
import { jwtSign } from "../middlewares/jwt.middleware.js";
import { userDaos } from "../daos/user.daos.js";
import { compareHash, hash } from "../utils/hash.utils.js";

const register = async (req, res) => {
  const { name, lastname, job, email, password } = req.body;

  const salt = 10;
  const passwordHash = await bcrypt.hash(password, salt);

  const { user, error } = await userDaos.register(
    name,
    lastname,
    job,
    email,
    passwordHash
  );

  if (!!error || !user) {
    return res.status(400).json({ message: "Couldn't register" });
  }

  const token = jwtSign(user.id);

  res.status(201).json({
    message: "Account created successfully",
    user: userInfos(user),
    token: token,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const errMsg = `Authentification failed`;

  const { user, error } = await userDaos.findByEmail(email);
  if (!!error || !user) {
    return res.status(400).json({ message: errMsg });
  }

  const { err, match } = await compareHash(password, user.password);
  if (!!err || !match) return res.status(400).json({ message: errMsg });

  const token = jwtSign(user.id);

  return res
    .status(201)
    .json({ message: "sign_in_ok", user: userInfos(user), token: token });
};
const lostPassword = async (req, res) => {};

export const userController = {
  register,
  login,
  lostPassword,
};
