import bcrypt from "bcrypt";
import { userInfos } from "../utils/user.utils.js";
import { jwtSign } from "../middlewares/jwt.middleware.js";
import { userDaos } from "../daos/user.daos.js";
import { compareHash, hash } from "../utils/hash.utils.js";
import User from "../models/user.model.js";
import { makeid } from "../utils/string.utils.js";

const register = async (req, res) => {
  const { name, lastname, job, email, password } = req.body;

  const salt = await bcrypt.genSalt();
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

const lostPassword = async (req, res) => {
  const { email } = req.body;
  const { user } = await userDaos.findByEmail(email);
  const newToken = makeid(30);
  userDaos.addResetPasswordToken(user, newToken);
  console.log("http://localhost:3000/nouveau-mot-de-passe/" + newToken);
  return res
    .status(200)
    .json("http://localhost:3000/nouveau-mot-de-passe/" + newToken);
  alert("http://localhost:3000/nouveau-mot-de-passe/" + newToken);
};
// récupération nvx mot de passe
const getUserbyToken = async (req, res) => {
  const token = req.body.token;
  const { user, error } = await userDaos.findByToken(token);
  console.log(user);
  if (user) {
    return res.status(202).json({});
  } else {
    return res.status(401).json({});
  }
};
const saveNewPassword = async (req, res) => {
  const { token, password } = req.body;
  const { user, error } = await userDaos.findByToken(token);
  console.log(user, token);
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);
  userDaos.saveNewPassword(user, passwordHash);
  return res.status(201).json({});
};

const getUserProfile = async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findById(userId);

    if (user) {
      return res.status(200).json({
        id: user._id,
        name: user.name,
        lastName: user.lastname,
        job: user.job,
        email: user.email,
      });
    } else {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des informations de l'utilisateur : ",
      error
    );
    return res.status(500).json({ message: "Erreur serveur" });
  }
};
export const userController = {
  register,
  login,
  lostPassword,
  getUserProfile,
  getUserbyToken,
  saveNewPassword,
};
