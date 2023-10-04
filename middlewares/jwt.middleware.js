import jwt from "jsonwebtoken";

export const secret = "NDUHZ387483FEJHEJHUE73";

const jwtOptions = {
  expiresIn: `28800000`, // 8h
};

const jwtVerifiy = (token) => {
  try {
    if (!secret) throw new Error("Secret must be defined !");
    const decoded = jwt.verify(token, secret);
    const userId = decoded.data;
    return stringIsFilled(userId) ? userId : null;
  } catch (err) {
    console.error("jwtVerify: error => ", err.message);
    return null;
  }
};

export const jwtSign = (data) => jwt.sign({ data: data }, secret, jwtOptions);

export const jwtMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  const userId = jwtVerifiy(token);
  if (!userId) return res.status(403).json({ message: "unauthorized" });

  req.body = { ...req.body, userId };
  next();
};
